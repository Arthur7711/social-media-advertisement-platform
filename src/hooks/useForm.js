import React, { useState } from "react";

// custom hooks useForm
const useForm = (callback) => {
  const [values, setValues] = useState({});
  return {
    values,
    onChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    onSubmit: (e) => {
      e.preventDefault();
      callback();
    },
  };
};

// app component
export default function App() {
  const { values, onChange, onSubmit } = useForm(() => {
    console.log(values.username);
    console.log(values.email);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" onChange={onChange} />
        <input type="email" name="email" onChange={onChange} />
        <input type="submit" value="Sing-in" />
      </form>
    </div>
  );
}
