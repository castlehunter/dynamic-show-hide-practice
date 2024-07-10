import { useState } from "react";
import "./App.css";

// Show/Hide Password Input Field
// Design a simple form that includes a checkbox and a password input field.
// When the user checks the checkbox, display the password input field;
// when the user unchecks it, hide the password input field.

function App() {
  const [isShow, setIsShow] = useState(false);

  function handleCheckbox() {
    setIsShow((cur) => !cur);
  }

  return (
    <form>
      <label htmlFor="theCB">Show/Hide</label>
      <input
        type="checkbox"
        id="theCB"
        name="theCB"
        onChange={handleCheckbox}
      />
      {isShow && <Password />}
    </form>
  );
}

function Password() {
  return (
    <div>
      <label>Password: </label>
      <input type="password" id="password" name="password" />
    </div>
  );
}
export default App;
