
import React, { useState, useEffect } from 'react';
import { Container, Input, WeatherInfo, Title, City, Temperature } from './Styles/styles';


const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '2b6e864eb0fb60705b9774d8071aca31';

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados da previsão do tempo.');
        }
        const data = await response.json();
        const translatedData = {
          cidade: data.name,
          temperatura: data.main.temp,
        };
        setWeatherData(translatedData);
      } catch (error) {
        console.error(error);
      }
    };

    if (city !== '') {
      fetchWeatherData();
    }
  }, [city, apiKey]);

  return (
    <Container>
      <Title>Previsão do Tempo</Title>
      <Input type="text" value={city} onChange={handleChange} placeholder="Digite o nome da cidade" />
      {weatherData && (
        <WeatherInfo>
          <City>{weatherData.cidade}</City>
          <Temperature>Temperatura: {weatherData.temperatura}°C</Temperature>
        </WeatherInfo>
      )}
    </Container>
  );
};

export default WeatherApp;

