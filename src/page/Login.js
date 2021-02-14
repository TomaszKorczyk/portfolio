import React, { useState } from "react";
import firebase from "../config/firebase";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    function handleForm(e) {
        if (isLoading) return
        setIsLoading(true);
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword("kemot@onet.com", "pssword")
            .then((res) => {
                console.log(res);
                setIsLoading(false);
            })
            .catch(e => {
                setError(e.message);
                setIsLoading(false);
            })
    }
    return(
        <div className="flex h-screen text-white text-3xl font-bold bg-gray-200">
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 m-auto w-3/5 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg">
                <form 
                    className="m-5 w-10/12" 
                    onSubmit={handleForm}
                >
                    <h1 className="w-full text-4xl tracking-widest text-center my-6">Login</h1>
                    <div className="w-full my-6">
                        <input 
                            type="email"
                            className="p-2 rounded shadow w-full text-black font-bold"
                            placeholder="Email or User"
                            />
                    </div>
                    <div className="w-full my-6">
                        <input 
                            type="password"
                            autoComplete="on"
                            className="p-2 rounded shadow w-full text-black"
                            placeholder="Password"
                        />
                    </div>
                    <div className="w-full my-10">
                        <button 
                            type="submit"
                            className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black font-bold"
                        >
                            {isLoading ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                                ) : (
                                    "Login"
                                )
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}