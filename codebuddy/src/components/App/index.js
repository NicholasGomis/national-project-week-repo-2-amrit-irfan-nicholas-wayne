import { useState } from "react";

//styling
import "./App.css";

//components
import Form from "../Form/Form"
import Post from "../Post/Post";
import dataPosts from "../lib/dataPost"
//Hook


// for temp use


function App() {

  const [posts, setPosts] = useState(dataPosts);


  return (
    <div className="App">
    
      <Form />
      <Post
        avatar={posts.avatar}
        title={posts.title}
        username={posts.username}
        date={posts.date}
        code={posts.code}
        comments={posts.comment}
      />

      
    </div>
  );
}

export default App;
