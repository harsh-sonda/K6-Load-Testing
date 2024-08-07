import http from 'k6/http'
import { check } from 'k6'
import { Rate } from 'k6/metrics'
export let errorRate = new Rate('errors')
export const options = {
    vus: 3,
    duration: '10s',
    thresholds: {
        errors : ['rate<0.1']
    }
}

export default function() {
    // let response = http.get('https://run.mocky.io/v3/c54693f6-c304-4d3a-9112-00e9faf619e9')
    // let response = http.get('https://run.mocky.io/v3/623d83e7-9b8a-48c1-b9ab-c2e6db32b945')
    //let response = http.get('https://chatgpt.com/?oai-dm=1')
    let response = http.get('https://www.youtube.com/')
    //console.log(`Response body length ${response.body.length} and Virtual Users : ${__VU}, ITER ${__ITER}`)
    // check(response,{
    //     'Success! response is 200.' : r => r.status === 200,
    //     'Body size is 43 bytes' : r => r.body.length == 43
    // })
    let check1 = check(response,{
        'Success! response is 200.' : response => response.status === 200
    })
    // let check2 = check(response,{
        // 'Body size is 43 bytes' : r => r.body.length == 43

    // })
    errorRate.add(!check1)
    console.log('Response :'+response.status)
    // errorRate.add(!check2)
}