import http from "k6/http";
import { Rate } from "k6/metrics";

const failedRate = new Rate('failed_rate')
export const options = {
    vus: 2,
    duration: '10s',
    thresholds: {
        'failed_rate' : ['rate<0.1']
    }
}


export default function(){
    let response = http.get('https://run.mocky.io/v3/496b69c7-e6b1-4075-9162-b12436e82682')

    failedRate.add(response.status !== 200)
}