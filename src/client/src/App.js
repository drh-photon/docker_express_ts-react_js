import logo from './logo.svg';
import Customers from './components/Customers'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     


      </header>
      <Customers />
    </div>
  );
}

export default App;
