export function getSearchResults(search_term, zip_data_list, facility_data_list, city_data_list) {
    console.log("getSearchResults")
    var zip_res = getZipSearch(search_term, zip_data_list);
    var facility_res = getFacilitySearch(search_term, facility_data_list);
    var city_res = getCitySearch(search_term, city_data_list);
    return [zip_res, facility_res, city_res];
}

function getZipSearch(search_term, data_list) {
    var data = [];
    for(var i = 0; i < data_list.length; i++){
        if(String(data_list[i].zip_code).includes(String(search_term))) {
            data.push(data_list[i]);
        }
    }
    return data;
}

function getFacilitySearch(search_term, data_list) {
    var data = [];
    for(var i = 0; i < data_list.length; i++){
        if(String(data_list[i].facility_name).includes(String(search_term))) {
            data.push(data_list[i]);
        }
    }
    return data;
}

function getCitySearch(search_term, data_list) {
    var data = [];
    for(var i = 0; i < data_list.length; i++){
        if(String(data_list[i].city_name).includes(String(search_term))) {
            data.push(data_list[i]);
        }
    }
    return data;
}