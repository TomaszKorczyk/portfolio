import React from "react";
import "./assets/css/tailwind.css";

// function App({title}) {
//     return (
//         <div className="bg-gray-600 text-white text-center p-5 border">
//             <div>{title}</div>
//         </div>
//     );
// }
class App extends Component {

    constructor(props){
        super(props);
        this.state = {title: "Hello React 2"};
    }

    render() {
        return(
            <section className="flex justify-center">
                <div className="w-1/2">
                    <div className="my-4">{this.state.title}</div>
                </div>
            </section>
        );        
    }
}

export default App;