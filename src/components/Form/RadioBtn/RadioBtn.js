import React from "react";

class RadioBtn extends React.Component {
  //   state = {
  //     experience: "junior",
  //   };

  //   handleChenge = (e) => {
  //     this.setState({ experience: e.target.value });
  //   };

  //   this.props.onSubmit

  render() {
    return (
      <div>
        <label htmlFor="">
          junior
          <input
            type="radio"
            value="junior"
            name="experience"
            checked={this.props.onSubmitState === "junior"}
            onChange={this.props.onSubmit}
          />
        </label>
        <label htmlFor="">
          middle
          <input
            type="radio"
            value="middle"
            name="experience"
            checked={this.props.onSubmitState === "middle"}
            onChange={this.props.onSubmit}
          />
        </label>
        <label htmlFor="">
          senior
          <input
            type="radio"
            value="senior"
            name="experience"
            checked={this.props.onSubmitState === "senior"}
            onChange={this.props.onSubmit}
          />
        </label>
      </div>
    );
  }
}

export default RadioBtn;
