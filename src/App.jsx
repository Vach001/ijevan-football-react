import { Component } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import Club from "./components/Club/Club";

class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      isOpen: false,
      btnText: "Open",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("App component did mount");
  }

  componentDidUpdate() {
    console.log("App component did update");
  }

  componentWillUnmount() {
    console.log("App component will unmount");
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      btnText: this.state.isOpen ? "Open" : "Close",
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isOpen ? <Club /> : <Table />}

        <button onClick={this.handleClick}>{this.state.btnText}</button>
      </div>
    );
  }
}

export default App;
