import moment from "moment";
import "moment/locale/es";

export const getTemperaturaString = (temp: number) => {
	return Math.round(temp) + "°";
};

export const getVientoString = (wind_speed: number) => {
	return Math.round(wind_speed * 3.6) + " km/h";
};

export const getHumedadString = (humidity: number) => {
	return humidity + "%";
};

export const getPresionString = (pressure: number) => {
	return pressure + " hPa";
};

export const getHoraString = (time: number, timeOffset: number) => {
	return moment
		.unix(time + timeOffset)
		.utc()
		.format("HH:mm");
};

export const getFechaString = (date: number) => {
	return moment.unix(date).format("dddd DD");
};
