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
        <h3 className="post-date">{date}</h3>
      </div>

      <h2 className="post-title">{title}</h2>
      <h3 className="post-title">{describe}</h3>
      <h3>{attempt}</h3>
      <p className="input-post">
        <code>{code}</code>
      </p>
      <div className="btn-container">
        <button className="btn-like">
          <i className="fas fa-thumbs-up"></i>
        </button>

        <button className="btn-comment">
          <i className="fas fa-comment-dots"></i>
        </button>

        <button className="btn-save">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>

      {/* hidden: event shows: comments */}
      <div className="comments"></div>
      <ol className="commentsList">{comments}</ol>
      {/* #TODO comments form */}
    </article>
  );
}

export default Post;
