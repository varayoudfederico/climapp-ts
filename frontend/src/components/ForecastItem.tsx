import WeatherIcon from "./WeatherIcon";
import { getFechaString, getTemperaturaString } from "../utils/Utils";
import { Dia } from "../types/types";

interface ForecastItemProps {
	dia: Dia;
}

const ForecastItem = ({ dia }: ForecastItemProps) => {
	const { icon, dt, description, max, min } = dia;
	return (
		<div>
			<div
				className={"card"}
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "12px",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "column",
							marginRight: "12px",
							alignItems: "center",
						}}
					>
						<WeatherIcon iconText={icon} size="16px" color="#7754F8" />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "column",
						}}
					>
						<div>
							<div style={{ textTransform: "capitalize" }}>
								{getFechaString(dt)}
							</div>
							<div style={{ color: "#aaaaaa", textTransform: "capitalize" }}>
								{description}
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<div>
						<div style={{ color: "#000" }}>
							{getTemperaturaString(max)}{" "}
							<span style={{ color: "#aaaaaa", marginLeft: "8px" }}>
								{getTemperaturaString(min)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForecastItem;
