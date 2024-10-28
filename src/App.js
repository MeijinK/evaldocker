import "./App.css";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>Bienvenue!!!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          Découvrez en plus <Link to="/apropos">à propos de moi !</Link>
        </p>
      </header>
    </div>
  );
};

export default App;
