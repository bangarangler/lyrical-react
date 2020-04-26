import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-client";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import "./style/style.css";

// COMPONENTS
import App from "./components/App/App";
import SongList from "./components/SongList/SongList";
import SongCreate from "./components/SongCreate/SongCreate";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={SongList} />
        <Switch>
          <Route exact path="/song/new" component={SongCreate}></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
