import Iframe from 'react-iframe'
import './App.css';
import { getSearchResults } from './Search';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [servicers, setServicers] = useState([])
  const [searchList, setSearchList] = useState([])

  useEffect(()=>{
    const fetchAllServicers = async () => {
      try{
        const res = await axios.get(process.env.REACT_APP_CONNPORT);
        setServicers(res.data);
        setSearchList(res.data);
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
            <div>
              <h3 id="Search-header">Location Search</h3>
              <input type="text" id="Search-text" name="search-text" placeholder="Enter zip code, city, or service center" onChange={(e) => setSearchList(getSearchResults(e.target.value, servicers))}></input>
              <div>
                  <h6 id="Search-result">Results</h6>
              </div>
              <div id='Results'>
                  {searchList.map(zip=>(
                      <div className='Result-item' key={zip.zip_code}>
                          <h6 className='Headline'>{zip.zip_code}</h6>
                          <p className='Primary'><b>Primary:</b> {zip.primary_serv}</p>
                          <p className='Secondary'><b>Secondary:</b> {zip.secondary_serv}</p>
                          <p className='Tertiary'><b>Tertiary:</b> {zip.tertiary_serv}</p>
                          <a className='DataToggle'>Show More</a>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
