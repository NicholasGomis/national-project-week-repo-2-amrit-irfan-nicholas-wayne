import React from "react";
import "./Post.css";

function Post({ avatar, title, username, date, code, comments }) {
  return (
    <article className="post">
      
      
      <img className="avatar" src={avatar} alt="some avatar"></img>
      <h1 className="post-title">{title}</h1>
      <p className="user_name">{username}</p>
      <p className="post-date">{date}</p>
      <p className="codeDisplay">
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
