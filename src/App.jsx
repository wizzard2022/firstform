import React, { useState } from "react";
import './index.css';

const App = () => {

    // const inputEvent = (event) => {
    //     console.log(event);
    // };

    const [input,inpName]=useState();
    const [myName, setFname]=useState();

    const insertName = (event) => {
        console.log(event.target.value);
        inpName(event.target.value)
    }

    const onSubmit = () => {
        setFname(input);
    }

    return (
        <>
            <div className="basicForm">
                <h1>Hello {myName}</h1>
                <input type="text" placeholder="Enter Your Name" onChange={insertName} value={input}/>
                <button onClick={onSubmit} className="formButton">Submit</button>
            </div>
        </>
    )
}

export default App;
