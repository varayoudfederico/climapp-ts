import { createContext } from "react";
import { AppContext, emptyCity } from "../types/types";

const Context = createContext<AppContext>({
	ciudadActual: emptyCity,
	cambiarCiudad: () => {},
});

export default Context;
