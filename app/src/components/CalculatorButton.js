function CalculatorButton(props){

	return(
		<>
			<button id={props.id} className={props.classname} onClick={() =>{props.function()}}>
				{props.character}
			</button>
		</>
	);		
}

export default CalculatorButton;