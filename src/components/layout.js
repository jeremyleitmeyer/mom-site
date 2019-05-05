import React from "react"
import { createGlobalStyle } from 'styled-components'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./layout/header"
import Footer from "./layout/footer"

const SansFamily = 'Tahoma, Verdana, Segoe, sans-serif';
const SerifFamily = 'Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif';

const GlobalStyle = createGlobalStyle`
  html,body,p {
    font-family: ${SansFamily};
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${SerifFamily};
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
