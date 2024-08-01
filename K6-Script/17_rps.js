import http from 'k6/http'
import { check } from 'k6'

export const options = {
    // vus: 5,
    // duration: '5s',
    //rps = 5,
}

export default function() {
    var response = http.get('https://run.mocky.io/v3/8018b81e-ad12-4f5f-a109-a47d25e53ca5')
    
    check(response,{
        'Success! response is 200.' : r => r.status === 200,
    })
}