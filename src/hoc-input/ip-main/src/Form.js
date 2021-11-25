import { useState } from "react";

const inputStyles = {
  display: "flex",
  flexDirection: "column"
};

const handleChange = (e) => {
  if (e.target.value.length <= 2) {
    const form = e.target.form;
    const index = Array.prototype.indexOf.call(form, e.target);
    form.elements[index + 1].focus();
    e.target.value = index + 1;
    e.target.placeholder = e.target.value;
  }
  e.preventDefault();
};

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={() => setValue(value)}
      maxLength={"1"}
      onKeyDown={handleChange}
      {...props}
    />
  );
};

const Form = () => {
  return (
    <form style={inputStyles}>
      <Input />
      <Input />
      <Input />
      <Input />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
