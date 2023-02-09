import { ACTIONS } from "../App";

function CalculatorButton({ id, classname, character, dispatch }) {
	switch (character) {
		case 'DEL': return (
			<>
				<button id={id} className={classname} onClick={() => { dispatch({ type: ACTIONS.DELETE_NUMBER, payload: { character } }) }}>
					{character}
				</button>
			</>
		);
		case 'AC': return (
			<>
				<button id={id} className={classname} onClick={() => { dispatch({ type: ACTIONS.CLEAR, payload: { character } }) }}>
					{character}
				</button>
			</>
		);
		default: return (
			<>
				<button id={id} className={classname} onClick={() => { dispatch({ type: ACTIONS.ADD_NUMBER, payload: { character } }) }}>
					{character}
				</button>
			</>
		);
	}
}

export default CalculatorButton;