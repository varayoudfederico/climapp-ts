import ForecastItem from "./ForecastItem";
import { Dia } from "../types/types";

interface CityForecastProps {
	forecast: Dia[];
}

const CityForecast = ({ forecast }: CityForecastProps) => {
	const renderListaCiudades = () =>
		forecast.map((dia, i) => {
			return (
				<div key={i}>
					<ForecastItem dia={dia} />
				</div>
			);
		});

	return (
		<div>
			<div className="subheader-city">Próximos 8 días</div>
			<div>{renderListaCiudades()}</div>
		</div>
	);
};

export default CityForecast;
