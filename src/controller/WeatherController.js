import WeatherService from "../model/WeatherService"
import CreateItemController from "./CreateItemController";

export default class WeatherController{
    constructor(CreateItemController){
        this.WeatherService = new WeatherService();
        this.CreateItemController = CreateItemController;
        let status = 0;
        let temp = 0;
    }

    async updateWeather(city){
        if(city != "default"){
            let apiKey = "77d695be0386ee185a82c8eaa5a96b78"
            let data = await this.WeatherService.getWeatherFromLocations(city, apiKey);
            let img;
            let status;
            let temp = data.main.temp;
            switch(data.weather[0].main){
                case "Clear":
                    status = "0";
                    img = "../src/assest/clear.jpg";
                    break;
                case "Clouds":
                    status = "0.25";
                    img = "../src/assest/clouds.jpg";
                    break;
                case "Rain":
                case "Drizzle":
                case "Mist":
                    status = "0.50";
                    img = "../src/assest/rain.jpg";
                    break;
                case "Thunderstorm":
                    status = "0.75";
                    img = "../src/assest/storm.jpg";
                    break;
                case "Snow":
                    status = "1"
                    img = "../src/assest/snow.jpg";
                    break;
            }
            this.setWeatherTemp(temp);
            this.setWeatherStatus(status);
            this.CreateItemController.updateWeatherInfo(img, temp);
        }
        else{
            let status = "0";
            let img = "../src/assest/default.jpg";
            let temp ="";
            this.setWeatherTemp(temp);
            this.setWeatherStatus(status);
            this.CreateItemController.updateWeatherInfo(img, temp);
        }      
    }

    setWeatherTemp(temp){
        this.temp = Math.floor(temp);
        console.log("temp verandering" + this.temp);
    }

    getWeatherTemp(){
        return this.temp;
    }
    setWeatherStatus(status){
        this.status = status;
        console.log("status verandering" + this.status);
    }

    getWeatherStatus(){
        return this.status;
    }
}