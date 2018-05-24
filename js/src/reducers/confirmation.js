const initState = {
	isOn : false,
	id : undefined,
};

function confirmation(state = initState,action){
	switch(action.type){
		case "OPEN_CONFIRMATION" : return Object.assign({},{isOn : true,id : action.id});
		case "CLOSE_CONFIRMATION" : return initState;
		default : return state;
	}
}

export default confirmation;