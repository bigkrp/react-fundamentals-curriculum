import axios from 'axios';

const API_KEY = 'b1ef6fe95960eee806bfee8ae6c5818d';

let getFiveDaysForecast = (cityName) => axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${API_KEY}&cnt=5`)
  // .then((resp)=>{
  //   console.log(resp);
  //   return resp.data;
  // })
  .catch((resp)=>console.warn(resp));

let getCurrentDayForecast = (cityName) => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&type=accurate&APPID=${API_KEY}`)
  .catch((resp)=>console.warn(resp));

export { getFiveDaysForecast, getCurrentDayForecast };
