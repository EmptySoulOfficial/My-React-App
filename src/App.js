import './App.css';
import pck from '../package.json'
import DemoContent from './content/DemoContent/DemoContent'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-Container">
        <DemoContent packageversion={pck.version} />
      </div>
    </div>
  );
}

export default App;
