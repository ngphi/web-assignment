import {createVirtualDOM} from "../utils/virtualDOM";
import {closeEditor} from "../actions/editorActions";
import {editContact,addContact} from "../actions/contactsActions";
import {connectToStore} from "../configStore";
import {contactTemplate} from "../utils/contactHelper";
//Components
import ContactEditor from "./ContactEditor";
import Popup from "./Popup";


const PopupEditor = (props,store) => {

	const {editor : {payload}} = store.getState();
	const currentContact = props.contact !== undefined ? props.contact : payload;

	let state = Object.assign({},contactTemplate,currentContact);
	
	//update state when inputs are changed in ContactEditor
	function handleOnChange(event){
		state[event.target.name] = event.target.value;
	}

	function handleCloseEditor(){
		saveContact();
		store.dispatch(closeEditor());
		store.dispatch({type: "ASSIGN_EDITABLE_ID"});
	}

	function saveContact(){
		if(props.isEditing){
			return store.dispatch(editContact(state.id,state));
		}
		return store.dispatch(addContact(state));
	}

	const children = [
		ContactEditor({contact: state,handleOnChange}),
	];

	const extendedProps = Object.assign({},props,
									{handleClosePopup : handleCloseEditor,children});

	const WrappedPopup = Popup(extendedProps);

	return createVirtualDOM("div",{},WrappedPopup);
};

export default connectToStore(PopupEditor);