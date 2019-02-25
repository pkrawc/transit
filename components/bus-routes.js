import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import Icon from "components/icon"

const routes = [
  { number: 66, eta: "3 mins", transfer: false, selected: true },
  { number: 87, eta: "7 mins", transfer: false, selected: false },
  { number: 44, eta: "5 mins", transfer: false, selected: false },
  { number: 56, eta: "9 mins", transfer: true, selected: false },
  { number: 58, eta: "4 mins", transfer: false, selected: false },
  { number: 112, eta: "12 mins", transfer: false, selected: false }
]

export default props => {
  return (
    <BusRoutes>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            onClick={e => console.log(e.target)}
            className={route.selected && "selected"}>
            <span>
              <Icon name="bus" />
              <h3># {route.number}</h3>
            </span>
            <span>
              <Icon name="timer-sand" />
              <p>
                <strong>{route.eta}</strong>
              </p>
            </span>
            <span>
              <Icon name="directions-fork" />
              <p>
                <strong>{route.transfer ? "Transfer" : "Direct"}</strong>
              </p>
            </span>
          </Route>
        )
      })}
      <div className="padding" />
    </BusRoutes>
  )
}

const BusRoutes = styled.section`
  position: relative;
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scroll-padding-left: 2rem;
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
  width: 16rem;
  height: 16rem;
  background: ${colors.grey_100};
  border-radius: 2px;
  box-shadow: 0 12px 0 -6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.selected {
    background: ${colors.grey_900};
    color: ${colors.blue_100};
  }
  .mdi {
    color: ${colors.grey_500};
    margin-right: 1rem;
  }
  > span {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`
