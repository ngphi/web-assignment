import {combineReducers} from "../utils/redux";
//reducers
import contacts from "./contacts";
import editor from "./editor";
import collapsedSupIds from "./collapsedSupIds";
import editableId from "./editableId";
import confirmation from "./confirmation";

function lastAction(state = undefined,action){
	return action;
}

function btnsOpenedId(state = undefined,action){
	switch(action.type){
		case "OPEN_BUTTONS" : return action.id;
		default: return state;
	}
}

export default combineReducers({
	contacts,
	editor,
	editableId,
	collapsedSupIds,
	lastAction,
	confirmation,
	btnsOpenedId,
});