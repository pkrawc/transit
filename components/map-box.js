import React, { useCallback, useRef, useLayoutEffect } from "react"
import styled from "styled-components"
import mapbox from "mapbox-gl"
import { mapboxKey } from "constants"

const useMap = ref => {
  const buildMap = useCallback(() => {
    mapbox.accessToken = mapboxKey
    new mapbox.Map({
      container: ref.current,
      style: "mapbox://styles/patrick-krawczykowski/cjsl7x3mk01hg1fquho6enkhs",
      center: [-87.678, 41.91],
      zoom: 13.5
    })
  }, [ref.current])
  useLayoutEffect(() => {
    if (!ref.current) return
    buildMap()
  })
}

export default props => {
  const container = useRef(null)
  const map = useMap(container)
  return <Container ref={container} />
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`
