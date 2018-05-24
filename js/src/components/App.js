import {createVirtualDOM} from "../utils/virtualDOM";
import {connectToStore} from "../configStore";

//components
import CardList from "./CardList";
import PopupEditor from "./PopupEditor";
import ConfirmationPopup from "./ConfirmationPopup";

const App = (props,store) => {

	const {contacts : {root},editor,confirmation} = store.getState();

	if(root === null){
		return createVirtualDOM("h1",{},"Loading...");
	}

	let children = [];

	children.push(createVirtualDOM("ul",{},CardList({contactNode : root})));

	if(editor.isOn){
		children.push(PopupEditor({}));
	}else if(confirmation.isOn){
		children.push(ConfirmationPopup({contactId : confirmation.id}));
	}

	return createVirtualDOM("div",{},children);
};

export default connectToStore(App);
