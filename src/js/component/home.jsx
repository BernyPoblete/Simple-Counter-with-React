import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//create your first component
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
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

let counter = 0;

setInterval(() => {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
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

export default SecondsCounter;
