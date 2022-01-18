import React from "react";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("submit received");
};

export function Form(props) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label for="insert-name">Name:</label>
      <input className="name-input" placeholder="Insert your name"></input>
      <label for="insert-title">Title:</label>
      <input className="title-input" placeholder="Insert post title"></input>
      <label for="insert-describe">Describe:</label>
      <input className="problem-input" placeholder="Explain problem"></input>
      <label for="insert-attempt">Attempt:</label>
      <input className="tried-input" placeholder="What have you tried"></input>
      <label for="insert-code">Code:</label>
      <input className="code-input" placeholder="Insert your code here"></input>
      <input type="submit" />
    </form>
  );
}

export default Form;

// async Create function to send the new post to the api /post
// response from the api new list of posts

// /posts
