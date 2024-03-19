import * as React from "react"
import PostItem from "./PostItem"

function PostList({ data }) {
  return (
    <ul className="mx-24 flex flex-col gap-8">
      {data.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  )
}

export default PostList
