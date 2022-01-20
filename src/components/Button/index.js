import React from "react";

function Button({ onClick }) {
  return (
    <button className="to-top" onClick={onClick}>
      Load More
    </button>
  );
}

export default Button;
