import React, { useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { ProFormCascader, ProFormSelect, ProCard, EditableProTable } from "@ant-design/pro-components";
import axios, { AxiosRequestConfig } from "axios"


const fetcher = async (config: AxiosRequestConfig) => await axios.request(config)
function App() {
  const [count, setCount] = useState(0);

  useLayoutEffect()
fetcher({ url: "ifconfig.co"} )

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Firewall</h1>
      <h2>UFW</h2>
      <div className="card">
        <ProFormSelect />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>

        <p>
          Tip: you can use the inspector button next to address bar to click on
          components in the preview and open the code in the editor!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
