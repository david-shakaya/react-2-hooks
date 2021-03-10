import React from "react";
import style from "./Dropdown.module.css";

class Dropdown extends React.Component {
  state = {
    isVisible: false,
  };

  showDropdown = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  // isVisible: !prevState.isVisible - типа сделай противоположное значение от предыдущего !prevSt..

  render() {
    return (
      <div className={style.Dropdown__wrapper}>
        <div>
          <button
            type="button"
            className={style.Dropdown__btn}
            onClick={this.showDropdown}
          >
            {this.state.isVisible ? "Скрыть" : "Показать"}
          </button>
        </div>
        {this.state.isVisible && <div className={style.Dropdown}>Dropdawn</div>}
      </div>
    );
  }
}

export default Dropdown;
