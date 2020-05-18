import React, { useCallback, useRef, useState, useEffect } from "react"
import styled from "styled-components"
import mapbox from "mapbox-gl"
import { mapboxKey } from "constants"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

const vehicleLayer = ({ vid, lon, lat, hdg }) => ({
  id: vid,
  type: "symbol",
  source: {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [lon, lat],
          },
        },
      ],
    },
  },
  layout: {
    "icon-image": "transit-bus",
    "icon-size": 0.5,
    "icon-pitch-alignment": "map",
    "icon-rotate": parseInt(hdg),
  },
  paint: {
    "icon-halo-color": "rgba(0,0,0,0.5)",
    "icon-halo-width": 40,
  },
})

export default function VehicleMap({ vehicles }) {
  const [oldVehicles, setOld] = useState([])
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!containerRef.current) return null
    if (!loaded) {
      const coords = JSON.parse(localStorage.getItem("location"))
      const center = coords
        ? [coords.latitude, coords.longitude]
        : [-87.623177, 41.881832]
      console.log(localStorage.getItem("location"))
      mapbox.accessToken = mapboxKey
      mapRef.current = new mapbox.Map({
        container: containerRef.current,
        style:
          "mapbox://styles/patrick-krawczykowski/cjsl7x3mk01hg1fquho6enkhs",
        center,
        zoom: 10,
        pitch: 30,
      })
      mapRef.current.on("load", () => {
        mapRef.current.loadImage("/bus.png", (err, img) => {
          if (err) throw err
          mapRef.current.addImage("transit-bus", img)
        })
        setLoaded(true)
      })
    }
    return () => setLoaded(false)
  }, [containerRef])
  useEffect(() => {
    if (!mapRef.current) return null
    setOld(vehicles)
    for (let oldVehicle of oldVehicles) {
      mapRef.current.removeLayer(oldVehicle.vid)
    }
    for (let vehicle of vehicles) {
      mapRef.current.addLayer(vehicleLayer(vehicle))
    }
  }, [vehicles])
  return <Container ref={containerRef} />
}
