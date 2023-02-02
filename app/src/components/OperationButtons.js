
import { ACTIONS } from '../App';

function OperationButton({id, classname, operation, dispatch}) {

	if (operation === '=') {
		return (
			<>
				<button id={id} className={classname} onClick={() => { dispatch({type: ACTIONS.SET_RESULT, payload: { operation } })}}>
					{operation}
				</button>
			</>
		);
	} else {
		return (
			<>
				<button id={id} className={classname} onClick={() => { dispatch({type: ACTIONS.OPERATION, payload: { operation } })}}>
					{operation}
				</button>
			</>
		);
	}
}

export default OperationButton;