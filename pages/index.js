import styled from "styled-components"
import { colors } from "constants"
import Icon from "components/icon"
import SearchBar from "components/search-bar"

export default props => {
  return (
    <Main>
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
      <BusRoutes>
        <Route />
        <Route />
        <Route />
        <Route />
        <div className="padding" />
      </BusRoutes>
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
  box-shadow: 0 9px 0 -6px rgba(0, 0, 0, 0.1);
  .mdi {
    margin-left: 1rem;
    color: ${colors.grey_500};
  }
`

const BusRoutes = styled.section`
  position: relative;
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scroll-padding-left: 2rem;
  scroll-padding-right: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: auto;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  .padding {
    width: 1px;
    flex: 0 0 auto;
  }
`

const Route = styled.div`
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 15rem;
  height: 15rem;
  background: ${colors.grey_100};
  border-radius: 2px;
  box-shadow: 0 9px 0 -6px rgba(0, 0, 0, 0.1);
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`
