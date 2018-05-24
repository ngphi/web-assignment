import { expect }  from 'chai';
import * as editorActions from '../src/actions/editorActions';

describe('editor action creators', () => {
	it('should create action to open editor',() => {
		const payload = {
			superiorId : 3,
		};

		const expectedAction = {
			type: 'OPEN_EDITOR',
			payload,
		};

		expect(editorActions.openEditor(payload)).to.eql(expectedAction);
	})

	it('should create action to close editor',() => {
		const expectedAction = {
			type: 'CLOSE_EDITOR',
		};

		expect(editorActions.closeEditor()).to.eql(expectedAction);
	})
});

