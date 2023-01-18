function OperationButton(props){
	return(
		<>
			<button id={props.id} className={props.classname}>
				{props.character}
			</button>
		</>
	);		
}

export default OperationButton;