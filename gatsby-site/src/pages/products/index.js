import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import List from '../../components/list';
import Auth from '../../auth/auth';
import './products.scss';
import Deck from '../../components/Deck';
import ProductQuery from '../../components/product-query'

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const Products = (props) => {
  // const products = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Products" />
      <h1>Products</h1>
      {/* <List items={products} /> */}
      {/* <Deck /> */}
      <ProductQuery/>
    </Layout>
  )
}

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;

export default Products;