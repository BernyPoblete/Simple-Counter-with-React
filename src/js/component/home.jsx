import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//My first component
function SecondsCounter(props) {
	return (
		<div className="bigDiv">
			<div className="sixth">{props.digitSix % 10}</div>
			<div className="fiveth">{props.digitFive % 10}</div>
			<div className="fourth">{props.digitFour % 10}</div>
			<div className="thirth">{props.digitThree % 10}</div>
			<div className="second">{props.digitTwo % 10}</div>
			<div className="first">{props.digitOne % 10}</div>
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
	const six = Math.floor(counter / 100000); //Math.floor(x)   Devuelve el máximo entero menor o igual a un número
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
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
}, 1000); //segundo parametro de setInterval, cada 1 segundo

export default SecondsCounter;
