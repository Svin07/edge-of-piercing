import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  return (
    <Layout>
      <div className="h-dvh w-screen object-cover bg-lime-200 text-amber-500 bg-[url('../images/bg_1_3.png')]">
        <h1>Про мій сайт :)</h1>
        <p>Тут буде опис та мета сайту</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default SecondPage
