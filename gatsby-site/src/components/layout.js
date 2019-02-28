import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import LoginContext from "../auth/context";
import './layout.scss';
import Header from "./header"
import Footer from './footer'

const Layout = ({ children }, props) => (
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
        <div className="contentContainer">
          <main>{children}</main>
        </div>

        <Footer />
      </LoginContext>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
