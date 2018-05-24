import {createStore} from "./utils/redux";
import reducer from "./reducers";
import {convertContactToTree,convertTreeToContact} from "./utils/contactHelper";
import {loadState,saveState} from "./utils/localStorage";
import {loadJSON} from "./utils/requestHelper";
import {fetchContacts} from "./actions/contactsActions";

let preloadedState =  loadState();

if(preloadedState !== undefined){
	preloadedState.contacts = convertContactToTree(preloadedState.contacts);
}else{
	loadJSON("data/contacts.json",(data) => {
		const contacts = convertContactToTree(JSON.parse(data));

		store.dispatch(fetchContacts(contacts));
	});
}

const store = createStore(reducer,preloadedState);

store.subscribe(() => {

	const {contacts,lastAction} = store.getState();

	if(lastAction.type === "CLOSE_EDITOR" ||
		lastAction.type === "REMOVE_CONTACT" ||
		lastAction.type === "CHANGE_SUPERIOR"){

		const contactArr = convertTreeToContact(contacts);

		saveState({
			contacts : contactArr,
		});
	}

});

export default store;

export function connectToStore(component){
	return (args) => {
		return component(args,store);
	};
}