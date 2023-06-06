import React, { useState } from 'react'
// import './form.css'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = () => {
    // console.log("uppercase was clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }

  const handleClearClick = (event) => {
    // console.log("On change")
    setText("")
    props.showAlert("Text cleared", "success");
  }

  const handleCopy = (event) => {
    props.showAlert("Text copied", "success");
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces = () => {
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "))
    props.showAlert("Extra space is removed", "success");
  }

  const [text, setText] = useState('');
  let minus = text.split(" ").length - 1;
  let word = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
  let character = text.length - minus;
  // setText("New Text");
  return (
    <>
      <div style={{minHeight: "100vh", paddingTop: "3rem"}}>
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h2>{props.heading}</h2>
          <div className='mb-3'>
            <textarea className='form-control' value={text} name="" onChange={handleOnChange} id="my-box" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8"></textarea>
          </div>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1>Your Text Summary</h1>
          <p>{word} words and {character} characters</p>
          <p>{0.008 * word} Minutes to Read</p>
          <h2>Preview</h2>
          <div>{text.length > 0 ? <textarea className='form-control' value={text} name="" id="my-box" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="4"></textarea> : "Nothing To Preview"}</div>
        </div>
      </div>
    </>
  )
}
