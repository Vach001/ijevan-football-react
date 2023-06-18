import { Component } from "react";
import "./App.css";
import TableHeader from "./components/data-display/TableHeader/TableHeader";

class App extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <TableHeader
          src="https://banner2.cleanpng.com/20180711/vg/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f06eeac18.5589169115313180229776.jpg"
          title="Premier League"
          description="Season 2020-2021"
        />
      </div>
    );
  }
}

export default App;
