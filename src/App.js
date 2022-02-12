import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary Shmictionary 📖 </header>

        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        <footer>
          <a
            href="https://github.com/karynella/dictionary-project"
            rel="noreferrer"
            target="_blank"
          >
            Open source code
          </a>{" "}
          by{" "}
          <a
            href="https://instagram.com/karynella"
            rel="noreferrer"
            target="_blank"
          >
            Karynella
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
