import React, { useCallback, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import mapbox from "mapbox-gl";
import { mapboxKey } from "constants";

const useMap = (ref, buses) => {
  const buildMap = useCallback(async () => {
    mapbox.accessToken = mapboxKey;
    const map = new mapbox.Map({
      container: ref.current,
      style: "mapbox://styles/patrick-krawczykowski/cjsl7x3mk01hg1fquho6enkhs",
      center: [buses[1].lon, buses[1].lat],
      zoom: 11.33,
      pitch: 30,
    });
    const handleImageLoad = (err, img) => {
      if (err) throw err;
      map.addImage("my-bus", img);
      buses.forEach((bus) => {
        map.addLayer({
          id: bus.vid,
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: { type: "Point", coordinates: [bus.lon, bus.lat] },
                },
              ],
            },
          },
          layout: {
            "icon-image": "my-bus",
            "icon-size": 0.33,
            "icon-pitch-alignment": "map",
            "icon-rotate": parseInt(bus.hdg),
          },
        });
      });
    };
    const handleLoad = async () => {
      map.loadImage("/bus.png", handleImageLoad);
    };
    map.on("load", handleLoad);
  }, [ref.current]);
  useLayoutEffect(() => {
    if (!ref.current) return;
    buildMap();
  });
};

export default (props) => {
  const container = useRef(null);
  useMap(container, props.buses);
  return <Container ref={container} />;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
