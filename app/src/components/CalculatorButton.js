function CalculatorButton(props){
	return(
		<>
			<button id={props.id}>
				{props.character}
			</button>
		</>
	);		
}

export default CalculatorButton;