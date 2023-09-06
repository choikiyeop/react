import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDialog } from "./hooks/useDialog";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [Dialog, setStep] = useDialog(["상세 정보", "해피해피"]);

  return (
    <>
      기본 페이지
      <Link to={"/laboratory"}>실험실</Link> 
      <Dialog>
        <Dialog.Step name="상세 정보">
          <div>상세정보</div>
        </Dialog.Step>
        <Dialog.Step name="해피해피">
          <div>해피해피</div>
        </Dialog.Step>
      </Dialog>
      <button onClick={() => setStep("해피해피")}>앞으로</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
