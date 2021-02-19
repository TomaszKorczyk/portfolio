import React, { useEffect, useRef, useState } from 'react';
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';

export default function Images() {
    const [images, setImages] = useFetchImage();

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const [newImageUrl, setNewImageUrl] = useState("");

    function handleRemove(index) {
        setImages([
        ...images.slice(0,index),
        ...images.slice(index + 1, images.length),
        ]);
    }
        

    function ShowImage() {
        return images.map((img, index) => 
            <Image 
                image={img.urls.regular} 
                handleRemove={handleRemove} 
                index={index}
                key={index}
            />);
    }

    function handleAdd() {
        if (newImageUrl !== "") {
            setImages([newImageUrl, ...images]);
            setNewImageUrl("");
        }
    }

    function handleChange(event) {
        setNewImageUrl(event.target.value);
    }

    return (
        <section className="text-white">
            <div className="flex flex-wrap justify-center">
                <ShowImage />
            </div>
            <div className="flex justify-around my-3">
                <input
                    type="text"
                    id="inputBox"
                    ref={inputRef}
                    className="p-2 border border-yellow-800 rounded w-7/12 h-full"
                    value={newImageUrl}
                    onChange={handleChange}
                />
                <button
                    disabled={newImageUrl === ""}
                    className={`rounded w-2/12 overflow-clip button 
                    ${
                        newImageUrl !== "" ? 
                        "bg-green-700" : 
                        "bg-red-300"
                    }
                    `} 
                    onClick={handleAdd}
                >
                    Add new
                </button>
            </div>
        </section>
    );
}