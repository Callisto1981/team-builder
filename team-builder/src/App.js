import React, { useState } from "react";
import Form from "./form";
import Members from "./members";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  return (
    <div className="App">
      <Form members={members} setMembers={setMembers} />
      <Members members={members} />
    </div>
  );
}
export default App;
