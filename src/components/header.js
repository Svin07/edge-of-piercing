import * as React from "react"
import { Link } from "gatsby"

import logo from "../images/Piercing_studio_transparent.png"

const Header = ({ siteTitle }) => (
  <header className="bg-slate-100 grid grid-cols-2 justify-items-center text-slate-700 my-auto">
    <img className="w-36 h-36" src={logo} alt="Logo" />
    <Link to="/">{siteTitle}</Link>
  </header>
)

export default Header
