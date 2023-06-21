import { Component } from "react";
import { linerConstants } from "../../../constants/linerContents.constants.js";
import { v4 as uuidv4 } from "uuid";

import styles from "./TableLiner.module.css";

export default class TableLiner extends Component {
  render() {
    return (
      <div className={styles.linerSection}>
        <h4 className={styles.title}>Club</h4>
        {linerConstants.map((constant) => {
          return (
            <h4 key={uuidv4()} className={styles.title}>
              {constant.toUpperCase()}
            </h4>
          );
        })}
      </div>
    );
  }
}
