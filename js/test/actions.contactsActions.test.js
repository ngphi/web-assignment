import { expect }  from 'chai';
import * as contactsActions from '../src/actions/contactsActions';

describe('contacts action creators', () => {
	it('should create action to fetch all contacts',() => {
		const contacts = [{
		    "firstName": "Hung",
		    "id": 2
		  },
		  {
		    "firstName": "Chung",
		    "id": 3
		  }];

		const expectedAction = {
			type: 'FETCH_CONTACTS',
			contacts,
		};

		expect(contactsActions.fetchContacts(contacts)).to.eql(expectedAction);
	});

	it('should create action to add contact',() => {
		let newContact = {
		    "firstName": "Hung",
		};

		const currentAction = contactsActions.addContact(newContact);
		//action generates unique random id
		newContact.id = currentAction.newContact.id;

		const expectedAction = {
			type: 'ADD_CONTACT',
			newContact,
		};

		expect(currentAction).to.eql(expectedAction);

	});

	it('should create action to remove contact',() => {
		const id = 4;

		const expectedAction = {
			type: 'REMOVE_CONTACT',
			id,
		};

		expect(contactsActions.removeContact(id)).to.eql(expectedAction);
	})

	it('should create action to edit contact',() => {
		const updatedContact = {
			firstName : "Hung"
		}
		const id = 2;

		const expectedAction = {
			type: 'EDIT_CONTACT',
			updatedContact,
			id,
		};

		expect(contactsActions.editContact(id,updatedContact)).to.eql(expectedAction);
	})

	it('should create action to change superior',() => {
		const id = 4;
		const superiorId = 5;

		const expectedAction = {
			type: 'CHANGE_SUPERIOR',
			id,
			superiorId,
		};

		expect(contactsActions.changeSuperior(id,superiorId)).to.eql(expectedAction);
	})
});

