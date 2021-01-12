import React from "react";
import { render } from "react-dom";

import "./index.scss";

import Application from "./components/Application";
import PostsProvider from "./providers/PostProvider";

render(
  <PostsProvider>
    <Application />
  </PostsProvider>,
  document.getElementById("root")
);
