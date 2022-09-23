import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import buildInput from "./inputCustom"

let com = false;
function App() {
  const [value, setValue] = useState("")

  const handleCom = (e) => {
    console.log(e.type)
    if (e.type === "compositionstart" || e.type === "compositionupdate") {
      com = true
    }
    if (e.type === "compositionend") {
      com = false
    }
  }

  const handleOnChange = (e) => {
    // if (!com) {
      console.log(e.target.value, e.target.value.normalize("NFKC"))
      setValue(e.target.value.normalize("NFKC"));
    // }
  }

  const Input = buildInput("input") 
  return (
    <div className="App">
      <Input type="text" onChange={handleOnChange} value={value}
        // onCompositionStart={handleCom}
        // onCompositionUpdate={handleCom}
        // onCompositionEnd={handleCom}
      />
    </div>
  );
}

export default App;
