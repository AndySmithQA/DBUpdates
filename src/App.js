import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Blog Application</h3>
      </header>
      <Header />
    </div>
  );
}

export default App;
