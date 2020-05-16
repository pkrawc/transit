import styled from "styled-components"
import axios from "axios"
import dynamic from "next/dynamic"
import { colors, apiKey } from "constants"
import Icon from "components/icon"
import SearchBar from "components/search-bar"
import BusRoutes from "components/bus-routes"

const MapBox = dynamic({
  loader: () => import("../components/map-box"),
  loading: () => <div className="map-loader" />,
  ssr: false,
})

export default function Home({ buses }) {
  return (
    <Main>
      <MapBox buses={buses} />
      <Header>
        <Icon name="menu" />
        <Wallet>
          <p>
            <span className="small">$ </span>47.50
          </p>
          <Icon name="wallet-outline" />
        </Wallet>
        <SearchBar>
          <input
            onChange={(e) => console.log(e.target.value)}
            type="text"
            className="source"
            value="Your Location"
          />
          <input
            onChange={(e) => console.log(e.target.value)}
            type="text"
            className="destination"
            value="900 N Franklin St"
          />
          <span className="dotted-line" />
        </SearchBar>
      </Header>
      <BusRoutes />
    </Main>
  )
}

Home.getInitialProps = async () => {
  const url = "http://www.ctabustracker.com/bustime/api/v2/getvehicles"
  try {
    const { data } = await axios.get(url, {
      params: { key: apiKey, rt: "72", format: "json" },
      crossdomain: true,
    })
    return { buses: data["bustime-response"]["vehicle"] }
  } catch (err) {
    return { buses: null, error: err }
  }
}

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .map-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.blue_300};
    z-index: -1;
  }
`

const Header = styled.header`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  .mdi-menu {
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Wallet = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${colors.grey_100};
  border-radius: 2px;
  box-shadow: 0 12px 0 -6px rgba(0, 0, 0, 0.1);
  .mdi {
    margin-left: 1rem;
    color: ${colors.grey_500};
  }
`
