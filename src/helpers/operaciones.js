export const operaciones = (numeros, setNumeros) => {
  const { numero1, numero2 } = numeros;
  const handleChange = (e) => {
    setNumeros({
      ...numeros, //con esto genero una copia del array, y entone mantiene su valor, porque esta funcion solo cambia cuando hay evento onChange.
      [e.target.name]: parseFloat(e.target.value),
    });
  };
  const suma = () => numero1 + numero2;
  const resta = () => numero1 - numero2;
  const division = () => numero1 / numero2;
  const multiplicacion = () => numero1 * numero2;

  return {
    handleChange,
    suma,
    resta,
    multiplicacion,
    division,
    numero1,
    numero2,
  };
};
