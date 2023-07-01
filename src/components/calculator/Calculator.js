import React, { useState } from "react";
import styles from "./Calculator.module.css";
import * as math from "mathjs";

export default function Calculator() {
  const [value, setValue] = useState("");

  function handleClick(e) {
    setValue(value + e.target.value);
  }

  function handleClear() {
    setValue("");
  }

  function handleEquals() {
    const result = math.evaluate(value);
    setValue(result.toString());
  }

  return (
    <div className={styles.main_section}>
      <div className={styles.Calculator}>
        <div className={styles.input}>{value}</div>
        <div className={styles.buttons}>
          <input
            type="button"
            value="9"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="8"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="7"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="-"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="6"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="5"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="4"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="*"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="3"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="2"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="1"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="/"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="0"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="+"
            className={styles.input_button}
            onClick={handleClick}
          />
          <input
            type="button"
            value="AC"
            className={styles.input_button}
            onClick={handleClear}
          />
          <input
            type="button"
            value="="
            className={styles.input_button}
            onClick={handleEquals}
          />
        </div>
      </div>
    </div>
  );
}
