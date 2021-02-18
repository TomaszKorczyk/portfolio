import React, { useState } from 'react'

export default function Image({index, image, handleRemove}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="w-1/4 my-4 flex justify-center">
            <div 
                className="relative"
                onMouseEnter={()=>setIsHovering(true)}
                onMouseLeave={()=>setIsHovering(false)}
            >
                <i 
                    className={`fas fa-times absolute px-0.5 py-0.4 bg-gray-100 rounded right-0 cursor-pointer opacity-25 hover:opacity-100 
                    ${isHovering ? "" : "hidden"}`}
                    onClick={() => handleRemove(index)}
                ></i>
                <img 
                    src={image} 
                    width="150"
                    className="h-full"
                    alt=""
                />
            </div>
        </div>
    );
}
