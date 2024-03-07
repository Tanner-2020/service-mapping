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
            <Iframe title="Map display"></Iframe>
            <a id='Map-button' href='' target='_blank'>Open map in new tab</a>
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
