import React, { useState } from 'react'

export default function Image({index, image, handleRemove, show}) {
    const [isHovering, setIsHovering] = useState(false);
    
    return (
        <div 
            className="relative"
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
        >
            <i 
                className={`fas fa-times absolute px-0.5 py-0.4 bg-black rounded right-0 cursor-pointer opacity-25 hover:opacity-100 
                ${isHovering ? "" : "hidden"}`}
                onClick={() => handleRemove(index)}
            ></i>
            <img
                onClick={show}
                className="h-auto"
                src={image} 
                alt=""
            />
        </div>
    );
}