import { useReducer, useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import dynamic from "next/dynamic"
import BusRoutes from "components/bus-routes"
import { routes } from "constants"

const MapBox = dynamic({
  loader: () => import("../components/map-box"),
  loading: () => <div className="map-loader" />,
  ssr: false,
})

const HomeWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .map-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.blue_300};
    z-index: -1;
  }
  .header {
    position: relative;
    display: flex;
    padding: 1rem;
    .location {
      all: unset;
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 1.5rem 2rem;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.grey_700};
      background: ${({ theme }) => theme.colors.grey_100};
      border-radius: 0.25rem;
    }
  }
`

function routesReducer(state, { type, payload }) {
  switch (type) {
    case "FETCH_ROUTES_SUCCESS":
      return { ...state, vehicles: payload }

    default:
      throw Error(`Unknown action: ${type}`)
  }
}

function useCTA(route) {
  const [{ vehicles, loading, error }, dispatch] = useReducer(routesReducer, {
    vehicles: [],
    error: null,
  })
  useEffect(() => {
    let canceled = false
    async function fetchRoutes() {
      try {
        if (!canceled) {
          const { data } = await axios.get(`/api/buses/${route}`)
          dispatch({
            type: "FETCH_ROUTES_SUCCESS",
            payload: data["bustime-response"]["vehicle"],
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (route) fetchRoutes()
    return () => (canceled = true)
  }, [route])
  return { vehicles, loading, error }
}

export default function Home() {
  const [selected, setSelected] = useState("")
  const { vehicles, error } = useCTA(selected)
  function handleSelect({ route }) {
    setSelected(route)
  }
  if (error) return <h3>There was an error.</h3>
  return (
    <HomeWrapper>
      <MapBox vehicles={vehicles} />
      <header className="header">
        <RouteSelect onSelect={handleSelect} />
        <button className="location mdi mdi-crosshairs" />
      </header>
      <BusRoutes />
    </HomeWrapper>
  )
}

const SelectWrapper = styled.section`
  position: relative;
  width: 100%;
  .mdi-pound {
    position: absolute;
    top: 1.5rem;
    left: 2rem;
  }
  .select__button {
    appearance: none;
    border: none;
    padding: 1.5rem 2rem;
    padding-left: 5rem;
    background: ${({ theme }) => theme.colors.grey_100};
    border-radius: 0.25rem;
    box-shadow: ${({ theme }) => theme.shadows[0]};
    font-size: 1.5rem;
    font-family: "IBM Plex Mono", monospace;
    text-align: left;
    width: 100%;
    outline: none;
  }
  .select__list {
    position: absolute;
    top: calc(100% - 2px);
    background: ${({ theme }) => theme.colors.grey_100};
    margin: 0;
    padding: 2rem;
    width: 100%;
    height: calc(100vh - 20rem);
    list-style: none;
    overflow-y: auto;
    border-radius: 0 0 0.25rem 0.25rem;
    li {
      display: flex;
      justify-content: space-between;
    }
    li:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`

function RouteSelect({ onSelect = () => null }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  function toggleList() {
    setOpen((open) => !open)
  }
  function handleSelect({ route, name }) {
    setValue(name)
    onSelect({ name, route })
    toggleList()
  }
  return (
    <SelectWrapper>
      <button className="select__button" id="select-1" onClick={toggleList}>
        {value.length ? value : "Select a bus route."}
      </button>
      <span className="mdi mdi-pound" />
      {open && (
        <ul className="select__list">
          {routes.map(({ route, name }) => (
            <li
              key={route}
              data-name={name}
              data-route={route}
              onClick={(e) => handleSelect({ route, name })}
            >
              <span>{name}</span>
              <span>{route}</span>
            </li>
          ))}
        </ul>
      )}
    </SelectWrapper>
  )
}
