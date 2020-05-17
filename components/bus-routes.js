import React from "react"
import styled from "styled-components"

const routes = [
  { number: 66, eta: "3 mins", selected: true },
  { number: 87, eta: "7 mins", selected: false },
  { number: 44, eta: "5 mins", selected: false },
  { number: 56, eta: "9 mins", selected: false },
  { number: 58, eta: "4 mins", selected: false },
  { number: 112, eta: "12 mins", selected: false },
]

export default (props) => {
  return (
    <BusRoutes>
      {routes.map((route, i) => {
        return (
          <Route
            key={i}
            onClick={(e) => console.log(e.target)}
            className={route.selected && "selected"}
          >
            <div>
              <span className="mdi mdi-timer-sand"></span>
              <p>
                <strong>{route.eta}</strong>
              </p>
            </div>
            <div>
              <span className="mdi mdi-bus-stop"></span>
              <p>
                <strong>2000 Halsted</strong>
              </p>
            </div>
          </Route>
        )
      })}
      <div className="padding" />
    </BusRoutes>
  )
}

const BusRoutes = styled.section`
  position: relative;
  display: flex;
  padding: 0 2rem 1rem;
  margin: auto 0 1rem;
  scroll-padding-left: 2rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overflow-x: auto;
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
  width: calc(100% - 4rem);
  max-width: 40rem;
  background: ${({ theme }) => theme.colors.grey_100};
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.selected {
    background: ${({ theme }) => theme.colors.grey_900};
    color: ${({ theme }) => theme.colors.blue_100};
  }
  .mdi {
    color: ${({ theme }) => theme.colors.grey_500};
    margin-right: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`
