import { useState } from "react";

//styling
import "./App.css";

//components
import Form from "../Form";
import Feed from "../Feed";
import Navbar from "../Nav";

//Hook

// for temp use
import dataPosts from "../lib/dataPost";

function App() {
  const [posts] = useState(dataPosts);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Form />
        <Feed posts={posts} />
        </div>
    </div>
  );
}

export default App;
