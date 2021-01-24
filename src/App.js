import React from "react";
import "./assets/css/tailwind.css";

// function App({title}) {
//     return (
//         <div className="bg-gray-600 text-white text-center p-5 border">
//             <div>{title}</div>
//         </div>
//     );
// }
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {title: "Hello React 2", isShowing: false};
    }
// states are Immutable

    render() {
        return(
            <section className="flex justify-center">
                <div className="w-1/2">
                    <div className="text-center">
                        <div className="my-4 text-white">{this.state.title}</div>
                        <button 
                            className="my-2 p-2 bg-white text-blue-600 font-bold tracking-normal rounded-full focus:outline-none"
                            onClick={() => this.setState({isShowing: !this.state.isShowing})}
                        >
                            Toogle Image
                        </button>
                    </div>
                    {
                        this.state.isShowing ?
                        <img 
                            src="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                            alt="Bridge on the forest"
                        /> : null
                    }
                </div>
            </section>
        );        
    }
}

export default App;