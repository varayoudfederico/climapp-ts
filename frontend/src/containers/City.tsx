import { useContext } from "react";
import Context from "../utils/Context";
import CityDetalles from "../components/CityDetalles";
import CityForecast from "../components/CityForecast";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Weather, Dia, emptyCity } from "../types/types";

interface CityProps {
	weather?: Weather;
	forecast?: Dia[];
}

const City = ({ weather, forecast }: CityProps) => {
	const { cambiarCiudad } = useContext(Context);

	

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<Button
				onClick={() => cambiarCiudad(emptyCity)}
				shape="circle"
				icon={<ArrowLeftOutlined />}
			></Button>
			{weather && <CityDetalles weather={weather} />}
			{forecast && <CityForecast forecast={forecast} />}
		</div>
	);
};

export default City;
