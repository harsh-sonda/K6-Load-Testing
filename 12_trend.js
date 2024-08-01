import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { check } from 'k6'
import { Rate } from 'k6/metrics'
export let errorRate = new Rate('errors')

var getApiTrend = new Trend('TREND_get_api_duration')
var getApiTrendWaiting = new Trend('TREND_get_api_waiting')
export const options = {
    vus: 2,
    duration: '10s',
    thresholds: {
        errors : ['rate<0.1']
    }
}

export default function() {
    let response = http.get('https://run.mocky.io/v3/496b69c7-e6b1-4075-9162-b12436e82682')
    
    let check1 = check(response,{
        'Success! response is 200.' : response => response.status === 200
    })
    
    // trend
    getApiTrend.add(response.timings.duration)
    getApiTrendWaiting.add(response.timings.waiting)

    console.log('Response :'+response.status)
    // errorRate.add(!check2)
}