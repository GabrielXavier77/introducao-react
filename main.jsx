import React from "react";
import { createRoot } from "react-dom/client";

//Importando componentes
import {App} from "./App";

// Criação do elemento root
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Renderizando os componentes
root.render(<App/>)