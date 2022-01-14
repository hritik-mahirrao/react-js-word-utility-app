import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearText = () =>{
    setText("");
  }

  const onHandleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onHandleChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Text</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  );
}
