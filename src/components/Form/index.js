import React from "react";

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("submit received");
// };

export function Form() {
  return (
    <div className="form">
      <div className="title">What is your question?</div>
      <div className="subtitle">Articulate your question in the soc way!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">
          Name
        </label>
      </div>
      <div className="input-container ic2">
        <input id="title" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="title" className="placeholder">
          Title
        </label>
      </div>
      <div className="input-container ic2">
        <input id="describe" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="describe" className="placeholder">
          Describe your problem
        </label>
      </div>
      <div className="input-container ic2">
        <input id="attempted" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="describe" className="placeholder">
          What have you tried?
        </label>
      </div>
      <div className="input-container-new ic2">
        <input id="code" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="code" className="placeholder">
          Insert your code here
        </label>
      </div>
      <button type="text" className="submit">
        submit
      </button>
    </div>
  );
}

export default Form;

// async Create function to send the new post to the api /post
// response from the api new list of posts

// /posts
