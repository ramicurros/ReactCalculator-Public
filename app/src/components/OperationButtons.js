import { useState } from 'react';

function OperationButton(props) {



	if (props.character === '=') {
		return (
			<>
				<button id={props.id} className={props.classname} onClick={() => { props.function()}}>
					{props.character}
				</button>
			</>
		);
	} else {
		return (
			<>
				<button id={props.id} className={props.classname} onClick={() => { props.function()}}>
					{props.character}
				</button>
			</>
		);
	}
}

export default OperationButton;