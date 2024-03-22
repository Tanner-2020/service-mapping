import Iframe from 'react-iframe'
import './App.css';
import { searchModule } from './Search';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [servicers, setServicers] = useState([])

  useEffect(()=>{
    const fetchAllServicers = async () => {
      try{
        const res = await axios.get(process.env.REACT_APP_CONNPORT);
        setServicers(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllServicers()
  },[])

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
            {searchModule(servicers)}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
