import http from 'k6/http'

// export const options = {
//     vus: 1,
//     duration: '10s',
// }

export default function() {
    let response = http.get('https://run.mocky.io/v3/e24ca6d6-10e0-443b-ba6c-0d67383430a4');
    
    let body = JSON.parse(response.body)
    body.data.forEach(element => {
        console.log(`Name is : ${element.name}`)
        element.array.forEach(element2 => {
            console.log(`Name is : ${element2}`)
            
        });
    });
}