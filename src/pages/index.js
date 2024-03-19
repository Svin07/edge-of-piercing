import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/PostList.jsx"
import video from "../images/Piercing_studio_vid.mp4"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <h1 className="ml-8 my-4">
        Welcome to <b>Edge-Of-Piercing</b>
      </h1>
      {/* <video
        className="mx-auto my-24 rounded-3xl bg-slate-400"
        src={video}
        width="500"
        muted
        playsinline
        controls
        autoplay
      ></video> */}
      <iframe
        className="mx-auto my-12 rounded-3xl bg-slate-400"
        width="500px"
        height="500px"
        allow="autoplay"
        src={video}
      ></iframe>
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
