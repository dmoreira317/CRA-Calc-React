import { useState } from "react";
import NumberInput from "./NumberInput";

const Calculadora = () => {
  return (
    <>
      <NumberInput />
    </>
  );
};

export default Calculadora;

//esto es muy repetitivo, se puede hacer como arriba
// const Calculadora = () => {
//   const [suma, setSuma] = useState(0);
//   return (
// <div>
//   <label>
//     Numero1: <input type="text" name="" id="" />
//   </label>
//   <br />
//   <span>Suma: {suma}</span>
//   <br />
//   <span>Suma: {suma}</span>
//   <br />
//   <span>Suma: {suma}</span>
//   <br />
//   <span>Suma: {suma}</span>
// </div>
//   );
// };

// export default Calculadora;
