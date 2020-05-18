import { useReducer, useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import dynamic from "next/dynamic"
import BusRoutes from "components/RouteCards"
import RouteMenu from "components/RouteMenu"
import Location from "components/Location"

const MapLoader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.blue_300};
  z-index: -1;
`

const HomeWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  position: relative;
  display: flex;
  padding: 1rem;
`

const MapContainer = dynamic({
  loader: () => import("../components/MapContainer"),
  loading: () => <MapLoader />,
  ssr: false,
})

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
      <MapContainer vehicles={vehicles} />
      <Header>
        <RouteMenu onSelect={handleSelect} />
        <Location />
      </Header>
      <BusRoutes />
    </HomeWrapper>
  )
}
