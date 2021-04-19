export type Ciudad = {
	lat: string;
	lon: string;
	name: string;
	country: string;
};

export type ListaDeCiudades = {
	listaCiudades: Ciudad[];
};

export type AppContext = {
	ciudadActual: Ciudad;
	cambiarCiudad(ciudad: Ciudad): void;
};

export type Weather = {
	temp: number;
	sunrise: number;
	sunset: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	wind_speed: number;
	timezone_offset: number;
	description: string;
	icon: string;
};

export type Dia = {
	dt: number;
	min: number;
	max: number;
	description: string;
	icon: string;
};

export type Forecast = {
	forecast: Array<Dia>;
};

export const emptyCity: Ciudad = {
	lat: "",
	lon: "",
	name: "",
	country: "",
};
