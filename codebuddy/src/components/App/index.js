import { useState } from "react";

//styling
import "./App.css";

//components
import Form from "../Form/Form"
import Post from "../Post/Post";

//Hook


// for temp use
 const data = [{avatar ="https://image.shutterstock.com/image-vector/boy-default-placeholder-children-avatar-260nw-369833402.jpg",
  title = "Some Code Problem",
  username = "John Doe",
  date = "18/01/2022",
  code = "function() { do something}",
  comments = "code it like this"}]

function App() {

  const [posts, setPosts] = useState(data);

  return (
    <div className="App">
    
      <Form 
      onSubmit={handleSubmit}
      />
      <Post
        avatar={avatar}
        title={title}
        username={username}
        date={date}
        code={code}
        comments={comments}
      />

    </div>
  );
}

export default App;
