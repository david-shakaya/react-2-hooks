import React from "react";
import style from "./ColorPicker.module.css";

class ColorPicker extends React.Component {
  render() {
    return (
      <div className={style.ColorPicker}>
        <h2 className={style.ColorPicker__title}>Color Picker</h2>
        <p>
          Выбран цвет:
          <span className={style.color__text__span}></span>
        </p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
