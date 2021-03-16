import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useTFClassify from '../utils/hooks/useTFClassify';

function Image({index, image, handleRemove, show}) {
    const [isHovering, setIsHovering] = useState(false);
    const imageRef = useRef();
    const {predict, predictions, setPredictions, isLoading} = useTFClassify();
    
    return (
        <div 
            className="relative"
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
        >
            {(predictions.length > 0 || isLoading) && (
                <span
                    className="absolute bg-gray-800 text-white rounded-lg shadow px-2 top-1 left-0 mx-8 py-1"
                    onClick={() => setPredictions([])}
                >
                    {isLoading && <p>Fetching results...</p>} 
                    {predictions.map((prediction) => (
                        <div className="flex justify-between text-sm my-0.5">
                            <p className="mr-2 text-left">- {prediction.className}</p>
                            <p>{Math.floor(prediction.probability * 100)}%</p>
                        </div>
                    ))}
                </span>
            )}
            <i 
                className={`fas fa-times absolute bg-white rounded-3xl text-black px-1 py-0.5 rounded right-1 top-1 cursor-pointer opacity-25 hover:opacity-100 
                ${isHovering ? "" : "hidden"}`}
                onClick={() => handleRemove(index)}
            ></i>
            <i 
                className={`fas fa-search absolute bg-white rounded-3xl text-black px-1 py-1 rounded left-1 top-1 cursor-pointer opacity-25 hover:opacity-100 
                ${isHovering ? "" : "hidden"}`}
                onClick={() => predict(imageRef.current)}
            ></i>
            <img
                ref={imageRef}
                onClick={show}
                src={image}
                width="100%"
                height="auto"
                crossOrigin="anonymous"
                alt=""
            />
        </div>
    );
}

Image.propTypes = {
    show: PropTypes.func,
    index: PropTypes.number,
    image: PropTypes.string,
    handleRemove: PropTypes.func, 
};

export default Image;