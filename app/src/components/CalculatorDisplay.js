
function CalculatorDisplay(props){

let calculation = 0

	return(
		<>
			<div>{calculation}</div>
			<div>{props.currentInput}</div>						
		</>
	);		
}

export default CalculatorDisplay;