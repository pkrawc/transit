import { default as NextDoc, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

export default class Document extends NextDoc {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => (
      <StyleSheetManager sheet={sheet.instance}>
        <App {...props} />
      </StyleSheetManager>
    ))
    const styles = sheet.getStyleElement()
    return { ...page, styles }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3330EA" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styles}
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:200,400,600,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.materialdesignicons.com/3.4.93/css/materialdesignicons.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
