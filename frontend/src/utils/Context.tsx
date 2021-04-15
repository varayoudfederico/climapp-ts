import { createContext } from "react";

const Context = createContext({
	ciudadActual: undefined,
	cambiarCiudad: undefined,
});

export default Context;
