import Iframe from 'react-iframe'
import './App.css';
import { searchModule } from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='Page-title'>Service Viewer</h1>
        <div className='Main-content'>
          <div id='Map-box'>
            <Iframe src="" title="Map display"></Iframe>
          </div>
          <div id='Search-viewer'>
            {searchModule()}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
