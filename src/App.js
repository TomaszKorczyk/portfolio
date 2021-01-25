import React,{useState, useEffect} from "react";
import "./assets/css/tailwind.css";
import Images from "./components/Images";

function App() {
    const [title, setTitle] = useState("Hello React");
    const [isShowing, setIsShowing] = useState(false);

// Component Did Mount only

    useEffect(() => {
        console.log("App Mounted");   
    }, []);

    function handleClick() {
        setIsShowing(!isShowing);
    }

    return (
        <section className="flex justify-center">
            {console.log('re-rendered')}
            <div className="w-1/2">
                <div className="text-center">
                    <div className="my-4 text-white italic font-semibold">
                        {title}
                    </div>
                    <button 
                        className="my-2 p-2 bg-white text-blue-600 font-bold tracking-normal rounded-full focus:outline-none"
                        onClick={handleClick}
                    >
                        Toogle Image
                    </button>
                </div>
                {isShowing ? <Images /> : null}
            </div>
        </section>
    );
}

// class App extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {title: "Hello React 2", isShowing: false};
//     }
// states are Immutable

// handleClick = () => {
//     this.setState({isShowing: !this.state.isShowing})
// };

//     render() {
//         return(
//             <section className="flex justify-center">
//                 <div className="w-1/2">
//                     <div className="text-center">
//                         <div className="my-4 text-white italic font-semibold">
//                             {this.state.title}
//                         </div>
//                         <button 
//                             className="my-2 p-2 bg-white text-blue-600 font-bold tracking-normal rounded-full focus:outline-none"
//                             onClick={this.handleClick}
//                         >
//                             Toogle Image
//                         </button>
//                     </div>
//                     {this.state.isShowing ? <Images /> : null}
//                 </div>
//             </section>
//         );        
//     }
// }

export default App;