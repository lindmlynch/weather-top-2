"use strict";
const conversions = require('../utils/conversions');


const stationAnalytics = {

  getLastReading(station) {
    let lastReading = null;
    if (station.readings.length > 0) {
      lastReading = station.readings[station.readings.length -1];
      station.code = lastReading.code;
      station.weather = conversions.currentWeather(lastReading.code);
      station.icon = conversions.weatherIcon(lastReading.code)
      station.temperature = lastReading.temperature;
      station.tempF = conversions.tempF(lastReading.temperature);
      station.windSpeed = lastReading.windSpeed;
      station.wind = conversions.beafourt(lastReading.windSpeed);
      station.windCompass = conversions.degreesToCompass(lastReading.windDirection);
      station.windChill = conversions.getWindChill(lastReading.temperature, lastReading.windSpeed).toFixed(2);
      station.pressure = lastReading.pressure;
  }
  },
  
   getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minTemp.temperature) {
          minTemp = station.readings[i];
        }
      }
    }
    return minTemp;
  },
  
   getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maxTemp.temperature) {
          maxTemp = station.readings[i];
        }
      }
    }
    return maxTemp;
  },
  
  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if (station.readings.length > 0) {
      minWindSpeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed < minWindSpeed.windSpeed) {
          minWindSpeed = station.readings[i];
        }
      }
    }
    return minWindSpeed;
  },
  getMaxWindSpeed(station) {
    let maxWindSpeed = null;
    if (station.readings.length > 0) {
      maxWindSpeed = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed > maxWindSpeed.windSpeed) {
          maxWindSpeed = station.readings[i];
        }
      }
    }
    return maxWindSpeed;
  },
  
  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0) {
      minPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure < minPressure.pressure) {
          minPressure = station.readings[i];
        }
      }
    }
    return minPressure;
  },
  
   getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maxPressure.pressure) {
          maxPressure = station.readings[i];
        }
      }
    }
    return maxPressure;
  } 
};


module.exports = stationAnalytics;
