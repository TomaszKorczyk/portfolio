import React from "react";
import "./assets/css/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";

function App() {
    return <Router>
        <Switch>
            {routes.map((route) => (
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))
            }
        </Switch>
    </Router>
}

export default App;