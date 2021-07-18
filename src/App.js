import { useRef, useState } from "react";
import Parent from './components/Parent'
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
    <div className="App">
      <Parent/>
    </div>
  );
}
