import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/PostList.jsx"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <h1 className="ml-8 my-4">
        Welcome to <b>Edge-Of-Piercing</b>
      </h1>

      <PostList data={nodes} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 96, formats: AUTO)
            }
          }
        }
        id
      }
    }
  }
`
