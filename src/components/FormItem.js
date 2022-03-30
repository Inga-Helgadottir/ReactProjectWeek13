import React from "react";

const FormItem = ({ label }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input className="formInput" type="text" placeholder={label}></input>
    </div>
  );
};

export default FormItem;
