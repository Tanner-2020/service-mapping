export function searchModule() {
    return (
        <div>
            <h3 id="Search-header">Location Search</h3>
            <input type="text" id="Search-text" name="search-text" placeholder="Enter zip code, city, or service center" onChange={() => getSearchResults()}></input>
            <div>
                <h6 id="Search-result">Results</h6>
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