function editableId(state, action){
	switch(action.type){
		case "ASSIGN_EDITABLE_ID" : return action.id;
		default: return state;
	}
}

export default editableId;