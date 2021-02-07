import React, { useState } from 'react';

export default function Images() {
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1595338940653-81c0a91ca5fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        "https://images.unsplash.com/photo-1594394895051-02e2b5a8ab8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1551279076-6887dee32c7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1553978458-e039e4a68999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ]);

    const [newImageUrl, setNewImageUrl] = useState("");

    function handleRemove(index) {
        setImages(images.filter((image, i) => i !== index))
    }

    function ShowImage() {
        return images.map((image, index) => {
            return(
                <div className="w-1/4 my-4 flex justify-center" key={index}>
                    <img 
                        src={image} 
                        width="150"
                        className="h-full"
                        alt=""
                        onClick={() => handleRemove(index)}
                    />
                </div>
            );
        });
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
        <section>
            <div className="flex flex-wrap justify-center">
                <ShowImage />
            </div>
            <div className="flex justify-around my-3">
                <input
                    type="text"
                    className="p-2 border border-yellow-800 rounded w-7/12 h-full"
                    value={newImageUrl}
                    onChange={handleChange}
                />
                <button
                    disabled={newImageUrl === ""}
                    className="bg-green-700 rounded w-2/12 overflow-clip button" 
                    onClick={handleAdd}
                >
                    Add new
                </button>
            </div>
        </section>
    );
}