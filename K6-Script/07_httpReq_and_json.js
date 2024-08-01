import http from 'k6/http'
import { check } from 'k6'

export default function() {
    var url = 'https://run.mocky.io/v3/85974b56-1dce-4f00-b28a-fe9192ecd4a4'

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