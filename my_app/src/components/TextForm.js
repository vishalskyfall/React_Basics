import React, {useState} from 'react'



export default function Textform(props) {
    const handleUp=()=>{
       // console.log("Uppercase was clicked"+text);
        let newT=text.toUpperCase();
        setText(newT);
    }
    const handleLow=()=>{
        // console.log("Uppercase was clicked"+text);
         let newT=text.toLowerCase();
         setText(newT);
     }


    const handleOnchange=(event)=>{ //event lakhvu pade niche target 6 etle
            setText(event.target.value); //onchnage mostly for typing . .
    }
    
    //const [text, setText]=useState('testing the state');
    
    const [text, setText] =useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value ={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUp}>Convert to Upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLow}>Convert to Lower case</button>
        </div>
        <div className="container my-3">
            <h1>Your summary</h1> 
            <p>You have {text.split(" ").length} words and {text.length} words . . (Random numbers no way!)</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview :</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
