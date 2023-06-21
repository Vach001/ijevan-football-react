import { Component } from "react";

import TableLiner from "../data-display/TableLiner/TableLiner";
import TableHeader from "../data-display/TableHeader/TableHeader";

import styles from "./Table.module.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }

  componentDidMount() {
    console.log("Table component did mount");
  }

  componentDidUpdate() {
    console.log("Table component did update");
  }

  componentWillUnmount() {
    console.log("Table component will unmount");
  }

  render() {
    return (
      <section className={styles.table}>
        <TableHeader
          src="https://banner2.cleanpng.com/20180711/vg/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f06eeac18.5589169115313180229776.jpg"
          title="Premier League"
          description="Season 2020-2021"
        />
        <TableLiner />
      </section>
    );
  }
}

export default Table;
