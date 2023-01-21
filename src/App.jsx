import Counter from "./components/Counter";
import ToggleDarkMode from "./components/ToggleDarkMode/index";
import { useState } from "react";
import { GlobalStyle } from "./theme/global.styles";
import LoginForm from "./components/LoginForm/index";
import Post from "./components/Post";
import posts from "./mock/Posts";

function App() {
  const [isDArkMode, setIsDarkMode] = useState(true);

  let allPosts = posts.map((data, index) => {
    return <Post key={index} data={data} />;
  });
  return (
    <div className="main-section">
      <GlobalStyle isDArkMode={isDArkMode} />
      <ToggleDarkMode isDArkMode={isDArkMode} setIsDarkMode={setIsDarkMode} />
      {/* <h1>Ahmad Alsakhen</h1> */}
      {/* <LoginForm/> */}
      <div className="row">{allPosts}</div>
    </div>
  );
}

export default App;
