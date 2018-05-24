import { expect }  from 'chai';
import editor from '../src/reducers/editor';
import * as editorActions from '../src/actions/editorActions';

describe('editor Reducer controls open/close editor popup which add new peer/subordinate', () => {
	it('should in On state with pre-defined new contact when openning editor action is called',() => {
		const initState = {
			isOn : false,
			payload : {},
		};
		//pre-defined superior id which decides adding peer/subordinate contact
		const newContact = {
			superiorId : 2,
		};
		const actionType = editorActions.openEditor(newContact);
		const currentState = editor(initState,actionType);
		const expectedState = {
			isOn : true,
			payload : {
				superiorId : 2,
			}
		};

		expect(currentState).to.eql(expectedState);

	});

	it('should be back to initial state when closing editor action is called',() => {
		const initState = {
			isOn : true,
			payload : {
				superiorId : 2,
			}
		};
		const actionType = editorActions.closeEditor();
		const currentState = editor(initState,actionType);
		const expectedState = {
			isOn : false,
			payload : {},
		};

		expect(currentState).to.eql(expectedState);
	});
});
