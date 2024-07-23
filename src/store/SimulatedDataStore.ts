import SimulatedData from "@/Interfaces/ISimulatedData";
import { defineStore } from "pinia";

export const SimulatedDataStore = defineStore("simulatedData", {
    state: () => {
        return {
            simulatedWeatherData: [
                {
                    locationName: 'Ciudad de México',
                    countryName: 'México',
                    temperature: 25,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 30,
                    minTemperature: 20
                },
                {
                    locationName: 'New York',
                    countryName: 'USA',
                    temperature: 15,
                    weatherConditionEs: 'Nublado',
                    weatherConditionEn: 'Cloudy',
                    maxTemperature: 20,
                    minTemperature: 10
                },
                {
                    locationName: 'Tokyo',
                    countryName: 'Japan',
                    temperature: 22,
                    weatherConditionEs: 'Parcialmente nublado',
                    weatherConditionEn: 'Partly cloudy',
                    maxTemperature: 26,
                    minTemperature: 18
                },
                {
                    locationName: 'London',
                    countryName: 'UK',
                    temperature: 12,
                    weatherConditionEs: 'Lluvioso',
                    weatherConditionEn: 'Rainy',
                    maxTemperature: 15,
                    minTemperature: 9
                },
                {
                    locationName: 'Paris',
                    countryName: 'France',
                    temperature: 18,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 22,
                    minTemperature: 14
                },
                {
                    locationName: 'Berlin',
                    countryName: 'Germany',
                    temperature: 8,
                    weatherConditionEs: 'Nublado',
                    weatherConditionEn: 'Cloudy',
                    maxTemperature: 11,
                    minTemperature: 5
                },
                {
                    locationName: 'Sydney',
                    countryName: 'Australia',
                    temperature: 20,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 24,
                    minTemperature: 16
                },
                {
                    locationName: 'Rome',
                    countryName: 'Italy',
                    temperature: 21,
                    weatherConditionEs: 'Despejado',
                    weatherConditionEn: 'Clear',
                    maxTemperature: 25,
                    minTemperature: 17
                },
                {
                    locationName: 'Moscow',
                    countryName: 'Russia',
                    temperature: 5,
                    weatherConditionEs: 'Nublado',
                    weatherConditionEn: 'Cloudy',
                    maxTemperature: 8,
                    minTemperature: 2
                },
                {
                    locationName: 'Toronto',
                    countryName: 'Canada',
                    temperature: 7,
                    weatherConditionEs: 'Lluvioso',
                    weatherConditionEn: 'Rainy',
                    maxTemperature: 10,
                    minTemperature: 4
                },
                {
                    locationName: 'Buenos Aires',
                    countryName: 'Argentina',
                    temperature: 27,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 30,
                    minTemperature: 23
                }
            ],
            simulatedWeatherData2: [
                {
                    locationName: 'Cape Town',
                    countryName: 'South Africa',
                    temperature: 18,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 22,
                    minTemperature: 14
                },
                {
                    locationName: 'Istanbul',
                    countryName: 'Turkey',
                    temperature: 20,
                    weatherConditionEs: 'Parcialmente nublado',
                    weatherConditionEn: 'Partly cloudy',
                    maxTemperature: 24,
                    minTemperature: 16
                },
                {
                    locationName: 'Nairobi',
                    countryName: 'Kenya',
                    temperature: 23,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 27,
                    minTemperature: 19
                },
                {
                    locationName: 'Dubai',
                    countryName: 'United Arab Emirates',
                    temperature: 30,
                    weatherConditionEs: 'Caluroso',
                    weatherConditionEn: 'Hot',
                    maxTemperature: 35,
                    minTemperature: 25
                },
                {
                    locationName: 'Athens',
                    countryName: 'Greece',
                    temperature: 26,
                    weatherConditionEs: 'Despejado',
                    weatherConditionEn: 'Clear',
                    maxTemperature: 30,
                    minTemperature: 22
                },
                {
                    locationName: 'Helsinki',
                    countryName: 'Finland',
                    temperature: 2,
                    weatherConditionEs: 'Nublado',
                    weatherConditionEn: 'Cloudy',
                    maxTemperature: 5,
                    minTemperature: -1
                },
                {
                    locationName: 'Mexico City',
                    countryName: 'Mexico',
                    temperature: 24,
                    weatherConditionEs: 'Lluvioso',
                    weatherConditionEn: 'Rainy',
                    maxTemperature: 28,
                    minTemperature: 20
                },
                {
                    locationName: 'Lisbon',
                    countryName: 'Portugal',
                    temperature: 19,
                    weatherConditionEs: 'Soleado',
                    weatherConditionEn: 'Sunny',
                    maxTemperature: 23,
                    minTemperature: 15
                },
                {
                    locationName: 'Warsaw',
                    countryName: 'Poland',
                    temperature: 8,
                    weatherConditionEs: 'Frío',
                    weatherConditionEn: 'Cold',
                    maxTemperature: 12,
                    minTemperature: 4
                },
                {
                    locationName: 'Auckland',
                    countryName: 'New Zealand',
                    temperature: 21,
                    weatherConditionEs: 'Parcialmente nublado',
                    weatherConditionEn: 'Partly cloudy',
                    maxTemperature: 25,
                    minTemperature: 18
                },
                {
                    locationName: 'Mumbai',
                    countryName: 'India',
                    temperature: 28,
                    weatherConditionEs: 'Caluroso',
                    weatherConditionEn: 'Hot',
                    maxTemperature: 32,
                    minTemperature: 24
                }
            ]
        }
    },
    getters:{
        getSimulatedWeatherData():Array<SimulatedData>{
            return this.simulatedWeatherData;
        },
        getSimulatedWeatherData2():Array<SimulatedData>{
            return this.simulatedWeatherData2;
        }
    },
})