import * as React from "react"
import { Link } from "gatsby"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  {
    text: "About",
    url: "about",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const Header = ({ siteTitle }) => (
  <header className="bg-slate-700 grid grid-cols-7">
    <img alt="" src="  " className="w-12 h-12" />
    <Link to="/">{siteTitle}</Link>
    <b>Example pages:</b>{" "}
    {samplePageLinks.map(link => (
      <React.Fragment key={link.url}>
        <Link to={link.url}>{link.text}</Link>
      </React.Fragment>
    ))}
  </header>
)

export default Header
