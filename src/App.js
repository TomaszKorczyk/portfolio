import React from "react";
import "./assets/css/tailwind.css";

function App({title}) {
    return (
        <div className="bg-gray-600 text-white text-center p-5 border">
            <div>{title}</div>
        </div>
    );
}

export default App;