import React, { useState } from 'react';
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from '../utils/hooks/useDebounce';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export default function Images() {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);
    const [images, setImages, errors, isLoading] = useFetchImage(page, searchTerm);

    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    // const [newImageUrl, setNewImageUrl] = useState("");

    function handleRemove(index) {
        setImages([
        ...images.slice(0,index),
        ...images.slice(index + 1, images.length),
        ]);
    }

    function ShowImage() {
        const [showPreview, setShowPreview] = useState(false);
        return (
            <AnimateSharedLayout>
                <InfiniteScroll 
                    dataLength={images.length} 
                    next={() => setPage(page + 1)}
                    hasMore={true}
                    className="flex flex-wrap"
                > 
                    {images.map((img, index) => ( 
                        <motion.div 
                            className="w-1/3 p-2 border flex justify-center"
                            key={index}
                            layoutId={img.urls.regular}
                            initial={{ opacity : 0 }}
                            animate={{ opacity : 1 }}
                        >
                            <Image
                                show = {()=> setShowPreview(img.urls.regular)}
                                image={img.urls.regular} 
                                handleRemove={handleRemove} 
                                index={index}
                            />
                        </motion.div>
                    ))}
                </InfiniteScroll>
                <AnimatePresence>
                    {showPreview && (
                        <motion.section
                            layoutId={showPreview}
                            exit={{ opacity: 0,  rotate: 360, transition: {duration: 0.5} }}
                            className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
                            onClick={() => setShowPreview(false)}
                        >
                            <div className="bg-white text-black">
                                <img
                                    src={showPreview}
                                    className="rounded-lg"
                                    width="300"
                                    height="auto" 
                                    alt=""
                                />
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        );
    }

    // function handleAdd() {
    //     if (newImageUrl !== "") {
    //         setImages([newImageUrl, ...images]);
    //         setNewImageUrl("");
    //     }
    // }

    // function handleChange(event) {
    //     setNewImageUrl(event.target.value);
    // }    

    const debounce = useDebounce();
    function handleInput(e) {
        const text = e.target.value;
        debounce(() => setSearchTerm(text));
    }

    return (
        <section className="text-white">
            <div className="my-4">
                <input
                    type="text"
                    onChange={handleInput}
                    className="w-10/12 p-2 rounded border-yellow-500 shadow-inner text-black text-center"
                    placeholder="Search Photos Here"
                />
            </div>
            {errors.length > 0 && (
                <div className="flex h-screen">
                    <p className="m-auto">
                        {errors[0]}
                    </p>
                </div>
            )}
            <ShowImage />
            {isLoading && <Loading />}
            {/* {errors.length === 0 && (
                <button onClick={() => setPage(page + 1)}>Load More</button>
            )} */}
            {/* <div className="flex justify-around my-3">
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
            </div> */}
        </section>
    );
}