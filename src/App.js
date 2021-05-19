import logo from './logo.svg';
import './App.css';
const flag=true;
const count=23;
const num="sum";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color:'black'
        }}>
          Hello World!
        </p>
        <p>
          Вывод значения переменной: {num}
        </p>
        <p>
          Вывод числа: {23}
        </p>
        <p>
          Вывод арифметической операции: {23+5}
        </p>
        <p>
          Вывод логической операциии: {flag && 'Flag is true'}
        </p>
        <p>
          Вывод тернарного условия: {flag ? 'Flag is true':'Flag is false'}
        </p>
        <p>
          Вывод undefined, null, true и false:
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
