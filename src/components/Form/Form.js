import React from "react";
import RadioBtn from "./RadioBtn/RadioBtn";

class Form extends React.Component {
  state = {
    name: "",
    lastName: "",
    experience: "junior",
  };

  handleInputChenge = (e) => {
    // таким образом подвзязываемся к инптам
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log(e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleChengeRadio = (e) => {
    this.setState({ experience: e.target.value });
  };

  // Очищает инпуты удаляя со стейта
  resetForm = () => {
    this.setState({ name: "", lastName: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChenge}
            />
          </label>
          <label>
            Фамилия
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChenge}
            />
          </label>
          <RadioBtn
            onSubmit={this.handleChengeRadio}
            onSubmitState={this.state.experience}
          />
          <button type="submit">Отправить</button>
        </form>
      </>
    );
  }
}

export default Form;
