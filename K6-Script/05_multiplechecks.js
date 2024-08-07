import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 2,
    duration: '10s'
}
// { "Message" : "API Executed Successfully" }

export default function() {
    // let response = http.get('https://run.mocky.io/v3/c54693f6-c304-4d3a-9112-00e9faf619e9')
    let response = http.get('https://run.mocky.io/v3/a46c39ac-36f4-47a1-820d-c269d07e3943')
    console.log(`Response body length ${response.body.length} and Virtual Users : ${__VU}, ITER ${__ITER}`)
    check(response,{
        'Success! response is 200.' : r => r.status === 200,
        'Body size is 43 bytes' : r => r.body.length == 43
    })
}