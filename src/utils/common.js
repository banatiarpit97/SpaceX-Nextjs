export function getQueryString(queryParams){
    let queryString = '';
    for(let param in queryParams) {
        queryString += queryString ? '&' : '?';
        queryString += `${param}=${queryParams[param]}`;
    }
    return queryString;
}