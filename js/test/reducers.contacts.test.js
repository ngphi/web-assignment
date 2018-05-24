import { expect }  from 'chai';
import contactReducer from '../src/reducers/contacts';
import * as contactsActions from '../src/actions/contactsActions';
import Tree from '../src/utils/tree';

describe('contacts Reducer which controls all contacts', () => {

	it('should edit content of the selected card when editContact action is called',() => {
		let initState = new Tree();

		initState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		initState.add({
			"firstName": "Phong",
			"lastName": "Nguyen",
			"id": 3
		},2);
		initState.add({
			"firstName" : "Trung",
			"id": 4
		},3);

		const action = contactsActions.editContact(3,{
			"firstName": "Nam",
		});

		const currentState = contactReducer(initState,action);

		const expectedState = new Tree();

		expectedState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		expectedState.add({
			"firstName": "Nam",
			"lastName": "Nguyen",
			"id": 3
		},2);
		expectedState.add({
			"firstName" : "Trung",
			"id": 4
		},3);

		expect(currentState).to.eql(expectedState);

	});

	it('should remove the selected card and its subordinates when removeContact action is called',() => {
		let initState = new Tree();

		initState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		initState.add({
			"firstName": "Phong",
			"id": 3
		},2);
		initState.add({
			"firstName" : "Trung",
			"id": 4
		},3);

		const action = contactsActions.removeContact(3);

		const currentState = contactReducer(initState,action);

		const expectedState = new Tree();

		expectedState.add({
		    "firstName": "Hung",
		    "id": 2
		});

		expect(currentState).to.eql(expectedState);

	});

	it('should add new contact when addContact action is called',() => {
		let initState = new Tree();

		initState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		initState.add({
			"firstName": "Phong",
			"id": 3
		},2);
		initState.add({
			"firstName" : "Trung",
			"id": 4
		},3);

		const action = contactsActions.addContact({"firstName" : "Dai","superiorId" : 3});

		const currentState = contactReducer(initState,action);

		let expectedState = new Tree();

		expectedState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		expectedState.add({
			"firstName": "Phong",
			"id": 3
		},2);
		expectedState.add({
			"firstName" : "Trung",
			"id": 4
		},3);

		expectedState.add({
			"firstName": "Dai",
			"id": action.newContact.id, //action generate random id
			"superiorId" : 3,
		},3);

		expect(currentState).to.eql(expectedState)


	});

	it('should change superior of the selected card when changeSuperior action is called',() => {
		let initState = new Tree();

		initState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		initState.add({
			"firstName": "Phong",
			"id": 3,
			"superiorId" : 2,
		},2);
		//id wants to change superior
		initState.add({
			"firstName" : "Trung",
			"id": 4,
			"superiorId" : 3,
		},3);

		initState.add({
			"firstName" : "Yen",
			"id": 6,
			"superiorId" : 4,			
		},4);
		//superior target
		initState.add({
			"firstName": "Dai",
			"id": 5,
			"superiorId" : 2,		
		},2);

		const currentId = 4;
		const targetId = 5;

		const action = contactsActions.changeSuperior(currentId, targetId);

		const currentState = contactReducer(initState,action);

		let expectedState = new Tree();

		expectedState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		expectedState.add({
			"firstName": "Phong",
			"id": 3,
			"superiorId" : 2,
		},2);
		expectedState.add({
			"firstName": "Dai",
			"id": 5,
			"superiorId" : 2,		
		},2);	
		expectedState.add({
			"firstName" : "Trung",
			"id": 4,
			"superiorId" : 5,
		},5);
		expectedState.add({
			"firstName" : "Yen",
			"id": 6,
			"superiorId" : 4,			
		},4);


		expect(currentState).to.eql(expectedState);

	});

	it('should not allow to change superior if the target card is a subordinate of the current card when changeSuperior action is called',() => {
		let initState = new Tree();

		initState.add({
		    "firstName": "Hung",
		    "id": 2
		});
		initState.add({
			"firstName": "Phong",
			"id": 3,
			"superiorId" : 2,
		},2);
		//id wants to change superior
		initState.add({
			"firstName" : "Trung",
			"id": 4,
			"superiorId" : 3,
		},3);

		initState.add({
			"firstName" : "Yen",
			"id": 6,
			"superiorId" : 4,			
		},4);
		//superior target
		initState.add({
			"firstName": "Dai",
			"id": 5,
			"superiorId" : 2,		
		},2);

		const currentId = 2;
		const targetId = 5;

		const action = contactsActions.changeSuperior(currentId, targetId);

		const currentState = contactReducer(initState,action);

		expect(currentState).to.eql(initState);
	});

});

