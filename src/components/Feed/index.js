import React from "react";
import Post from "../Post";

function Feed({ posts }) {
  return (
    <article className="feed">
      {posts.map((post) => {
        return (
          <Post
            avatar="https://i.ibb.co/r2z4DvG/avatar-soc1.png"
            title={post.title}
            username="guestUser123"
            date={Date()}
            code={post.code}
            comments="Try this solution"
            attempt={post.attempt}
            describe={post.describe}
          />
        );
      })}
    </article>
  );
}

export default Feed;
