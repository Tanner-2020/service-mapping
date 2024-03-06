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


function getSearchResults(text_value) {

}

function getZipSearch(zip_code) {

}


function getCitySearch(city_name) {

}


function getFacilitySearch(facility_name) {

}