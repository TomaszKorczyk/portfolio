import { useEffect, useState } from 'react'
import axios from 'axios';

const url = process.env.REACT_APP_UNSPLASH_API;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(page) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}/search/photos/?client_id=${secret}&page=${page}&query=mouse`)
        .then((res) => {
            setImages([...images, ...res.data.results]);
            setIsLoading(false);
        })
        .catch((e) => {
            setErrors(["Unable to fetch images"]);
            setIsLoading(false);
        });
    }, [page]);

    return [images, setImages, errors, isLoading];
}
