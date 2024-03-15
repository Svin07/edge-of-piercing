import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Про мій сайт :)</h1>
    <p>Тут буде опис та мета сайту</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default SecondPage
