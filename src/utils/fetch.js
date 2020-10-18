import { BASE_API_URL } from './../constants/common';
import { getQueryString } from './../utils/common';

export async function FetchData(queryParams, method='GET'){
    console.log(queryParams)
    const url = `${BASE_API_URL}${getQueryString(queryParams)}`;
    const res = await fetch(url, {method});
    return res.json()
}