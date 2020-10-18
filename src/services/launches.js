import { FETCH_LIMIT } from './../constants/common';
import { FetchData } from './../utils/fetch';

export function getDefault(){
    const queryParams = {
        limit: FETCH_LIMIT
    };
    return FetchData(queryParams);
}

export function getMissions(filters){
    const queryParams = {
        limit: FETCH_LIMIT,
        ...filters
    };
    return FetchData(queryParams);
}

export function GetLaunchLand(){
    const queryParams = {
        launch_success: true,
        land_success: true,
        limit: FETCH_LIMIT
    };
    FetchData(queryParams);
}

export function getAll(){
    const queryParams = {
        launch_success: true,
        land_success: true,
        launch_year: 2014,
        limit: FETCH_LIMIT
    };
    FetchData(queryParams);
}