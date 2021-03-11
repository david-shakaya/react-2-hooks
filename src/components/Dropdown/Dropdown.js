import React from "react";
import style from "./Dropdown.module.css";

// state = {
//   isVisible: false,
// };

// showDropdown = () => {
//   console.log(this.props.dropdownIsVisible);
//   this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
// };

// isVisible: !prevState.isVisible - типа сделай противоположное значение от предыдущего !prevSt..

const Dropdown = ({ showDropdown, dropdownIsVisible }) => {
  return (
    <div className={style.Dropdown__wrapper}>
      <div>
        <button
          type="button"
          className={style.Dropdown__btn}
          onClick={() => showDropdown()}
        >
          {dropdownIsVisible ? "Скрыть" : "Показать"}
        </button>
      </div>
      {dropdownIsVisible && <div className={style.Dropdown}>Dropdawn</div>}
    </div>
  );
};

export default Dropdown;
