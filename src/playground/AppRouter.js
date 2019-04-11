import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>

            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>

        </BrowserRouter>
    );
};

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
        </ul>
    );
}
function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}


const NotFound = () => {
    return (
        <h3> Not Found Page rendered</h3>
    );
};

export default AppRouter;