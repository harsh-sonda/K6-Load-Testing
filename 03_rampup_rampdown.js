import http from 'k6/http'

export const options = {
    stages : [
        {duration: '1m', target :10},
        {duration: '30s', target :5},
    ]
}

export default function() {
    http.get('https://www.google.com/')
}