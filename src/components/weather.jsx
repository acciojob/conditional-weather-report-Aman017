// WeatherDisplay.js
import React from 'react';
import { Typography } from '@mui/material';

function Weather({ weather }) {
  const { temperature, conditions } = weather;

  // Conditional inline style for temperature color
  const tempStyle = {
    color: temperature > 20 ? 'red' : 'blue'
  };

  return (
    <>
      <p>
        Temperature: <span style={tempStyle}>{temperature}°C</span>
      </p>
      <p>Conditions: {conditions}</p>
    </>
  );
}

export default Weather;
