import React, { useState } from "react";

const Parent=()=>{

    let [showModal, setShowModal]= useState(false) ;

    function clickEvent(){
        !showModal ? setShowModal(true) : setShowModal(false);
    }

    return (
        <div>
           <div className="parent">
            <h1>Parent Component</h1>
            <div className="child">
                <h2>Child Component</h2>
                <button onClick={clickEvent}>Show modal</button>
                </div>
                <div className="modal" id={`${showModal}`}>
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
           </div>
        </div>
    )
    }

    export default Parent;