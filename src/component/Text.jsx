import React, { useState } from 'react'

export default function Text(props) {
    const handalupcase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("text are in upercase","success")
      } 
    
      
      const handalExtraspace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    
      } 
      const handallocase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("text are in lowercase","success")
    
      } 
      const handalclear = () =>{
        let newText = "";
        setText(newText)
    
      } 
      const handalcopy = (e) =>{
        let text = document.getElementById("text")
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text coped","success")
    
      } 
      const handalonchange = (event) =>{
        setText(event.target.value)
      } 
    
    const [text,setText] = useState("")

  return (
    
    <>
<div className='container'style={{color: props.mode === "dark" ?"white":"#042743"}} >
  <h1>{props.heading}</h1>
  
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handalonchange} style={{backgroundColor: props.mode === "dark" ?"gray":"white" ,color:props.mode === "dark" ?"white":"#042743" ,border:props.mode === "dark" ?"2px solid white":"2px solid #042743"}} id="text" rows="8"></textarea>
</div>

<button  type="button" className="btn btn-primary mx-2" onClick={handalupcase}>convert to uppercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handallocase}>convert to upperlowercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handalclear}>Clear</button>
<button type="button" className="btn btn-primary mx-2" onClick={handalcopy}>Copy</button>
<button type="button" className="btn btn-primary mx-2" onClick={handalExtraspace}>clear space</button>
    </div>

    <div className="container my-2" style={{color: props.mode === "dark" ?"white":"#042743"}}>
<h1>your text summary</h1>

<p> {text.trim() ? text.trim().split(/\s/).length : 0} words and  {text.length} characters </p>
    <p>{0.008 * text} Minute to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something  in text box above to preview it here"}</p>
    </div>
    </>
  )
}

