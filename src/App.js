import React from "react";
import Counter from "./components/Counter";
import Dropdawn from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import Todos from "./components/Todos";
import colorPickerData from "./data/colorPickerData.json";
import todosData from "./data/todosData.json";
import Form from "./components/Form/Form";

class App extends React.Component {
  state = {
    dropdownIsVisible: false,
    caunterValue: 12,
    colorPickerActiveIdx: 1,
    todos: todosData,
  };

  handleFormSubmit = (dataForm) => {
    console.log(dataForm);
  };

  deleteTodo = (idTodo) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((el) => {
        return el.id !== idTodo;
      }),
    }));
  };

  showDropdown = () => {
    this.setState((prevState) => ({
      dropdownIsVisible: !prevState.dropdownIsVisible,
    }));
  };

  handleIncrement = () => {
    // Если нужно использовать event в асинхронном коде. Сохраням евент в переменную и используем переменную
    this.setState((prevState) => {
      return { caunterValue: prevState.caunterValue + 1 };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        caunterValue:
          prevState.caunterValue === 0
            ? (prevState.caunterValue = 0)
            : prevState.caunterValue - 1,
        //   если значение равно нулю верни ноль, если больше верни -1
      };
    });
  };

  render() {
    const { dropdownIsVisible, caunterValue, todos } = this.state;
    const cauntComplitedTodo = todos.reduce((acc, todo) => {
      return todo.complited ? acc + 1 : acc + 0;
    }, 0);

    return (
      <>
        <Form onSubmit={this.handleFormSubmit}></Form>
        {/* <RadioBtn /> */}

        <Counter
          caunterValue={caunterValue}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <Dropdawn
          showDropdown={this.showDropdown}
          dropdownIsVisible={dropdownIsVisible}
        />
        <ColorPicker options={colorPickerData} />
        <Todos
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          cauntComplitedTodo={cauntComplitedTodo}
        />
      </>
    );
  }
}

export default App;
