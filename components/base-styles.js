import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
:root {
  font-size: 12px;
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  position: relative;
  font-size: 1.5rem;
  font-family: "IBM Plex Mono", monospace;
  color: ${colors.blue_900};
}
h2, h3, h4, p, a {
  margin: 0;
}
h2 {
  font-size: 3rem;
  font-weight: 200;
}
h3 {
  font-size: 2rem;
}
.small {
  font-size: 1.25rem;
}
`
