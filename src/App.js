import { useState } from "react";
import "./App.css";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [result, setResult] = useState("");
  const click_button = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calc = () => {
    try {
      setResult(eval(result).toString());
    } catch (er) {
      setResult("error");
    }
  };
  return (
    <div className="container">
      <form action="">
        <input type="text" value={result} />
      </form>
      <div className="key">
        <button className="btn_color" onClick={clear} type="button" id="clear">
          Clear
        </button>
        <button
          className="btn_color"
          onClick={backspace}
          type="button"
          id="backspace"
        >
          C
        </button>
        <button
          className="btn_color"
          name="/"
          onClick={click_button}
          type="button"
        >
          &divide;
        </button>
        <button name="7" onClick={click_button} type="button">
          7
        </button>
        <button name="8" onClick={click_button} type="button">
          8
        </button>
        <button name="9" onClick={click_button} type="button">
          9
        </button>
        <button
          className="btn_color"
          name="*"
          onClick={click_button}
          type="button"
        >
          &times;
        </button>
        <button name="4" onClick={click_button} type="button">
          4
        </button>
        <button name="5" onClick={click_button} type="button">
          5
        </button>
        <button name="6" onClick={click_button} type="button">
          6
        </button>
        <button
          className="btn_color"
          name="-"
          onClick={click_button}
          type="button"
        >
          &ndash;
        </button>
        <button name="1" onClick={click_button} type="button">
          1
        </button>
        <button name="2" onClick={click_button} type="button">
          2
        </button>
        <button name="3" onClick={click_button} type="button">
          3
        </button>
        <button
          className="btn_color"
          name="+"
          onClick={click_button}
          type="button"
        >
          +
        </button>
        <button name="0" onClick={click_button} type="button">
          0
        </button>
        <button name="." onClick={click_button} type="button">
          .
        </button>
        <button className="btn_color" onClick={calc} id="result" type="button">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
