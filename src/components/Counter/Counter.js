import React from "react";
import style from "./Counter.module.css";

class Counter extends React.Component {
  handleIncrement = () => {
    console.log("+1");
  };

  handleDecrement = () => {
    console.log("-1");
  };

  render() {
    return (
      <div className={style.Counter__wrapper}>
        <span className={style.Span}>1</span>
        <div className={style.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
