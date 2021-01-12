import React, { Component } from "react";
import UserProvider from "../providers/UserProvider";
import Posts from "./Posts";
import Authentication from "./Authentication";

class Application extends Component {
  unsubscribeFromAuth = null;

  render() {
    return (
      <main className="Application">
        <h1>Think Piece</h1>

        <Authentication />
        <Posts />
      </main>
    );
  }
}

export default Application;
