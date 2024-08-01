import http from 'k6/http'
import k6 from 'k6/http'

export default function(){
    let url = "https://run.mocky.io/v3/60a1402b-a187-4c49-80af-7655753a782e"

    let param = {
        headers : {
            'Content-Type' : 'application/js',
        }
    }

    let payload = JSON.stringify({
        email : 'abcd@gmail.com',
        password: "1234"
    })

    http.post(url,param,payload)
}