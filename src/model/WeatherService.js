export default class WeatherService{
    constructor(){
    }
    async getWeatherFromLocations(city, apiKey){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`); 
        return response.json();
    }
}