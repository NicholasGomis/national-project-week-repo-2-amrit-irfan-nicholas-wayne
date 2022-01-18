import { useState } from "react";

//styling
import "./App.css";

//components
import Form from "../Form";
import Feed from "../Feed";

//Hook

// for temp use
import dataPosts from "../lib/dataPost";

function App() {
  const [posts] = useState(dataPosts);

  return (
    <div className="App">
      <Form />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
