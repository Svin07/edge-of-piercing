import * as React from "react"

import { Link } from "gatsby"

import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <section className="h-screen w-screen overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed bg-[url('../images/Hello_3.png')] flex justify-center items-end pb-28 mx-auto">
        <Link
          className="no-underline inline-block w-56 h-16 text-md leading-10  my-2.5 mx-5  uppercase text-center tracking-wide font-semibold rounded-2xl bg-white text-[#524f4e] duration-[800ms] shadow-lg  hover:shadow-[0_15px_20px_rgba(46, 229, 157, .4)] hover:text-white hover:bg-[#524f4e] hover:translate-y-[-3]"
          to="/page-2"
        >
          Вперед!..
        </Link>
      </section>
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
