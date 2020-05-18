import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { routes } from "constants"

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

export default function RouteMenu({ onSelect = () => null }) {
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
