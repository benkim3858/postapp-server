import React from "react";
import { Link } from "react-router-dom";

const Tbody = ({ post }) => {
  return (
    <tbody>
      <tr>
        <td>{post.author}</td>
        <td>
          <Link
            to={{
              pathname: `/post/${post.id}`,
              state: { post },
            }}
          >
            {post.title}
          </Link>
        </td>

        <td>{post.content}</td>
        <td>{post.created}</td>
      </tr>
    </tbody>
  );
};

export default Tbody;
