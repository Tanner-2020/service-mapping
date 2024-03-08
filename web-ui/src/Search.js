export function searchModule() {
    return (
        <div>
            <h3 id="Search-header">Location Search</h3>
            <input type="text" id="Search-text" name="search-text" placeholder="Enter zip code, city, or service center" onChange={() => getSearchResults()}></input>
            <div>
                <h6 id="Search-result">Results</h6>
            </div>
            <div id='Results'>
                <div className="Result-item">
                    <h6>12345</h6>
                    <a href="">More Info</a>
                </div>
                <div className="Result-item">
                    <h6>12345</h6>
                    <a href="">More Info</a>
                </div>
                <div className="Result-item">
                    <h6>City name</h6>
                    <p>City in zip code</p>
                    <a href="">More Info</a>
                </div>
                <div className="Result-item">
                    <h6>City name</h6>
                    <p>City in zip code</p>
                    <a href="">More Info</a>
                </div>
                <div className="Result-item">
                    <h6>Location name</h6>
                    <p>Location address</p>
                    <a href="">More Info</a>
                </div>
                <div className="Result-item">
                    <h6>Location name</h6>
                    <p>Location address</p>
                    <a href="">More Info</a>
                </div>
            </div>
        </div>
    )
}


function getSearchResults() {
    var test_value = 'temp';
    console.log("Value: " + test_value);
    console.log("Checking zip code database.");
    var zip_res = getZipSearch(test_value);
    console.log("Checking city database.");
    var city_res = getCitySearch(test_value);
    console.log("Checking facility database.");
    var facility_res = getFacilitySearch(test_value);
    console.log("Returning received values.");
    console.log([zip_res, city_res, facility_res])
    return [zip_res, city_res, facility_res]

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