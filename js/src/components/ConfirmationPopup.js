import {createVirtualDOM} from "../utils/virtualDOM";
import {connectToStore} from "../configStore";
import {removeContact} from "../actions/contactsActions";
//components
import Popup from "./Popup";

const ConfirmationPopup = (props,store) => {
	
	function handleNoButton(){
		store.dispatch({type: "CLOSE_CONFIRMATION"});
	}

	function handleYesButton(){
		store.dispatch(removeContact(props.contactId));
		store.dispatch({type: "CLOSE_CONFIRMATION"});
	}

	const children = [
		createVirtualDOM("h1",{},"Are you sure?"),
		createVirtualDOM("button",{onClick : handleYesButton,className: "confirm-btn"},"Yes"),
		createVirtualDOM("button",{onClick : handleNoButton,className: "confirm-btn"},"No"),
	];

	const WrappedPopup = Popup({handleClosePopup : handleNoButton,children});

	return createVirtualDOM("div",{},WrappedPopup);

};

export default connectToStore(ConfirmationPopup);