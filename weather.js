let updateWidget = function(data) {

  console.log("Got weather data: ", data);
  // YOUR CODE GOES HERE

  // Part 1 code
  // jQuery(".card-text").text("It is " + data.main.temp.toFixed(0) + " degrees outside.")
  // let pic = data.weather[0].icon
  // jQuery("img").attr("src","http://openweathermap.org/img/w/" + pic + ".png")

  jQuery(".card-text").text("It is " + data.main.temp.toFixed(0) + " degrees outside.")
  let pic = data.weather[0].icon
  jQuery("img").attr("src","http://openweathermap.org/img/w/" + pic + ".png")
  jQuery(".card-title").text(data.name)

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

};
let getPosition = function(event){
  console.log("Starting getPosition...")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
  console.log("Ending getPosition...")
};


let getWeather = function(info) {
  console.log(info)
  window.myinfo = info
  // Part 1 code
  // let getWeather = function(event) {
  // let latitude = '48.8566';
  // let longitude = '2.3522';

  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = '2c4d7f4c417c76345db7ee07efdfd3d7'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

};


jQuery("#get_forecast").on("click",getPosition)

// test again

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
