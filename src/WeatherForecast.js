import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);


    function handleForscastResponse(response){

        setForecast(response.data);
        setLoaded(true);
        


    }

    if (loaded && props.city === forecast.city.name) {
        return(
            <div className= "WeatherForecast row">
                    <WeatherForecastPreview data={forecast.list[0]}/>
                    <WeatherForecastPreview data={forecast.list[1]}/>
                    <WeatherForecastPreview data={forecast.list[2]}/>
                    <WeatherForecastPreview data={forecast.list[3]}/>
                    <WeatherForecastPreview data={forecast.list[4]}/>
                    <WeatherForecastPreview data={forecast.list[5]}/>         
            </div> 
        );  
    } else {
      let apiKey = "4c7909ce30ce17e58fdee55638bb26ce";
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForscastResponse);
        return props.city;

    }
    
   
}