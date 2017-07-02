// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true //always parse the address as a string
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

const keys = require('./api_keys.js');

request({
url: `https://api.forecast.io/forecast/${keys.forecastIOKey}/37.8013728,-122.4243798`,
json: true
}, (error, response, body) => {
  console.log(body.currently.temperature);
});
