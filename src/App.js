import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [lowerCasedValue, setLowerCasedValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const value = event.target.value;
    setLowerCasedValue(value.toLowerCase());
  };
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>user name</label>
        <input
          id='name'
          onChange={(e) => onChange(e)}
          value={lowerCasedValue}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
