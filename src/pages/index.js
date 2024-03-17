import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="flex ">
      <h1>
        Welcome to <b>Edge-Of-Piercing</b>
      </h1>
      <StaticImage
        className="rounded-xl ml-4"
        src="../images/piercing-3759367_1920-min.jpg"
        loading="eager"
        width={256}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="piercing"
      />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
