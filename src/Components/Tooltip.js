import React, { useState } from 'react'

export default function Tooltip() {
    const [position, setPosition] = useState("left");
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <div className='m-5' style={{ width: "20%" }}>
                {/* select element to toggle between positions*/}
                <select className="form-select" defaultValue="left" onChange={(event) => setPosition(event.target.value)}>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                </select>
            </div>
            <div className='hoverbutton'
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>Hover over me!</div>
            {
                //display the tooltip if isShown variable is set to true
                // change the classes according to the position variable
                isShown &&
                <div className={`parent 
                ${position === "left" ? "parent-left" :
                        position === "right" ? "parent-right" :
                            position === "top" ? "parent-top" :
                                "parent-bottom"}`}>
                    <button type="button" className={`btn btn-dark rounded-pill 
                    ${position === "left" ? "child-left" :
                            position === "right" ? "child-right" :
                                position === "top" ? "child-top" :
                                    "child-bottom"}`}>Thanks for hovering! I'm a tooltip</button>
                </div>
            }
        </>
    )
}
