import React, { useEffect, useState } from "react";
import "./assets/css/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes/index";
import Header from "./components/Header";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState({});
        
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
            } else {
                setUser({});
                setIsLoggedIn(false);
            }
        });
    }, []);

    return (
        <Router>
            <AppContext.Provider value={[isLoggedIn, user]}>
                <Header />
                <Switch>
                    {routes.map((route, index) => {
                        if(route.protected === "guest"){
                            return (
                                <GuestRoute
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            );
                        } 
                        
                        if(route.protected === "auth"){
                            return (
                                <AuthRoute
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            );   
                        } 
                             
                        return(
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
                </Switch>
            </AppContext.Provider>
        </Router>
    );
}

export default App;