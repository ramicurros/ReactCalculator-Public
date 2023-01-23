function CalculatorButton(props){
	
	return(
		<>
			<button id={props.id} className={props.classname}>
				{props.character}
			</button>
		</>
	);		
}

export default CalculatorButton;