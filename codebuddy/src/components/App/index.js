import { useState } from "react";

//styling
import "./App.css";

//components
import Form from "../Form/Form";
import Post from "../Post/Post";

//Hook

// for temp use
import dataPosts from "../lib/dataPost";

function App() {
  const [posts, setPosts] = useState(dataPosts);

  return (
    <div className="App">
      <Form />
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
    </div>
  );
}

export default App;
