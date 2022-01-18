import React from "react";
import Post from "../Post";

function Feed({ posts }) {
  return (
    <article className="feed">
      {posts.map((post) => {
        return (
          <Post
            avatar={post.avatar}
            title={post.title}
            username={post.username}
            date={post.date}
            code={post.code}
            comments={post.comments}
          />
        );
      })}
    </article>
  );
}

export default Feed;
