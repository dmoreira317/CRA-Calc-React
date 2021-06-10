//RAFCP snippet

import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones.js";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });
  const {
    handleChange,
    multiplicacion,
    division,
    suma,
    resta,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);
  return (
    <>
      <label className="margin mx-2">
        Numero 1:{" "}
        <input
          value={numero1}
          name="numero1" //le paso este nombre para que lo levante en el estado que genero y principalmente para referenciarlo al handlChange
          type="number"
          id=""
          onChange={handleChange}
        />
      </label>
      <label className="margin mx-2">
        Numero 2:{" "}
        <input
          value={numero2}
          name="numero2"
          type="number"
          id=""
          onChange={handleChange}
        />
      </label>
      <Resultado operacion="Suma" calculo={suma()} />
      <Resultado operacion="Division" calculo={division()} />
      <Resultado operacion="Multilpicacion" calculo={multiplicacion()} />
      <Resultado operacion="Resta" calculo={resta()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
