// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;  // why uncomment this line (index.html)?
// const {Navigator} = require("node-navigator");
// const navigator = new Navigator();


// d) First we need to get the user's location:
// function getLocation(callback) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         callback(position);
//     });
// }

// // Now we need to get the weather for that location:
// function getWeather(coords, callback) {
//     const apiKey = "ba6e447838d4d8ddfdb3fd2264a2b3ab";
//     const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + 
//     coords.longitude + 
//     '&apiKey=' + apiKey
//     const req = new XMLHttpRequest();
//     req.open('GET', url);
//     req.onload = function () {
//         if (req.status === 200) {
//             callback(JSON.parse(req.responseText));
//         } else {
//             callback(new Error(req.statusText));
//         }
//     };
//     req.send();
// }


// // call the both functions above here
// getLocation(function (coords) {
//     getWeather(coords, function (weather) {
//         console.log(weather);
//     });
// });

// make above code more readable. Bot functions need to return a promise

function getLocation() {
    return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition((position) => {
               // if (err) reject ('location not found')
               console.log(position);
                resolve(position.coords) // why?
            });
    });
}


function getWeather(coords) {
    return new Promise((resolve, reject) => {
      const apiKey = "ba6e447838d4d8ddfdb3fd2264a2b3ab";
      const url =
        "http://api.openweathermap.org/data/2.5/weather?lat=" + coords.latitude + "&lon=" +
        coords.longitude +
        "&apiKey=" +
        apiKey;
      const req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = function () {
        if (req.status === 200) {
          resolve(JSON.parse(req.response)); // why?
        } else {
          reject(new Error(req.statusText));
        }
      };
      req.send();
    });
  }

  
  // f) Now call both functions and log the weather to the console using the .then() and .catch() methods.
//   getLocation()
//   .then((coords) => getWeather(coords))
//   .then((weather) => console.log(weather))
//   .catch((error) => console.error(error));

 // g) Now make the code even more readable by using async/await than the above. 
  async function getWeatherByCoordinates() {
    try {
      const data = await getLocation();
      const weather = await getWeather(data);
      document.getElementById('weather').innerHTML = weather.main.temp;
      console.log(weather);
    } catch (error) {
      console.error(error);
    }
  }
  
  getWeatherByCoordinates();


//   b) Now add the following code to the weather.js file:





















