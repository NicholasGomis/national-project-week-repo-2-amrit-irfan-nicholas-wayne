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
      <div className="title">What is your question?</div>
      <div className="subtitle">Articulate your question in the soc way!</div>
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
      <button type="text" className="submit">
        submit
      </button>
    </form>
  );
}

export default Form;
