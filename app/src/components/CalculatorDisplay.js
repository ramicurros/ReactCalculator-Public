
function CalculatorDisplay(props){

let calculation = 0

	return(
		<div id='display'>
			<div>{calculation}</div>
			<div>{props.currentInput}</div>						
		</div>
	);		
}

export default CalculatorDisplay;