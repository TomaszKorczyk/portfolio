import React, { useRef } from 'react';
import useTFClassify from '../utils/hooks/useTFClassify';

export default function Tensorflow() {
    const imageRef = useRef();
    const {predict, predictions, isLoading} = useTFClassify();

    return (
        <div className="flex justify-center">
            <div className="w-1/3">
                <h1 className="text-green-300 text-center my-5">TensorFlow Example</h1>
                <img 
                    src="https://images.unsplash.com/photo-1534361960057-19889db9621e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDc4Nzl8MHwxfHNlYXJjaHwyOHx8ZG9nfGVufDB8fHx8MTYxNTczOTcwOQ&ixlib=rb-1.2.1&q=80&w=1080" 
                    width="400"
                    crossOrigin="anonymous"
                    ref={imageRef}
                    alt=""
                />
                <div className="text-center my-5">
                    {predictions.length > 0 &&
                        predictions.map((prediction) => (
                            <div className="flex justify-between text-left text-white">
                                <p>{prediction.className}</p>
                                <p>{Math.floor(prediction.probability * 100)} %</p>
                            </div>
                        ))
                    }
                    
                    <button 
                        className="p-2 mt-5 rounded w-72 bg-gray-800 text-white font-bold tracking-wider"
                        onClick={() => predict(imageRef.current)}
                    >
                        {isLoading && "⏳"}
                        {!isLoading && "Predict Result"}
                    </button>
                </div>
            </div>
        </div>
    );
}