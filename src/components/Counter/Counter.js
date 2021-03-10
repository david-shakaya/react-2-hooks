import React from "react";
import style from "./Counter.module.css";

class Counter extends React.Component {
  // Есл в пропсе ничего не передано используем это
  static defaultProps = {
    initialValue: 0,
  };

  // static propTyps = {

  // }сюда напишем тип пропсов

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // Если нужно использовать event в асинхронном коде. Сохраням евент в переменную и используем переменную
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value:
          prevState.value === 0 ? (prevState.value = 0) : prevState.value - 1,
        //   если значение равно нулю верни ноль, если больше верни -1
      };
    });
  };

  render() {
    return (
      <div className={style.Counter__wrapper}>
        <span className={style.Span}>{this.state.value}</span>
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
