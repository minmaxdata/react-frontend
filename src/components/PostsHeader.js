import React from "react";

const PostsHeader = () => {
  return (
    <ul className="">
      <li className="row">
        <div className="col-md-7">
          <p className="text-left">Title</p>
        </div>
        <div className="col-md-1">
          <p className="text-center">Votes</p>
        </div>
        <div className="col-md-1">
          <p className="text-center">Comments</p>
        </div>
        <div className="col-md-3">
          <p className="text-center">Voting---Edit Delete</p>
        </div>
      </li>
    </ul>

  )
}

export default PostsHeader
