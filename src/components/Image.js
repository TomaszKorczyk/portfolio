import { motion } from 'framer-motion';
import React, { useState } from 'react'

export default function Image({index, image, handleRemove}) {
    const [isHovering, setIsHovering] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    return (
        <div className="w-1/3 p-2 border flex justify-center">
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
                    onClick={() => setShowPreview(true)}
                    className="h-auto"
                    src={image} 
                    alt=""
                />
            </div>
            {showPreview && (
                <section 
                    className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
                    onClick={() => setShowPreview(false)}
                >
                    <div className="bg-white text-black">
                        <img
                            src={image}
                            className="rounded"
                            width="300"
                            height="auto" 
                            alt=""
                        />
                    </div>
                </section>
            )}
        </div>
    );
}
