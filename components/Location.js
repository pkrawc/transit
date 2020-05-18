import React from "react"
import styled from "styled-components"

const LocationWrapper = styled.button`
  appearance: none;
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
  border: none;
`

export default function Location({ onLocation, ...props }) {
  function locate(evt) {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      onLocation(coords)
      localStorage.setItem("location", JSON.stringify(coords))
    })
  }
  return (
    <LocationWrapper
      {...props}
      className="mdi mdi-crosshairs"
      onClick={locate}
    />
  )
}
