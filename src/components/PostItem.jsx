import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function PostItem({ post }) {
  const { category, title, url, image } = post.frontmatter
  const img = getImage(image)

  console.log(img)

  return (
    <li className="items-center border-2 border-solid border-white cursor-pointer hover:scale-105 hover:bg-slate-700 transition-transform">
      <Link
        to={`/${category}/${url}`}
        className="flex gap-8 p-4 items-center w-full"
      >
        <GatsbyImage image={img} className="rounded-xl w-24 h-24" alt={title} />
        <p className="block">{title}</p>
      </Link>
    </li>
  )
}

export default PostItem
