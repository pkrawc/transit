import styled from "styled-components"

export default styled.span.attrs(({ name }) => ({
  className: `mdi mdi-${name}`
}))`
  font-size: 2rem;
`
