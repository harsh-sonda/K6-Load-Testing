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
    let response = http.get('https://run.mocky.io/v3/23314af7-dfb2-43dd-a558-e0499433f02e')

    failedRate.add(response.status !== 200)
}