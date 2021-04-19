import { useContext, useState, useEffect } from "react";
import CityItem from "../components/CityItem";
import Context from "../utils/Context";
import { Button, Modal, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CityCurrent from "../components/CityCurrent";
import { fetchCity } from "../api/api";
import { Ciudad } from "../types/types";

const CityList = () => {
	const [listaCiudades, setListaCiudades] = useState<Ciudad[]>([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentInput, setCurrentInput] = useState("");

	const { cambiarCiudad } = useContext(Context);

	useEffect(() => {
		const savedLista = localStorage.getItem("listaCiudades");
		if (savedLista) {
			setListaCiudades(JSON.parse(savedLista));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("listaCiudades", JSON.stringify(listaCiudades));
	}, [listaCiudades]);

	const eliminarCiudad = (index: number) => {
		setListaCiudades(
			listaCiudades.filter((_: Ciudad, i: number) => i !== index)
		);
	};

	const agregarCiudad = async () => {
		try {
			const response = await fetchCity(currentInput);
			setListaCiudades([...listaCiudades, response.data.data]);
			setCurrentInput("");
			setIsModalVisible(false);
		} catch (e) {
			Modal.warning({
				content: "No se encontro ciudad, intente nuevamente",
			});
		}
	};

	const renderListaCiudades = () =>
		listaCiudades.map((ciudad: Ciudad, i: number) => {
			return (
				<div key={i}>
					<CityItem
						elegirCiudad={cambiarCiudad}
						eliminarCiudad={() => eliminarCiudad(i)}
						ciudad={ciudad}
					/>
				</div>
			);
		});

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<div className="main-header-text">Climapp-ts</div>

			<div className="subtitle grey-color">
				<div>Ubicación actual</div>
			</div>

			<CityCurrent />

			<div className="subtitle grey-color">
				<div>Ciudades guardadas</div>
				<Button
					type="primary"
					style={{ backgroundColor: "#F81F77", border: "0px" }}
					onClick={() => setIsModalVisible(true)}
					shape="circle"
					icon={<PlusOutlined />}
				></Button>
			</div>

			<div>{renderListaCiudades()}</div>

			<Modal
				title="Agregar ciudad"
				visible={isModalVisible}
				okText="Buscar y Agregar"
				cancelText="Cancelar"
				onOk={agregarCiudad}
				onCancel={() => setIsModalVisible(false)}
			>
				<Input
					placeholder="Ingrese una ciudad"
					onChange={(e) => setCurrentInput(e.target.value)}
					value={currentInput}
				/>
			</Modal>
		</div>
	);
};

export default CityList;
