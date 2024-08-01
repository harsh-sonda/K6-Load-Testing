import { Counter } from 'k6/metrics'
var retryCounter = new Counter('GetAPI_MAX_RETRY')
import http from 'k6/http'
import k6 from 'k6/http'
import { sleep } from 'k6'
import { Trend } from 'k6/metrics'

var retryTrend = new Trend('GET_Api_Max_Entry')

export const options = {
    vus: 2,
    //iterations : 10,
    duration: '5s'
}
export default function () {
    let url = http.get("https://run.mocky.io/v3/79e53045-6355-4ad6-9677-ed7344462e97")

    var maxAttemps = 5
    for (let retries = maxAttemps; retries > 0; retries--) {
        var numberOfAttemps = maxAttemps - retries + 1
        retryTrend.add(numberOfAttemps)
        if (url.status !== 400) {
            retryCounter.add(1)
            console.log(`Response is not correct. Attempt : ${numberOfAttemps} VU : ${__VU} Iteration : ${__ITER}`)
            sleep(1)
        } else {
            retries = 1
        }
    }

}