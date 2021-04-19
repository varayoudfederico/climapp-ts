import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Context from "../utils/Context";
import City from "./City";
import CityList from "./CityList";
import { fetchWeatherByCity, fetchForecastByCity } from "../api/api";
import { message } from "antd";
import { Ciudad, emptyCity } from "../types/types";
import "../styles/css/app.css";
import "../styles/css/weather-icons.css";

const App = () => {
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();
	const [ciudadActual, setCiudadActual] = useState<Ciudad>(emptyCity);
	const [isLoading, setIsLoading] = useState(false);

	let history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const weatherResponse = await fetchWeatherByCity(ciudadActual!);
				const forecastResponse = await fetchForecastByCity(ciudadActual!);

				setWeather(weatherResponse.data.data);
				setForecast(forecastResponse.data.data);
				setIsLoading(false);
			} catch (e) {
				setCiudadActual(emptyCity);
				message.error("No se pudieron obtener datos del clima");
				setIsLoading(false);
			}
		};

		if (ciudadActual.name) {
			setIsLoading(true);
			fetchData();
		}
	}, [ciudadActual]);

	useEffect(() => {
		if (isLoading) {
			message.loading({
				key: "loading",
				content: `Buscando tiempo en ${ciudadActual.name}, ${ciudadActual.country}`,
				duration: 0,
			});
		} else {
			message.destroy("loading");
		}
	}, [isLoading, ciudadActual]);

	useEffect(() => {
		if (ciudadActual && weather && forecast) {
			history.push("/city");
		} else {
			history.push("/");
		}
	}, [ciudadActual, weather, forecast, history]);

	const cambiarCiudad = (ciudad: Ciudad) => {
		if (!isLoading) {
			setWeather(undefined);
			setForecast(undefined);
			setCiudadActual(ciudad);
		}
	};

	return (
		<div className="app">
			<Context.Provider
				value={{
					ciudadActual,
					cambiarCiudad,
				}}
			>
				<Switch>
					<Route path="/city">
						<City weather={weather} forecast={forecast} />
					</Route>
					<Route path="/">
						<CityList />
					</Route>
				</Switch>
			</Context.Provider>
		</div>
	);
};

export default App;
