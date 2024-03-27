import Iframe from 'react-iframe'
import './App.css';
import { getSearchResults } from './Search';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [zipServ, setZipServ] = useState([])
  const [zipList, setZipList] = useState([])

  const [cityServ, setCityServ] = useState([])
  const [cityList, setCityList] = useState([])

  const [facilityServ, setFacilityServ] = useState([])
  const [facilityList, setFacilityList] = useState([])

  useEffect(()=>{
    const fetchAllServicers = async () => {
      try{
        const zip_res = await axios.get(process.env.REACT_APP_CONNPORT_ZIP);
        setZipServ(zip_res.data);
        setZipList(zip_res.data);
      }catch(err){
        console.log(err);
      }
      try {
        // Commented out for testing purposes.
        //const facility_res = await axios.get(process.env.REACT_APP_CONNPORT_FACILITY);
        //setFacilityServ(facility_res.data);
        //setFacilityList(facility_res.data);
        setFacilityServ([]);
        setFacilityList([]);
      } catch(err) {
        console.log(err);
      }
      try {
        // Commented out for testing purposes.
        //const city_res = await axios.get(process.env.REACT_APP_CONNPORT_CITY);
        //setCityServ(city_res.data);
        //setCityList(city_res.data);
        setCityServ([]);
        setCityList([]);
      } catch(err) {
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
              <input type="text" id="Search-text" name="search-text" placeholder="Enter zip code, city, or service center" onChange={(e) => updateLists(e.target.value, zipServ, facilityServ, cityServ)}></input>
              <div>
                  <h6 id="Search-result">Results</h6>
              </div>
              <div id='Results'>
                  {zipList.map(zip=>(
                      <div className='Result-item' key={zip.zip_code}>
                          <h6 className='Headline'>{zip.zip_code}</h6>
                          <p className='Primary'><b>Primary:</b> {zip.primary_serv}</p>
                          <p className='Secondary'><b>Secondary:</b> {zip.secondary_serv}</p>
                          <p className='Tertiary'><b>Tertiary:</b> {zip.tertiary_serv}</p>
                          <a className='DataToggle'>Show More</a>
                      </div>
                  ))}
                  {/* {facilityList.map(facility=>(
                      <div className='Result-item' key={facility.facility_name}>
                          <h6 className='Headline'>{facility.facility_name}</h6>
                          <p>{facility.zip_code}</p>
                          <p className='Primary'><b>Primary:</b> {zip.primary_serv}</p>
                          <p className='Secondary'><b>Secondary:</b> {zip.secondary_serv}</p>
                          <p className='Tertiary'><b>Tertiary:</b> {zip.tertiary_serv}</p>
                          <a className='DataToggle'>Show More</a>
                      </div>
                  ))}
                  {cityList.map(city=>(
                      <div className='Result-item' key={city.zip_code}>
                          <h6 className='Headline'>{city.city_name}</h6>
                          <p>{city.zip_code}</p>
                          <p className='Primary'><b>Primary:</b> {zip.primary_serv}</p>
                          <p className='Secondary'><b>Secondary:</b> {zip.secondary_serv}</p>
                          <p className='Tertiary'><b>Tertiary:</b> {zip.tertiary_serv}</p>
                          <a className='DataToggle'>Show More</a>
                      </div>
                  ))} */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );

  function updateLists (search_term, zip_data, facility_data, city_data) {
    var results = getSearchResults(search_term, zip_data, facility_data, city_data);
    console.log(results)
    setZipList(results[0]);
    //setFacilityList(results[1]);
    //setCityList(results[2]);
  }
}

export default App;
