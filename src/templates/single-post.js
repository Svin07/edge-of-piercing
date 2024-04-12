import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ScrollToTop from "react-scroll-to-top"

import Layout from "../components/layout"
import Seo from "../components/seo"

import svg from "../images/icons/arrow-up.svg"

const SinglePost = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, url, category, image } = data.markdownRemark.frontmatter
  const img = getImage(image)

  return (
    <Layout>
      <ScrollToTop
        top={60}
        smooth
        className="bg-orange-400 opacity-50 hover:opacity-100 fixed bottom-20 right-4 rounded-xl inline-flex items-center justify-center w-16 h-16"
        component={<img src={svg} alt="arrow up" />}
      />
      <section className="relative">
        <div className="w-full max-w-sm  md:max-w-3xl xl:max-w-5xl mx-auto p-6 md:p-10 xl:p-12">
          <h1>{title}</h1>
          <p>{`/${category}/${url}`}</p>

          <div>
            <GatsbyImage
              className="block mx-auto rounded-xl max-w-xl"
              image={img}
              alt={title}
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </section>
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
            gatsbyImageData(placeholder: BLURRED, width: 960, formats: AUTO)
          }
        }
      }
    }
  }
`
