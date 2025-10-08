import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* ✅ Header Section */}
      <header>
        <h1>Welcome to D7S Security (d7ssecurity)</h1>
        <p>Your trusted partner in professional security and protection services.</p>
      </header>

      {/* ✅ Company Info Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          D7S Security Agency provides licensed and insured security services across India —
          including trained security guards, professional bodyguards, and event protection.
          We are committed to delivering 24/7 safety and reliability for our clients.
        </p>
      </section>

      {/* ✅ Example Demo Section (you can remove or replace this) */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>Interactive Counter Example</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* ✅ Footer */}
      <footer>
        <p>© 2025 D7S Security Agency (d7ssecurity) — All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
