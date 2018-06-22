import React from "react";
import { Link } from "react-router-dom";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Vote from "./Vote";

const PostManager = props => {
  return (
    <p className="text-center">
      <Vote itemId={props.post.id} />
      <Link
        className="btn"
        role="button"
        to={`/${props.post.category}/${props.post.id}/edit`}
      >
        <EditItem />
      </Link>
      <DeleteItem itemId={props.post.id} />
    </p>
  );
};

export default PostManager;
