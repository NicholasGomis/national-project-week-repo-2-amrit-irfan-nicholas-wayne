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
    <div className="post">
      <div className="post-user">
        <div className="post-user-info">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="profile">
            <h3>
              <a href="https://loving-euclid-e4fece.netlify.app">{username}</a>
            </h3>
            <span className="post-time">
              <a href="https://loving-euclid-e4fece.netlify.app">{date}</a>
            </span>
          </div>
        </div>
        <a
          href="https://loving-euclid-e4fece.netlify.app"
          className="post-settings"
        >
          <i className="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <h4 className="post-title">{title}</h4>
      <h5 className="content">{describe}</h5>
      <p className="post-attempt">{attempt}</p>
      <p className="input-post">
        <code>{code}</code>
      </p>
      <div className="inte">
        <div className="like">
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="fas fa-thumbs-up"></i> 2
          </a>
        </div>
        <div className="comment">
          <a href="https://loving-euclid-e4fece.netlify.app">2 Saves</a>
        </div>
      </div>
      <div className="a-inte">
        <ul>
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="far fa-thumbs-up"></i> Like
          </a>
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="far fa-comment-alt"></i> Comment
          </a>
          <a href="https://loving-euclid-e4fece.netlify.app">
            <i className="far fa-share-square"></i> Save
          </a>
        </ul>
      </div>
      <div className="all-com">
        <a href="https://loving-euclid-e4fece.netlify.app">Previous comments</a>
      </div>
      <div className="users-comments">
        <ul>
          <li>
            <div className="users-comments-avatar">
              <img src="https://i.pravatar.cc/295" alt="" />
            </div>
            <div className="users-com">
              <a
                href="https://loving-euclid-e4fece.netlify.app"
                className="user-name"
              >
                John Smith
              </a>
              <p className="user-com">
                I had the same problem, do you need to close the bracket?
              </p>
            </div>
          </li>
          <li>
            <div className="users-comments-avatar">
              <img src="https://i.pravatar.cc/298" alt="" />
            </div>
            <div className="users-com">
              <a
                href="https://loving-euclid-e4fece.netlify.app"
                className="user-name"
              >
                Connor McGregor
              </a>
              <p className="user-com">Oh you missed a semi colon</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="my-com">
        <div className="users-comments-avatar">
          <img src="https://i.pravatar.cc/295" alt="" />
        </div>
        <div className="inp-com">
          <input type="text" placeholder="Write a comment" />
          <ul className="inp-buttons">
            <li>
              <a href="https://loving-euclid-e4fece.netlify.app">
                <i className="far fa-grin-alt"></i>
              </a>
            </li>
            <li>
              <a href="https://loving-euclid-e4fece.netlify.app">
                <i className="fas fa-camera"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
