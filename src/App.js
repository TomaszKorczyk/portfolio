import React from "react";
import "./assets/css/style.css";

function App({title}) {
    return (
        <div className="bg-gray text-white p-5 border">
            <div>{title}</div>
        </div>
    );
}

export default App;