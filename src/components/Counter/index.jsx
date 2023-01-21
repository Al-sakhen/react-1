import style from "./Counter.module.css";
import { useState } from "react";
import ToggleDarkMode from "../ToggleDarkMode";

function Counter() {
  const [name, setName] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(true);

  function changeName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <>
      <span className={style.counter}>Counter {name}</span>
      {isLogedIn ? <h1>hello there</h1> : <h1>bye bye</h1>}
      <button
        onClick={() => {
          setIsLogedIn(!isLogedIn);
        }}
      >
        change me
      </button>
      <input type="text" value={name} onChange={changeName} />
      <br />
    </>
  );
}

export default Counter;
