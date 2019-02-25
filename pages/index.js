import { useRef } from "react"
import styled from "styled-components"
import { colors } from "constants"
import useMapBox from "hooks/useMapBox"
import Icon from "components/icon"
import SearchBar from "components/search-bar"
import BusRoutes from "components/bus-routes"

export default props => {
  const container = useRef(null)
  const map = useMapBox(container)
  return (
    <Main ref={container}>
      <Header>
        <Icon name="menu" />
        <Wallet>
          <p>
            <span className="small">$ </span>47.50
          </p>
          <Icon name="wallet-outline" />
        </Wallet>
        <SearchBar>
          <input type="text" className="source" value="Your Location" />
          <input type="text" className="destination" value="900 N Franklin St" />
          <span className="dotted-line" />
        </SearchBar>
      </Header>
      <BusRoutes />
    </Main>
  )
}

const Main = styled.main`
  min-height: 100vh;
  background: ${colors.grey_300};
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
