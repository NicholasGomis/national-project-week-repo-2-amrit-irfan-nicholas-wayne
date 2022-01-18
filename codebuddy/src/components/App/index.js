import "./App.css";

//components
import Form from "../Form/Form"
import Post from "../Post/Post";

// for temp use
const avatar =
  "https://image.shutterstock.com/image-vector/boy-default-placeholder-children-avatar-260nw-369833402.jpg";
const title = "Some Code Problem";
const username = "John Doe";
const date = "18/01/2022";
const code = "function() { do something}";
const comments = "code it like this";

function App() {
  return (
    <div className="App">
    
      <Form 
      
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
