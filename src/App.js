import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Hello Payal</div>
      <label htmlFor="names">Names of the Manager: </label>
      <select name="managers" id="managers">
        <option value="murali">Murali</option>
        <option value="chunhui">Chunhui</option>
        <option value="alok">Alok</option>
        <option value="ronak">Ronak</option>
      </select>
    </div>
  );
}

export default App;
