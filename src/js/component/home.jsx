import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//My first component
function SecondsCounter(props) {
	//El operador resto (%) devuelve el resto de la división entre dos operandos. Siempre toma el signo del dividendo.
	//en first: digitOne=11 entonces 11 % 10= 1, 12 % 10= 2, 13 % 10= 3... siempre entrega 1 digito (unidad del counter)
	return (
		<div className="bigDiv">
			<div className="icon box">
				<i className="far fa-clock"></i>
			</div>
			<div className="number box">{props.digitSix % 10}</div>
			<div className="number box">{props.digitFive % 10}</div>
			<div className="number box">{props.digitFour % 10}</div>
			<div className="number box">{props.digitThree % 10}</div>
			<div className="number box">{props.digitTwo % 10}</div>
			<div className="number box">{props.digitOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	//validación de props
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

let counter = 0;

setInterval(() => {
	//setInterval() hace que una función se repita con un tiempo de retraso entre cada ejecución.
	//Se pasan dos parámetros a setInterval(): la función que deseo llamar y el tiempo en milisegundos a retrasar cada ejecución de la función.
	//setInterval() continuará ejecutándose hasta que sea borrada. clearInterval().
	const six = Math.floor(counter / 100000);
	//Math.floor(x)   Devuelve el máximo entero menor o igual a un número
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	// counter = 11 entonces 11/10 = 1,1 redondeado a 1
	const one = Math.floor(counter / 1);
	// counter =11  11/1= 11
	counter++;
	console.log("pasando por aquí");
	//probando funcion en consola
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//segundo parametro de setInterval, cada 1 segundo

export default SecondsCounter;
