import React from "react";

class RadioBtn extends React.Component {
  render() {
    return (
      <div>
        <label>
          junior
          <input
            type="radio"
            value="junior"
            name="experience"
            checked={this.props.onSubmitState === "junior"}
            onChange={this.props.onSubmit}
          />
        </label>
        <label>
          middle
          <input
            type="radio"
            value="middle"
            name="experience"
            checked={this.props.onSubmitState === "middle"}
            onChange={this.props.onSubmit}
          />
        </label>
        <label>
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
