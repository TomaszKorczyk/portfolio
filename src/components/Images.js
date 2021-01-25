import React, { useEffect, useState } from 'react';

export default function Images() {
    
    const [myInterval, setmyInterval] = useState(null);

    useEffect(() => {
        console.log("Images Comp Mounted");
        setmyInterval(setInterval(() => {
            console.log("Hello");
            }, 1000)
        );

        return () => {
            clearInterval(myInterval);
            console.log("Images Unmount");
        }
    }, []);

    return (
        <img 
            src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
            alt="Bridge on the forest"
        />
    );
}


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