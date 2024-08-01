import http from 'k6/http'
import { check, group } from 'k6'
import { Rate } from 'k6/metrics'
export let errorRate = new Rate('errors')
export const options = {
    vus: 10,
    duration: '20s',
    cloud: {
        // Project: k6testing
        projectID: 3706456,
        // Test runs with the same name groups test runs together.
        name: 'K6 1st Test'
      }
}

export default function() {
    group('group1', function() {
    let response = http.get('https://run.mocky.io/v3/11098057-437f-48c7-9981-c34db6053fa6')
    console.log(`Response body length ${response.body.length} and Virtual Users : ${__VU}, ITER ${__ITER}`)
    check(response,{
        'Success! response is 200.' : r => r.status === 200,
    })
    errorRate.add(!response)
})
    group('group2', function(){
    let response2 = http.get('https://run.mocky.io/v3/dc05f812-d545-4aab-a08d-ba4e7649bb9b')
    console.log(`Response 2 body length ${response2.body.length} and Virtual Users : ${__VU}, ITER ${__ITER}`)
    check(response2,{
        'Success! response is 200.' : r => r.status === 200,
    })
    errorRate.add(!response2)
})
}
