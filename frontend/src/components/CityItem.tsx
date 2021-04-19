import { Button, Popconfirm } from "antd";
import { DeleteOutlined, GlobalOutlined } from "@ant-design/icons";
import { Ciudad } from "../types/types";

interface CityItemProps {
	ciudad: Ciudad;
	elegirCiudad: (ciudad: Ciudad) => void;
	eliminarCiudad: () => void;
}

const CityItem = ({ ciudad, elegirCiudad, eliminarCiudad }: CityItemProps) => {
	return (
		<div className="city-item-card" onClick={() => elegirCiudad(ciudad)}>
			<div>
				<span className="city-item-icon">
					<GlobalOutlined />
				</span>
				<span style={{ marginLeft: "8px" }}>
					<span>{ciudad.name}</span>
					<span style={{ color: "#aaaaaa", paddingLeft: "4px" }}>
						{ciudad.country}
					</span>
				</span>
			</div>

			<Popconfirm
				title="Seguro desea eliminar?"
				onConfirm={(e) => {
					// e.stopPropagation();
					eliminarCiudad();
				}}
				onCancel={(e) => {
					// e.stopPropagation();
				}}
				okText="Si"
				cancelText="No"
			>
				<Button
					type="dashed"
					onClick={(e) => {
						e.stopPropagation();
					}}
					icon={<DeleteOutlined />}
					shape="circle"
				/>
			</Popconfirm>
		</div>
	);
};

export default CityItem;
