import { useState } from 'react';
import reactLogo from './assets/img/logo/react.svg';
import viteLogo from './assets/img/logo/vite.svg';
import tsLogo from './assets/img/logo/typescript.svg';
import eslintLogo from './assets/img/logo/eslint.svg';
import airbnbLogo from './assets/img/logo/airbnb.svg';
import prettierLogo from './assets/img/logo/prettier.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                    <img src={tsLogo} className="logo typescript" alt="TypeScript logo" />
                </a>
                <a href="https://eslint.org/" target="_blank" rel="noreferrer">
                    <img src={eslintLogo} className="logo eslint" alt="ESLint logo" />
                </a>
                <a href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank" rel="noreferrer">
                    <img src={airbnbLogo} className="logo airbnb" alt="Airbnb logo" />
                </a>
                <a href="https://prettier.io/" target="_blank" rel="noreferrer">
                    <img src={prettierLogo} className="logo prettier" alt="Prettier logo" />
                </a>
            </div>
            <h1>Vite + React + TS + ESLint x airbnb + Prettier</h1>
            <div className="card">
                <button type="button" onClick={() => setCount(() => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite, React, TS, ESLint, airbnb and Prettier logos to learn more
            </p>
        </div>
    );
}

export default App;
