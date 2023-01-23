import {useState} from 'react';

function OperationButton(props){

	if(props.character === '='){
		props.function(' ');
	} else {
		props.function(props.character);
	}

	return(
		<>
			<button id={props.id} className={props.classname}>
				{props.character}
			</button>
		</>
	);		
}

export default OperationButton;