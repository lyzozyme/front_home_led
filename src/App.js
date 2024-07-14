import './App.css';
import ColorPicker from  './components/ColorPicker.js';

function App() {  
  return (
    <div className="HomeLed">
      <header className="App-header">
        <p>Choose the led color and validate.</p>
        <ColorPicker/>
      </header>
    </div>
  );
}

export default App;
