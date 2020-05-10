 
 
/* Global Variables */
let gen = document.getElementById('generate');
let feel = document.getElementById('feelings');
let zip = document.getElementById('zip');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();   
const apiKey = '04e27c99302e8b6d91b215783b8e4ff3';

gen.addEventListener('click', function(){
 let url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${zip.value},IN&appid=${apiKey}`;
fetch(url,{
    method: "GET",
})
.then(function(response) {
    return response.json();
})
.then(function(response) {
    const {main: { temp:temperature}} =response
  console.log(temperature);
  console.log(newDate);
  console.log(feel.value);
  return fetch('http://localhost:3000/api', {
      method: "POST",
      body: JSON.stringify({
          temperature:temperature,
          date: newDate,
          feeling:feel.value
      }),
      headers:{
          "Content-type": "application/json"
      }

  })
 })
 .then(function(response) {
      return response.json();
 })
 .then(function({temperature, feeling, date}) {
     console.log(temperature);
     console.log(feeling);
document.getElementById('date').innerHTML = date + 'Date'
document.getElementById('temp').innerHTML = temperature +'Temp'
document.getElementById('content').innerHTML = feeling +'feeling'
})
.catch(function(error) {
    console.log('Request failed', error)
})
});






 
