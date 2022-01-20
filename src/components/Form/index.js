import React from "react";
import { useState } from "react";

//declare vars
const API_URL = "https://code-review-soc-app.herokuapp.com";

// add state to update posts
// async Create function to send the new post to the api /post
// response from the api new list of posts

// /posts

export function Form({ handleNewPost }) {
  const [inputName, updateName] = useState("");
  const [inputTitle, updateTitle] = useState("");
  const [inputProblem, updateProblem] = useState("");
  const [inputTried, updateTried] = useState("");
  const [inputCode, updateCode] = useState("");

  //update values change functions
  function handleNameChange(e) {
    updateName(e.target.value);
  }

  function handleTitleChange(e) {
    updateTitle(e.target.value);
  }

  function handleProblem(e) {
    updateProblem(e.target.value);
  }

  function handleTried(e) {
    updateTried(e.target.value);
  }

  function handleCode(e) {
    updateCode(e.target.value);
  }

  function handleSubmit(e) {
    if (
      !inputName ||
      !inputTitle ||
      !inputProblem ||
      !inputTried ||
      !inputCode
    ) {
      alert(
        "Form must be complete before submit can complete, Please try again"
      );
      return;
    }
    addPost(inputName, inputTitle, inputProblem, inputTried, inputCode);
    e.preventDefault();
  }

  function addPost(inputName, inputTitle, inputProblem, inputTried, inputCode) {
    console.log("submit received");
    const post = {
      username: inputName,
      title: inputTitle,
      problem: inputProblem,
      attempted: inputTried,
      content: inputCode,
    };
    console.log(post);
    createPosts(post);
    updateName("");
    updateTitle("");
    updateProblem("");
    updateTried("");
    updateCode("");
  }

  // application/json for line 80
  async function createPosts(post) {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    // console.log(data.payload.attempted);
    const postDetails = {
      post_id: data.payload.post_id,
      title:  data.payload.title,
      username: post.username,
      date: data.payload.date,
      code: data.payload.content,
      attempt: data.payload.attempted,
      describe: data.payload.problem,
    };
    handleNewPost(postDetails);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">What is your question?</div>
      <div className="subtitle">Articulate your question in the School of Code way!</div>
      <div className="input-container ic1">
        <input
          id="firstname"
          className="input"
          type="text"
          placeholder=" "
          value={inputName}
          onChange={handleNameChange}
        />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">
          Name
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="title"
          className="input"
          type="text"
          placeholder=" "
          value={inputTitle}
          onChange={handleTitleChange}
        />
        <div className="cut"></div>
        <label htmlFor="title" className="placeholder">
          Title
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="describe"
          className="input"
          type="text"
          placeholder=" "
          value={inputProblem}
          onChange={handleProblem}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="describe" className="placeholder">
          Describe your problem
        </label>
      </div>
      <div className="input-container ic2">
        <input
          id="attempted"
          className="input"
          type="text"
          placeholder=" "
          value={inputTried}
          onChange={handleTried}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="describe" className="placeholder">
          What have you tried?
        </label>
      </div>
      <div className="input-container-new ic2">
        <input
          id="code"
          className="input"
          type="text"
          placeholder=" "
          value={inputCode}
          onChange={handleCode}
        />
        <div className="cut cut-short"></div>
        <label htmlFor="code" className="placeholder">
          Insert your code here
        </label>
      </div>
      <button type="submit" className="submit">
        submit
      </button>
    </form>
  );
}

export default Form;
