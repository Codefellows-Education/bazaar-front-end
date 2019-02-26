import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Nav from "./nav.js";

import LoginContext from "../auth/context";
import './layout.scss';

import Header from "./header"
import Footer from './footer'

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
      <LoginContext>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <Nav />
        <Footer />
      </LoginContext>
    )}
  />
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
