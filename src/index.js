import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Menu from "./components/Menu";

function App() {
  return (
    <Menu>
      <Menu.Button>
        Actions <span aria-hidden>▾</span>
      </Menu.Button>
      <Menu.List>
        <Menu.Item linkTo="/download" onClick={() => alert("Download")}>
          Download
        </Menu.Item>
        <Menu.Item linkTo="/copy" onClick={() => alert("Copy")}>
          Create a Copy
        </Menu.Item>
        <Menu.Item linkTo="/delete" onClick={() => alert("Delete")}>
          Delete
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
