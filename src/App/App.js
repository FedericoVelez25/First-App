
import './App.css';
import Button from './Button';
import Article from './firstSection';
function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h3>LOGO</h3>
        </div>
    <div className="menuContainer">
        <p>How it works</p>
        <Button text="Login" className="buttonPrimario" />
        <Button text="Sign up" className="buttonSecundario" />
    </div>
    </header>
        <Article />
    </div>
  );
}

export default App;
