import axios from "axios";
import { Ciudad } from "../types/types";
// const hostUrl = "http://localhost:5000/v1";
const hostUrl = "https://climappv1.herokuapp.com/v1";

export const fetchLocation = () => {
	const url = hostUrl + `/location`;
	return axios.get(url);
};

export const fetchCity = (ciudad: string) => {
	const url = hostUrl + `/ciudad/${ciudad}`;
	return axios.get(url);
};

export const fetchWeatherByCity = (ciudad: Ciudad) => {
	const url =
		hostUrl + `/current/coordinates?&lat=${ciudad.lat}&lon=${ciudad.lon}`;
	return axios.get(url);
};

export const fetchForecastByCity = (ciudad: Ciudad) => {
	const url =
		hostUrl + `/forecast/coordinates?&lat=${ciudad.lat}&lon=${ciudad.lon}`;
	return axios.get(url);
};
