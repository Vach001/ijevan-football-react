import { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Club from "./components/Club/Club";
import TableHeaderInfo from "./components/data-display/TableHeaderInfo/TableHeaderInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <TableHeaderInfo
          title="Premier League"
          description="Season 2020-2021"
        />
      </div>
    );
  }
}

export default App;
