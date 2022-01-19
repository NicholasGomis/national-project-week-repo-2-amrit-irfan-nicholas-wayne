import React from "react";
import { useState } from "react";

// add state to update posts
// async Create function to send the new post to the api /post
// response from the api new list of posts

// /posts

export function Form() {
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
    console.log(inputName, inputTitle, inputProblem, inputTried, inputCode);
    updateName("");
    updateTitle("");
    updateProblem("");
    updateTried("");
    updateCode("");
  }

  //dont send: auth id: num //date

  //title
  //input problem
  //input attempted
  //code

  // api_name/posts/create

  //send:
  //date
  //title
  //input problem
  //input attempted
  //code

  // api_name/posts/create

  // add state to update posts
  // async Create function to send the new post to the api /post
  // response from the api new list of posts

  // /posts

  //action=""

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="insert-name">Name:</label>
      <input
        className="name-input"
        type="text"
        value={inputName}
        onChange={handleNameChange}
        placeholder="Insert your name"
      ></input>

      <label htmlFor="insert-title">Title:</label>
      <input
        className="title-input"
        type="text"
        value={inputTitle}
        onChange={handleTitleChange}
        placeholder="Insert post title"
      ></input>

      <label htmlFor="insert-describe">Describe:</label>
      <input
        className="problem-input"
        type="text"
        value={inputProblem}
        onChange={handleProblem}
        placeholder="Explain problem"
      ></input>

      <label htmlFor="insert-attempt">Attempt:</label>
      <input
        className="tried-input"
        type="text"
        value={inputTried}
        onChange={handleTried}
        placeholder="What have you tried"
      ></input>

      <label htmlFor="insert-code">Code:</label>
      <input
        className="code-input"
        tpye="text"
        value={inputCode}
        onChange={handleCode}
        placeholder="Insert your code here"
      ></input>
      <input type="submit" />
    </form>
  );
}

export default Form;
