 
/* Global Variables */
let gen = document.getElementById('generate');
let feel = document.getElementById('feelings').value;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();   



const apiKey = '04e27c99302e8b6d91b215783b8e4ff3';
let city = 'ghaziabad';



gen.addEventListener('click', function(){
    let zip = document.getElementById('zip').value;
    let url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${zip},IN&appid=${apiKey}`;
    let res = fetch(url)
    .then(data => data.json())
     .then((JsonResponse) => {
         let temp = JsonResponse.main.temp;
        console.log(JsonResponse.main.temp)
    
     });



    return fetch('http://localhost:3000', { mode: 'no-cors'},{
    method: "POST",
    body:JSON.stringify({
        temperature:temp,
        Date: newDate,
        feeling: feel
    }),
    headers:{
        "Content-type": "application/json"
    }
    })
    .then(JsonResponse => {
        return JsonResponse
    }).then(function({temperature, Date, feeling}) {
        document.getElementById('temp') = temperature + 'Temp';
        document.getElementById('date') = Date + 'Date';
        document.getElementById('content') = feeling + 'Feel'
    })
    .catch(function(error) {
        console.log('Request failed', error)
      })
})




 
