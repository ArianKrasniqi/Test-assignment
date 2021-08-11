import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import styles from "App.scss";
import Routes from "./routes/routes";

const App = () => (
  <div className={styles.main}>
    <div className={styles.header}>VESTBERRY TEST ASSIGNMENT</div>
    <div className={styles.content}>
      <ApolloProvider client={client}>
        <Routes/>
      </ApolloProvider>
    </div>
  </div>
);

export default App;
