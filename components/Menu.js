import React, { createContext, useMemo, createElement, useContext } from "react"
import styled from "styled-components"

const MenuContext = createContext()

function MenuProvider({ id, ...props }) {
  const targetRef = useRef()
  const listRef = useRef()
  const context = useMemo(
    () => ({
      id,
    }),
    [id]
  )
  return <MenuContext.Provider {...props} value={context} />
}

function MenuTarget({ children, ...props }) {
  const { id } = useContext(MenuContext)
  return createElement(children, { ...props, id: id })
}
