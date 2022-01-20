import { useState, useEffect } from "react";

//styling
import "./App.css";

//components
import Form from "../Form";
import Feed from "../Feed";
import Navbar from "../Nav";
import Button from "../Button";



//declare vars
const API_URL = "https://code-review-soc-app.herokuapp.com";

let data;
let count = 1;
let initialState = [];

function App() {
  const [posts, updatePosts] = useState(initialState);
 
  function handleNewPost(newPost) {
    // const newArray = [...posts, newPost];
    const newArray = [newPost, ...posts];
    updatePosts(newArray);
  }

  function onClick() {
    //console.log(data);

    const postDetails = {
      //iterate post
      post_id: data.payload[count].post_id,
      title: data.payload[count].title,
      username: "guestUser123",
      date: data.payload[count].date,
      code: data.payload[count].content,
      attempt: data.payload[count].attempted,
      describe: data.payload[count].problem,
    };
    count++;

    handleNewPost(postDetails);
  }

  // Rendering a post upon inital load

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${API_URL}/posts`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      data = await response.json();
      //make data outside
      const postDetails = {
        post_id: data.payload[0].post_id,
        title: data.payload[0].title,
        username: "guestUser123",
        date: data.payload[0].date,
        code: data.payload[0].content,
        attempt: data.payload[0].attempted,
        describe: data.payload[0].problem,
      }
      const newArray = [...initialState, postDetails]
      updatePosts(newArray);
    }
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Form handleNewPost={handleNewPost} />
        <Feed posts={posts} />
        <Button onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
