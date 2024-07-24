import './App.css';
import {Counter} from './components/Counter.jsx'
function App() {
  return (
    <div className="App">
      <Counter min={-Infinity} max={Infinity} />
    </div>
  );
}

export default App;
