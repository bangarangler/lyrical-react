import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// COMPONENTS
import SongList from "./components/SongList";

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
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
