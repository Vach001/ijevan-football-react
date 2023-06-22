import TableLiner from "../data-display/TableLiner/TableLiner";
import TableHeader from "../data-display/TableHeader/TableHeader";

import styles from "./Table.module.css";
import { useEffect } from "react";

function Table({ text }) {
  useEffect(() => {
    console.log("table did mount");

    return () => {
      console.log("table will unmount");
    };
  }, []);
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

export default Table;
