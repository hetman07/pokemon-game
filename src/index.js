import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
// const AppList = () => {
//   //реакт Компонент
//   const item = false;
//   const arr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
//   return (
//     <ul>
//       {item ? arr.map((item) => <li>{item}</li>) : null}
//       <li>My first Element</li>
//       <li>My second Element</li>
//     </ul>
//   );
// };

// const AppInput = () => {
//   const placeholder = "Type search ...";
//   return (
//     <label htmlFor="search">
//       <input id="search" placeholder={placeholder} />
//     </label>
//   );
// };
// const AppHeader = () => {
//   return <h1 className="App-header">This is my Header</h1>;
// };

// const App = () => {
//   return (
//     <>
//       <AppHeader />
//       <AppInput />
//       <AppList />
//     </>
//   );
// };

//const el = createElement("h1", null, "Hello World JS!"); //реакт элемент

ReactDOM.render(<App />, document.getElementById("root"));
