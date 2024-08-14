import {checks} from 'k6';
import {Rate, Trend} from 'k6/metrics';
import http from 'k6';

// check error rate
let failRate = new Rate('failure_rate')

// define thresholds
let createTrend = new Trend('Trend_CreateCource') 
let getTrend = new Trend('Trend_GetCource') 
let deleteTrend = new Trend('Trend_deleteCource') 

// IMP functions

//set header
export const setHeader = ()=>{
    return {
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    }
}

// 
export function createCourse(endpoint, token){
    console.log(`Inside createCourse token: ${token}`)

    let postRespone = http.post(url,null,setHeader());
}