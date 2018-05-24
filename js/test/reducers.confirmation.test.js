import { expect }  from 'chai';
import confirmation from '../src/reducers/confirmation';

describe('confirmation Reducer which controls open/close confirmation popup', () => {

	it('should be in On state with an attached id when OPEN_CONFIRMATION action is called',() => {
		const initState = {
			isOn : false,
			id : undefined,
		};
		const actionType = {type: 'OPEN_CONFIRMATION',id : 3};
		const currentState = confirmation(initState,actionType);
		const expectedState = {
			isOn : true,
			id : 3,
		}
		expect(currentState).to.eql(expectedState);
	});

	it('should be back to default state when CLOSE_CONFIRMATION action is called',() => {
		const initState = {
			isOn : true,
			id : 3,
		};
		const actionType = {type: 'CLOSE_CONFIRMATION'};
		const currentState = confirmation(initState,actionType);
		const expectedState = {
			isOn : false,
			id : undefined,
		};
		expect(currentState).to.eql(expectedState);

	});

});
