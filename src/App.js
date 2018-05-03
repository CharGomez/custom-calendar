import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

// Helpers
import { theme } from 'utils/theme'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav {
    width: 100%;
    background: #108db8;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <AppStyles>
        <nav>
          <Link to="/">Calendar</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </AppStyles>
    </ThemeProvider>
  </Router>
)

export default hot(module)(App)
