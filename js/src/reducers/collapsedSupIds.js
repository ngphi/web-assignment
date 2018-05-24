function collapsedSupIds(state = [],action){
	switch(action.type){
		case "ADD_COLLAPSED_ID" : return [...state,action.id];
		case "REMOVE_COLLAPSED_ID" : return state.filter(id => id !== action.id);
		default: return state;
	}
}

export default collapsedSupIds;