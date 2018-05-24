/*eslint no-case-declarations: "off"*/
const initState = {
	isOn : false,
	payload: {}, // data for editing or pre-setting data for adding(peer|sub)
};

function editor(state = initState,action){
	switch(action.type){
		case "OPEN_EDITOR" : 	const {payload} = action;
								return Object.assign({},state,{isOn : true,payload});
		case "CLOSE_EDITOR" : 	return Object.assign({},initState);
		default: return state;
	}
}

export default editor;