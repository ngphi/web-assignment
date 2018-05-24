export function fetchContacts(contacts){
	return {
		type: "FETCH_CONTACTS",
		contacts,
	};
}

export function addContact(newContact){
	// Using the current timestamp + random number in place of a real id.
	const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	newContact = Object.assign({},newContact,{id});
	return {
		type: "ADD_CONTACT",
		newContact,
	};
}

export function removeContact(id){
	return {
		type: "REMOVE_CONTACT",
		id,
	};
}

export function editContact(id,updatedContact){
	return {
		type: "EDIT_CONTACT",
		id,
		updatedContact,
	};
}

export function changeSuperior(id,superiorId){
	return {
		type: "CHANGE_SUPERIOR",
		id,
		superiorId,
	}
}

