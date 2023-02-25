
import { ACTIONS } from '../App';

function OperationButton({idProp, classname, operation, dispatch}) {

	if (operation === '=') {
		return (
			<>
				<button id={idProp} className={classname} onClick={() => { dispatch({type: ACTIONS.SET_RESULT, payload: { operation } })}}>
					{operation}
				</button>
			</>
		);
	} else {
		return (
			<>
				<button id={idProp} className={classname} onClick={() => { dispatch({type: ACTIONS.OPERATION, payload: { operation } })}}>
					{operation}
				</button>
			</>
		);
	}
}

export default OperationButton;