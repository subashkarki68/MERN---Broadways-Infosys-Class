import { Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { LatLng, Icon } from "leaflet";
import axios from "axios";
import L from "leaflet";

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

function WeatherApp() {
  const weatherAPI = import.meta.env.VITE_WEATHER_API_KEY;
  // const weatherAPI = "b1b15e88fa797225412429c1c50c122a1";
  const [position, setPosition] = useState<LatLng>();
  const [bbox, setBbox] = useState<String[]>();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const weatherIcon = weatherData
    ? new Icon({
        iconUrl: `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`,
        iconSize: [75, 75],
      })
    : new Icon({
        //FallbackIcon
        iconUrl: "https://img.icons8.com/ios/50/region-code.png",
        iconSize: [50, 50],
      });

  const map = useMap();

  const clickMap = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      setBbox(e.bounds.toBBoxString().split(""));
    });
  }, [map]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (position) {
          const { data } = await axios(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position?.lat}&lon=${position?.lng}&appid=${weatherAPI}`
          );
          setWeatherData(data);
          console.log(weatherData);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [position, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        icon={weatherIcon}
        position={[position?.lat || 0, position?.lng || 0]}
      >
        <Popup>
          <h2 className='text-xl'>Weather Info:</h2>
          <div>
            for <h2 className='text-sm font-bold'>{weatherData?.name}</h2>
          </div>
          <br />
          {weatherData && (
            <>
              <h3 className='text-lg'>{weatherData.weather[0].main}</h3>
              <b>Description: </b>
              <span>{weatherData.weather[0].description}</span>
              <br />
              <b>Visibility: </b>
              <span>{weatherData.visibility}</span>
              <br />
              <b>Temp: </b>
              <span>{Math.ceil(weatherData.main.temp - 273.15)} &#8451;</span>
              <br />
            </>
          )}
        </Popup>
      </Marker>
    </>
  );
}

export default WeatherApp;
