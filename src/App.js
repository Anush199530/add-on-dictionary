import logo from "./logo2.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <a
          href="https://www.ucll.be/nl/welkom-moving-mind"
          className="btn btn-primary"
        >
          Hello
        </a>
      </header>
    </div>
  );
}
