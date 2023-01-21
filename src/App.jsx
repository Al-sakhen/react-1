import Counter from "./components/Counter";
import ToggleDarkMode from "./components/ToggleDarkMode/index";
import { useState } from "react";
import { GlobalStyle } from "./theme/global.styles";

function App() {
  const [isDArkMode, setIsDarkMode] = useState(true);

  return (
    <div className="main-section">
      <GlobalStyle isDArkMode={isDArkMode}/>
      <ToggleDarkMode isDArkMode={isDArkMode} setIsDarkMode={setIsDarkMode}/>
      <h1>Ahmad Alsakhen</h1>
    </div>
  );
}

export default App;
