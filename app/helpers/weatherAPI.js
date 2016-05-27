import axios from 'axios';

const API_KEY = 'b1ef6fe95960eee806bfee8ae6c5818d';

const getFiveDaysForecast = (cityName) => axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${API_KEY}&cnt=5`)
  .catch((resp)=>console.warn(resp));

const getCurrentDayForecast = (cityName) => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&type=accurate&APPID=${API_KEY}`)
  .catch((resp)=>console.warn(resp));

export { getFiveDaysForecast, getCurrentDayForecast };
