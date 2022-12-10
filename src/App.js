import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import MyName from "./component/MyName";
import Mycount from "./component/Mycount";
import Form from "./component/Form";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Developer" />
      <Title name="Solodity Developer" />
      <Title name="Mobile Developer" />
      <MyName />
      <Mycount/>
      <Form/>
    </div>
  );
}

export default App;
