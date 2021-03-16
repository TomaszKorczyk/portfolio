import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
    const [isLoggedIn] = useContext(AppContext);
    const history = useHistory();

    function logout() {
        firebase
            .auth()
            .signOut()
            .then((res) => {
                history.replace("/login");
        })
        
        .catch(e =>{
            console.log(e.response.data);
        });
    }

    return (
        <nav className="flex text-white font-bold tracking-wider p-5 bg-gray-800 justify-between">
            <ul className="flex justify-between">
                <li className="mr-5">
                    <NavLink 
                        to="/portfolio" 
                        exact 
                        activeClassName="underline text-blue-200"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="mr-5">
                    <NavLink 
                        to="/gallery"
                        strict 
                        activeClassName="underline text-blue-200"
                    >
                        Gallery
                    </NavLink>
                </li>
                <li className="mr-5">
                    <NavLink
                        to="/tensorflow" 
                        strict
                        activeClassName="underline text-blue-200"
                    >
                        Tensorflow
                    </NavLink>
                </li>
            </ul>
            <ul className="flex justify-between">
                <li>
                    {isLoggedIn ? (
                        <button
                            className="font-bold" 
                            onClick={logout}
                        >
                            Logout
                        </button>
                    ) : (
                        <NavLink 
                            to="/login" 
                            activeClassName="underline text-blue-200"
                        >
                            Login
                        </NavLink>
                    )}
                </li>                
                {!isLoggedIn && (
                    <li className="ml-5">
                        <NavLink 
                            to="/signup" 
                            activeClassName="underline text-blue-200"
                        >
                            SignUp
                        </NavLink>
                    </li>                
                )}
            </ul>
        </nav>
    );
}
