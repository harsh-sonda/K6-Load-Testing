import http from 'k6/http'
import k6 from 'k6/http'

export default function(){
    let url = "https://run.mocky.io/v3/23314af7-dfb2-43dd-a558-e0499433f02e"

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