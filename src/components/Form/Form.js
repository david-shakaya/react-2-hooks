import React from "react";
import RadioBtn from "./RadioBtn/RadioBtn";
import CheckboxLicence from "./Checkbox/Checkbox";

class Form extends React.Component {
  state = {
    name: "",
    lastName: "",
    experience: "junior",
    licence: false,
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

  handleChengeCheckbox = (e) => {
    this.setState({
      licence: e.target.checked,
    });
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
          <CheckboxLicence onChecked={this.handleChengeCheckbox} />
          <button type="submit" disabled={this.state.licence ? false : true}>
            Отправить
          </button>
        </form>
      </>
    );
  }
}

export default Form;
