export function getSearchResults(search_term, data_list) {
    console.log("getSearchResults")
    var zip_res = getZipSearch(search_term, data_list);
    return zip_res;
}

function getZipSearch(search_term, data_list) {
    var data = [];
    for(var i = 0; i < data_list.length; i++){
        console.log(data_list[i].zip_code)
        if(String(data_list[i].zip_code).includes(String(search_term))) {
            data.push(data_list[i]);
        }
    }
    console.log(data);
    return data;
}