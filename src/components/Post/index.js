import React from "react";
import "./Post.css";

function Post({
  avatar,
  title,
  username,
  date,
  code,
  comments,
  describe,
  attempt,
}) {
  return (
    <article className="post">
      <div className="avatar-name">
        <img className="avatar" src={avatar} alt="some avatar"></img>
        <h3 className="user_name">{username}</h3>
      </div>
      <p className="post-date">{date}</p>

      <h1 className="post-title">{title}</h1>
      <h1 className="post-title">{describe}</h1>
      <h3>{attempt}</h3>
      <p className="input-post">
        <code>{code}</code>
      </p>

      {/* hidden: event shows: comments */}
      <div className="comments"></div>
      <ol className="commentsList">{comments}</ol>
      {/* #TODO comments form */}
    </article>
  );
}

export default Post;
