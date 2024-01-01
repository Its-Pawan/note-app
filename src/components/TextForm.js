import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Covertet to UpperCase", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Covertet to LowerCase", "success")
    }
    const handleEmpty = () => {
        const shouldClear = window.confirm("Do really want to clear text?")
        if (shouldClear) {
            setText("")
            props.showAlert("All texts are cleared", "success")
        }
        else {
            props.showAlert("Nothing happened", "warning")
        }
    }
    const handleCopy = () => {
        var text = document.querySelector("#myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!", "success")
    }


    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">
                <h1>Enter the text to analyze below</h1>
                <div className="mb-3">
                    <textarea style={props.myStyle} className="form-control" id="myBox" rows="8" onChange={handleChange} value={text} placeholder="Write Your Text here..."></textarea>
                </div>
            </div>
            <div className="container btns">
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mx-2" onClick={handleEmpty}>Crear Text</button>
            </div>
            <div className="container btns my-3">
                <h2>Your text summary</h2>
                <p><b>{text.split(' ').length}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * (text.split(' ').length)}</b> Minutes to read</p>

                <h2 className='mt-4'>Preview</h2>
                <p>{text.length > 0 ? text : "Write Something Above To Preview Here..."}</p>
            </div>
        </>
    )
}
