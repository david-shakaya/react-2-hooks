import React from "react";
import style from "./ColorPicker.module.css";
import {
  ColorPicker__option,
  ColorPicker__option__active,
} from "./ColorPicker.module.css";

class ColorPicker extends React.Component {
  state = {
    activeIdx: 1,
  };

  changeActiveIdx = (index) => {
    this.setState({
      activeIdx: index,
    });
  };

  addActiveClasses = (index) => {
    const optionClasses = [ColorPicker__option];

    if (index === this.state.activeIdx) {
      optionClasses.push(ColorPicker__option__active);
    }
    return optionClasses.join(" ");
  };

  render() {
    const arrPropsOptions = this.props.options;
    const activeIndex = this.state.activeIdx;

    return (
      <div className={style.ColorPicker}>
        <h2 className={style.ColorPicker__title}>Color Picker</h2>
        <p>
          Выбран цвет:
          <span className={style.color__text__span}>
            {" "}
            {arrPropsOptions[activeIndex].label}
          </span>
        </p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                style={{
                  backgroundColor: color,
                }}
                className={this.addActiveClasses(index)}
                onClick={() => this.changeActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
