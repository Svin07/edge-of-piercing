import * as React from "react"
import { Link } from "gatsby"

import logo from "../images/Piercing_studio_transparent.png"

const Header = ({ siteTitle }) => (
  <header className="bg-slate-100 grid grid-cols-2 justify-items-center text-slate-700 my-auto">
    <img className="w-36 h-36 -mt-5" src={logo} alt="Logo" />
    <nav className="h-4 mt-6 flex gap-4 content-between">
      <Link to="/">{siteTitle}</Link>
      <Link to="/about">About</Link>
      <Link to="/page-2">Page-2</Link>
      <Link to="/using-ssr">Using-SSR</Link>
    </nav>
  </header>
)

export default Header
