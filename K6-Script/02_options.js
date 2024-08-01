import http from 'k6/http'

export const options = {
    vus: 10,
    duration: '20s'
}

export default function() {
    http.get('https://www.google.com/')
}