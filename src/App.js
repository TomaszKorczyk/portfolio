import React, { useEffect, useState } from "react";
import "./assets/css/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes/index";
import Header from "./components/Header";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/404";
import { motion } from "framer-motion";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {
        setIsLoading(true);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUser(user);
                setIsLoading(false);
            } else {
                setUser({});
                setIsLoggedIn(false);
                setIsLoading(false);
            }
        });
    }, []);

    if(isLoading) return <Loading />;

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
                                >
                                    <route.component />
                                </GuestRoute>
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
                            >
                                <motion.div 
                                    initial={{x:200}}
                                    animate={{x:0}}
                                >
                                    <route.component />
                                </motion.div>
                            </Route>
                        );
                    })}
                    <Route
                        path="*"
                    >
                        <NotFound />
                    </Route>
                </Switch>
            </AppContext.Provider>
        </Router>
    );
}

export default App;