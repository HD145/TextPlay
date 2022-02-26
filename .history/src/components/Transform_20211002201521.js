import React, { useState } from "react";

export default function Transform(props) {
    const onUpClickHandler=()=>{
        console.log("Hello");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Changed To UpperCase", "success")
    }
    const onLowClickHandler=()=>{
        console.log("Hello");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Changed To LowerCase", "success")
    }
    const onClearClickHandler=()=>{
        console.log("Hello");
        setText("");
        props.showAlert("Cleared the text", "success")
    }
    const onTitleClickHandler=()=>{
        let words= text.split(" ");
        console.log(words);
        let upperCaseWord="";
        words.forEach(element=>{
            upperCaseWord+=element.charAt(0).toUpperCase()+element.slice(1)+ " "
        });
        setText(upperCaseWord);
        props.showAlert("Changed To TitleCase", "success")
    }
    const onReverseClickHandler=()=>{
        console.log("Hello");
        let count= text.length;
        let reverse="";
        for(let i=count-1;i>=0;i--){
            reverse+=text[i];
        }
        setText(reverse);
        props.showAlert("Reversed the text", "success")
    }
    const onCopyClickHandler=()=>{
      // var text= document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAlert("Copied Successfully", "success")

  }
    
    const onChangeHandler=(event)=>{
        console.log("HelloJi");
        setText(event.target.value);
    }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="container my-3 mx-1">Enter The Text Here</h1>
        <div className="mb-3 my-2">
          <textarea
            className="form-control container"
            value={text} onChange={onChangeHandler}
            id="myBox"
            rows="10" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', borderRadius:"10px", color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-4" onClick={onUpClickHandler}>
        To UpperCase
        </button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-4" onClick={onLowClickHandler}>
          To LowerCase
        </button>
        
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-4" onClick={onTitleClickHandler}>
          Title Case
        </button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-4" onClick={onReverseClickHandler}>
          Reverse Text
        </button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-4" onClick={onCopyClickHandler}>
          Copy Text
        </button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-4" onClick={onClearClickHandler}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>Summary of the text</h3>
          <p> {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters </p>
          <p>To read the entered text we need an average of {0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} time</p>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>Preview of the entered text</h3>
          <p>{text.length>0?text:"Enter your text in the textbox above to preview it here."}</p>
      </div>
    </>
  );
}
