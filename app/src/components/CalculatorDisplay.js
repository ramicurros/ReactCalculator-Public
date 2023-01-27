
function CalculatorDisplay(props){


	return(
		<>
			<div className={props.displayClass}>{props.display}</div>
			<div className={props.inputClass}>{props.currentInput}</div>						
		</>
	);		
}

export default CalculatorDisplay;