import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({email:"",password:""});
    const history = useHistory();

    function handleForm(e) {
        if (isLoading) return;
        setIsLoading(true);
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then((res) => {
                history.replace("/");
                setError("");
                setIsLoading(false);
            })
            .catch((e) => {
                setError(e.message);
                setIsLoading(false);
            })
    }

    function handleInput(e) {
        setForm({...form,[e.target.name]: e.target.value});
    }

    return(
        <div className="flex h-screen text-white text-2xl font-bold bg-gray-700">
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 m-auto w-3/5 text-white flex flex-wrap justify-center shadow-lg rounded-lg">
                <form 
                    className="m-5 w-10/12" 
                    onSubmit={handleForm}
                >
                    {(error !== "") && <p>{error}</p>}
                    <h1 
                        className="w-full text-4xl tracking-widest text-center"
                    >
                        Login
                    </h1>
                    <div className="w-full my-6">
                        <input 
                            type="email"
                            className="p-2 rounded shadow w-full text-black"
                            placeholder="Email or User"
                            name="email"
                            value={form.email}
                            onChange={handleInput}
                            />
                    </div>
                    <div className="w-full my-6">
                        <input 
                            type="password"
                            autoComplete="on"
                            className="p-2 rounded shadow w-full text-black"
                            placeholder="Password"
                            name="password"
                            value={form.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="w-full my-5">
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