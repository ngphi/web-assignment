export function openEditor(payload){
	return {
		type: "OPEN_EDITOR",
		payload,
	};
}

export function closeEditor(){
	return {
		type: "CLOSE_EDITOR",
	};
}