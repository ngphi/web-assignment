import {createVirtualDOM} from "../utils/virtualDOM";
import {openEditor} from "../actions/editorActions";
import {changeSuperior} from "../actions/contactsActions";
import {connectToStore} from "../configStore";

//Components
import ControlButtons from "./ControlButtons";
import ContactCardInfor from "./ContactCardInfor";

const ContactCard = ({contact,isNotCollapsed},store) => {

	const {	btnsOpenedId,
			contacts,
			contacts : {root}} = store.getState();

	//Handle Control Buttons
	function deleteContact(){
		return store.dispatch({type : "OPEN_CONFIRMATION", id : contact.id});
	}

	function editContact(){
		return store.dispatch({type: "ASSIGN_EDITABLE_ID",id: contact.id});
	}

	function addPeerContact(){
		const {superiorId,department} = contact;
		return store.dispatch(openEditor({superiorId,department}));
	}

	function addSubContact(){
		const superiorId = contact.id;
		return store.dispatch(openEditor({superiorId}));
	}

	function handleOpenEditor(type){
		switch(type){
			case "edit": return editContact();
			case "addPeer": return addPeerContact();
			case "addSub" : return addSubContact();
			default: return; //do nothing
		}
	}
	//---------------------

	//Handle collapse subs features
	function collapseSubs(){
		store.dispatch({type: "ADD_COLLAPSED_ID",id: contact.id});	
	}

	function expandSubs(){
		store.dispatch({type: "REMOVE_COLLAPSED_ID",id : contact.id});		
	}

	function handleExpandSubs(e){
		//stop contact-card container to catch `click` event
		e.stopPropagation();
		if(isNotCollapsed){
			return collapseSubs();
		}
		return expandSubs();
	}	
	//------------------------------

	function handleOnClick(){
		//remove control buttons when the card is already selected
		const newId =  btnsOpenedId === contact.id ? undefined : contact.id;
		store.dispatch({type: "OPEN_BUTTONS",id: newId});
	}

	function handleDragStart(event){
		const jsonData = JSON.stringify({id : contact.id});

		event.dataTransfer.setData("text",jsonData);
	}

	function handleDropOn(event){
		const jsonData = event.dataTransfer.getData("text");
		const droppedId = JSON.parse(jsonData).id;
		const {id} = contact;
		if(droppedId !== id){
			store.dispatch(changeSuperior(droppedId,id));
		}
		event.dataTransfer.clearData();
	}

	const controlButtons = 	contact.id !== btnsOpenedId ? "" : 
							ControlButtons({handleOpenEditor,
											deleteContact,
											isRoot : (contact.id === root.content.id),
											});

	const children = [
		createVirtualDOM("img",{src: "/images/" + contact.avatar}),
		ContactCardInfor({contact}),
		controlButtons,
		createVirtualDOM("button",
						{className: "toggle-btn",
						onClick : handleExpandSubs},isNotCollapsed ? "-" : "+")
	];

	return createVirtualDOM("a",{}, createVirtualDOM("div",
									{className: "contact-card",
									draggable: true,
									onDragStart: handleDragStart,
									onDrop: handleDropOn,
									onDragOver: (e) => e.preventDefault(),
									onClick : handleOnClick},children));
};

export default connectToStore(ContactCard);
