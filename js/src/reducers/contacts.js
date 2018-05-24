import Tree from "../utils/tree";

const initState = new Tree();

/*eslint no-case-declarations: "off"*/

export default function contacts(state = initState,action){
	switch(action.type){
		case "FETCH_CONTACTS": return Object.assign(new Tree(),action.contacts);

		case "ADD_CONTACT" : 	{
								const {newContact} = action;
								state.add(newContact,newContact.superiorId);
								return Object.assign(new Tree(),state);
								}
		case "REMOVE_CONTACT" : {
								state.remove(action.id);
								return Object.assign(new Tree(),state);
								}
		case "EDIT_CONTACT" : 	{
								const {id,updatedContact} = action;
								let contactNode = state.findBFS(id);
								contactNode.content = Object.assign({},contactNode.content,updatedContact);
								return Object.assign(new Tree(),state);
								}
		case "CHANGE_SUPERIOR" : {
								const {id, superiorId} = action;
								if(state.isParent(id,superiorId)){
									return state;
								}
								let contactNode = state.findBFS(id);
								contactNode.content = Object.assign({},contactNode.content,{superiorId});
								state.remove(id);
								state.addNode(contactNode,superiorId);
								return Object.assign(new Tree(),state);
								}
		default : return state;
	}
}
