import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked:" + text);
        setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked:" + text);
        setText("You have clicked on handleLoClick");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Clear was clicked:" + text);
        setText("You have clicked on handleClearClick");
        setText('');
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-4" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-4" onClick={handleLoClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-4" onClick={handleClearClick} >Text Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text area above to preview"}</p>
    </div>
    </>
  );
}
