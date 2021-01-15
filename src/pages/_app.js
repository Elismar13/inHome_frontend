/* eslint-disable react/react-in-jsx-scope */
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100vh;
    width: 100vw;
    font-size: 16px;
  }

  body {
    background: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --side-bar-color: #5DB9FF;
    --borders-color: #c5c5c5;
    --dashboard-area-color: #EEEEEE;
    --dashboard-cards-container: #fafafa;
    --selectd-button: rgb(13, 189, 101);
    --ambient-card-background-color: #fafafa;
    --sensor-card-background-color: #bae452;
    --superior-bar-color: #EEEEEE;
  } 

  h2 {
    font-weight: normal;
    font-size: 1.2rem;
    padding: 0.5rem 1.5rem;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
      crossorigin=""/>
     <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
      integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
      crossorigin=""></script>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}