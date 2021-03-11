import React from "react";
import style from "./Counter.module.css";

// Есл в пропсе ничего не передано используем это
// static defaultProps = {
//   initialValue: 0,
// };

// static propTyps = {

// }сюда напишем тип пропсов

// state = {
//   caunterValue: this.props.initialValue,
// };

const Counter = ({ caunterValue, handleIncrement, handleDecrement }) => {
  return (
    <div className={style.Counter__wrapper}>
      <span className={style.Span}>{caunterValue}</span>
      <div className={style.Counter__controls}>
        <button type="button" onClick={() => handleIncrement()}>
          Увеличить на 1
        </button>
        <button type="button" onClick={() => handleDecrement()}>
          Уменьшить на 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
