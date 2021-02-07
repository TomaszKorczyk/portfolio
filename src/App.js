import React,{useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/tailwind.css";
import Images from "./components/Images";

function Gallery() {
    return  <section className="flex justify-center">
                <div className="w-full">
                    <div className="text-center">
                        <div className="my-4 text-white italic font-semibold">
                        </div>
                        <Images />
                    </div>
                </div>
            </section>
}

function Home() {
    return( 
        <div className="flex h-screen text-white text-3xl font-bold">
            <h1 className="m-auto">Home</h1>
        </div>
    )
}

function Login() {
    return(
        <div className="flex h-screen text-white text-3xl font-bold">
            <h1 className="m-auto">Login Page</h1>
        </div>
    )

}
function App() {
    return <Router>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/gallery">
            <Gallery />
        </Route>
    </Router>
}

export default App;