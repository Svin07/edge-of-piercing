import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import ScrollToTop from "react-scroll-to-top"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/PostList.jsx"

import svg from "../images/icons/arrow-up.svg"

const SecondPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <ScrollToTop
        top={60}
        smooth
        className="bg-orange-400 opacity-50 hover:opacity-100 fixed bottom-20 right-4 rounded-xl inline-flex items-center justify-center w-16 h-16"
        component={<img src={svg} alt="arrow up" />}
      />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <PostList data={nodes} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export default SecondPage

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
