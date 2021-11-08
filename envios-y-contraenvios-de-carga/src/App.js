import NavBar from "./components/NavBar";
import fondopg from "./Img/fondopg.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <img
          src={fondopg}
          className="App-fondo vh-100"
          alt="fondo"
          style={{ width: "100%", height: "700px" }}
        />
      </header>
    </div>
  );
}

export default App;
