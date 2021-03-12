import React from "react";

const CheckboxLicence = (props) => (
  <>
    <label>
      <input type="checkbox" name="licence" onChange={props.onChecked} />{" "}
      Согласны с политикой партии?
    </label>
  </>
);

export default CheckboxLicence;
