import styled from "styled-components"

export default styled.span.attrs({
  className: ({ name }) => `mdi mdi-${name}`
})`
  font-size: 2rem;
`
