import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testi sivu</h1>
        <form action='' method='POST'>
          <input type='text' name='note'/>
          <br/>
          <input type='submit' value="Save"/>
        </form>
      </header>
          <br/>

        <code>
          <pre>
            sequenceDiagram
              participant Browser
              participant User
          </pre>
        </code>
    </div>
  );
}

export default App;
