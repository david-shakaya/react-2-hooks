import React from "react";
import Counter from "./components/Counter";
import Dropdawn from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import colorPickerData from "./data/colorPickerData.json";

function App() {
  return (
    <>
      <Counter initialValue={3} />
      <Dropdawn />
      <ColorPicker options={colorPickerData} />
    </>
  );
}

export default App;
