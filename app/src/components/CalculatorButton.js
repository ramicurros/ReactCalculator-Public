import { ACTIONS } from "../App";

function CalculatorButton({id, classname, character, dispatch}){


	return(
		<>
			<button id={id} className={ classname } onClick={() =>{dispatch({type: ACTIONS.ADD_NUMBER, payload: { character } })}}>
				{character}
			</button>
		</>
	);		
}

export default CalculatorButton;