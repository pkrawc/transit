import React, { Fragment } from "react"
import BaseStyles from "components/base-styles"

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <BaseStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}
