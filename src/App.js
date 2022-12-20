import Data from "./data";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RapidBook Assignment</h1>
        <div className="titles">
          <h1>Accounts</h1>
          <h1>Debit Amount</h1>
          <h1>Credit Amount</h1>
        </div>
      <Data/>
      </header>
    </div>
  );
}

export default App;
