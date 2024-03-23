import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, url, category, image } = data.markdownRemark.frontmatter
  const img = getImage(image)

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <p>{`/${category}/${url}`}</p>

        <div className="">
          <GatsbyImage image={img} className="rounded-xl" alt={title} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.frontmatter.title} />
)

export default SinglePost

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        url
        category
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 500, formats: AUTO)
          }
        }
      }
    }
  }
`
