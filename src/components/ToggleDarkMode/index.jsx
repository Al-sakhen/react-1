import React from "react";
import { ToggleModeBtn } from "./ToggleDarkMode.styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ToggleDarkMode = ({ isDArkMode, setIsDarkMode }) => {
  return (
    <div style={{'display':'flex' , 'justifyContent':'flex-end', 'padding': '10px'}}>

      <ToggleModeBtn onClick={() => setIsDarkMode(!isDArkMode)}>
        {isDArkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </ToggleModeBtn>
    </div>
  );
};

export default ToggleDarkMode;
