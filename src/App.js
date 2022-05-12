import React from "react";
import "./styles.css";
import Collapsible from "./Component/Collapsible";

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <h1>Code Sandbox</h1>
          <Collapsible />
        </div>
    );
  }
}
export default App;