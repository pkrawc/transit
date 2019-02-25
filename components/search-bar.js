import styled from "styled-components"
import { colors } from "constants"
export default styled.div`
  position: relative;
  background: ${colors.grey_100};
  margin-top: 2rem;
  border-radius: 2px;
  box-shadow: 0 9px 0 -6px rgba(0, 0, 0, 0.1);
  width: 100%;
  input {
    all: unset;
    font-size: 1.5rem;
    box-sizing: border-box;
    display: block;
    width: calc(100% - 4rem);
    margin-left: 6rem;
    padding: 2rem 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 2.25rem;
    left: 2.25rem;
    border: 4px solid ${colors.blue_500};
    width: 0.75rem;
    height: 0.75rem;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 2.25rem;
    left: 2.25rem;
    border: 4px solid ${colors.green_500};
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
  }
  .source {
    border-bottom: 1px solid ${colors.grey_300};
  }
  .dotted-line {
    position: absolute;
    left: 2.85rem;
    top: 50%;
    height: 1.5rem;
    transform: translateY(-50%);
    border-left: 1px dashed ${colors.grey_500};
  }
`
