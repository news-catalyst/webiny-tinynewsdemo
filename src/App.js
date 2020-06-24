import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';

import About from './components/About'
import Home from './components/Home'

//This REACT_APP_GRAPHQL_URL is defined in a .env file at the root of the project
const link = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // This REACT_APP_ACCESS_TOKEN is defined in a .env file at the root of the project
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});


function App() {
  return (
    <ApolloProvider client={client}>

    <Router>
      <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            tinynewsdemo
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">About</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
