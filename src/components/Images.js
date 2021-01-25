import React, { useEffect, useState } from 'react';

export default function Images() {
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1595338940653-81c0a91ca5fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        "https://images.unsplash.com/photo-1594394895051-02e2b5a8ab8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1551279076-6887dee32c7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1553978458-e039e4a68999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ]);

    function ShowImage() {
        return images.map((image) => {
            return(
                <div className="w-1/4 flex justify-center">
                    <img 
                        src={image} 
                        width="150"
                        className="h-full p-1"
                    />
                </div>
            );
        });
    }

    function handleAdd() {
        setImages([
            "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
            ...images
        ]);
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <ShowImage />
            </div>
            <div className="flex justify-around my-3">
                <input 
                    type="text"
                    className="p-2 border border-gray-800 shadow rounded w-3/5 h-full"
                />
                <button 
                    className="p-2 bg-green-700 text-white text-3xl font-bold rounded w-1/5 overflow-hidden"
                    onClick={handleAdd}
                >
                    Add new
                </button>
            </div>
        </section>
    );
}

// const [myInterval, setmyInterval] = useState(null);

    // useEffect(() => {
    //     console.log("Images Comp Mounted");
    //     const interval = setInterval(() =>{
    //         console.log("Hello");
    //         }, 1000);

    //     return () => clearInterval(interval);

    // }, []);

// class Images extends Component {
//     constructor(props){
//         super(props);
//         this.state = { interval: null};
//     }

//     componentDidMount(){
//         console.log("Images Comp Mounted");
//         this.setState({
//             interval: setInterval(() =>{
//                 console.log("Hello");
//             }, 1000),
//         });
//     }

//     componentWillUnmount(){
//         console.log("Images Comp Unmounted");
//         clearInterval(this.state.interval);
//     }

//     render() {
//         return (
//             <img 
//                 src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
//                 alt="Bridge on the forest"
//             />
//         );
//     }
// }