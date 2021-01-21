import React from "react";
import "./assets/css/style.css";

function App({title}) {
    return (
        <div className="box">
            <div>{title}</div>
        </div>
    );
}

export default App;