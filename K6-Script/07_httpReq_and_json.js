import http from 'k6/http'
import { check } from 'k6'

// { "Message" : "Data fetched successfully" }
export default function() {
    var url = 'https://run.mocky.io/v3/2e4a41eb-d451-4ea0-a430-4d9f4c51910b'

    var headerParam= {
        headers : {
            'Content-Type': "application/json",
        }
    }
        const response = http.get(url,headerParam)
         check(response,{
        ' Success! response is 200.' : response => response.status === 200,
    })
    let body = JSON.parse(response.body)
    
    console.log(`Respose body : ${JSON.stringify(body)}`)
    console.log(`Body Message : ${body.Message}`)
    check(response,{
   ' Success! Fetch Message.' : JSON.parse(response.body).Message === "Data fetched successfully",
})
}