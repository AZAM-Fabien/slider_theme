import "./App.css";
import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`main ${theme === "light" ? "light" : "dark"}`}>
        <h1> slider theme light/dark</h1>
        <h2> the current theme is: {theme}</h2>
        <Slider toggleTheme={toggleTheme} />
      </div>
    </>
  );
}

export default App;
