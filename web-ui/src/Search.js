import { useState } from 'react';

export function searchModule() {
    const [searchResults, setSearchResults] = useState("");

    return (
        <div>
            <h3 id="Search-header">Location Search</h3>
            <input type="text" id="Search-text" name="search-text" placeholder="Enter zip code, city, or service center" onChange={(e) => getSearchResults(e.target.value)}></input>
            <div>
                <h6 id="Search-result">Results</h6>
            </div>
            <div id='Results'>
                {searchResults}
            </div>
        </div>
    )
}


function getSearchResults(test_value) {
    var zip_res = getZipSearch(test_value);
    var city_res = getCitySearch(test_value);
    var facility_res = getFacilitySearch(test_value);
    var search_res = [zip_res, city_res, facility_res];

    // TODO: Create function to erase and append results to cells in result list.
    getSearchResults(search_res);
}

function getZipSearch(zip_code) {
    // TODO: Query database with following query: Select * from zip_codes left join servicer_data where zip_code contains zip_code
    var data = ['Test', 'Values', 'Here'];
    return data;
}


function getCitySearch(city_name) {
    // TODO: Query database with following query: Select * from city left join servicer_data where zip_code contains zip_code
    var data = ['Test', 'Values', 'Here'];
    return data;
}


function getFacilitySearch(facility_name) {
    // TODO: Query database with following query: Select * from facility left join servicer_data where zip_code contains zip_code
    var data = ['Test', 'Values', 'Here'];
    return data;
}