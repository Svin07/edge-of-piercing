import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <h1 className="ml-8 my-4">
        Welcome to <b>Edge-Of-Piercing</b>
      </h1>
      <ul className="mx-24 flex flex-col gap-8">
        {nodes.map(post => {
          const { category, title, url, image } = post.frontmatter
          const img = getImage(image)
          return (
            <li
              key={post.id}
              className="flex gap-8 p-4 items-center border-2 border-solid border-white cursor-pointer hover:scale-105 hover:bg-slate-700 transition-transform"
            >
              <GatsbyImage
                image={img}
                className="rounded-xl w-24 h-24"
                alt={title}
              />
              <Link to={`/${category}/${url}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
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
