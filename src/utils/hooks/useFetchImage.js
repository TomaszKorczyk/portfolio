import { useEffect, useState } from 'react'
import axios from 'axios';

const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get(`${url}?client_id=${secret}`).then((res) => {
            setImages(res.data);
        });
    }, [])

    return [images, setImages];
}
