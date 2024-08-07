import http from 'k6/http'

/* 
{
  "data": [
    {
      "name": "leanne graham",
      "email": "leanne@gmail.com",
      "job": "web developer",
      "location": "london",
    },
    {
      "name": "ervin howell",
      "email": "ervin@gmail.com",
      "job": "tech lead",
      "location": "london",
    },
    {
      "name": "clementine bauch",
      "email": "clementine@gmail.com",
      "job": "web developer",
      "location": "liverpool",
    },
    {
      "name": "chelsey dietrich",
      "email": "chelsey@gmail.com",
      "job": "baker",
      "location": "london",
    },
    {
      "name": "dennis schulist",
      "email": "dennis@gmail.com",
      "job": "pen tester",
      "location": "manchester",
    }
  ]
}
*/

export default function() {
    let response = http.get('https://run.mocky.io/v3/a87e220b-823e-4f1e-ad95-fdd8679a0477');
    
    let body = JSON.parse(response.body)
    body.data.forEach(element => {
        console.log(`Name is : ${element.name}`)
    });
}