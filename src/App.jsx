import "./App.css";
import logo from "./logo.svg";
import { Component } from "react";
import TableComponent from "./components/TableComponent";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Employee Database</h1>
          </header>
        </div>
        
        <div className="App-intro">
          <TableComponent />
        </div>
      </>
    );
  }
}
