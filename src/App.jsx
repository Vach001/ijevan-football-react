import { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";

class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
