import { useLayoutEffect, useState } from "react"
import mapbox from "mapbox-gl"

export default ref => {
  const [map, setMap] = useState(null)
  const token =
    "pk.eyJ1IjoicGF0cmljay1rcmF3Y3p5a293c2tpIiwiYSI6ImNqNGVrd2s5djB2bG0ydm5odndoZ24wbWgifQ.cG1Bd5RQ9SM8J1ErBHKIVQ"
  const buildMap = ref => {
    mapbox.accessToken = token
    setMap(
      new mapbox.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/light-v9"
      })
    )
  }
  useLayoutEffect(() => {
    buildMap(ref)
  }, [])
  return map
}
