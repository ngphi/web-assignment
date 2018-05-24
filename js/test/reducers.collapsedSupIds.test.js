import { expect }  from 'chai';
import collapsedSupIds from '../src/reducers/collapsedSupIds';

describe('collapsedSupIds Reducer which controls collapsed/expanded subordinates', () => {

	it('should add the id of superior card which does not want to show its subordinates when ADD_COLLAPSED_ID is called',() => {
		const initState = [1];
		const id = 4;
		const actionType = {type : 'ADD_COLLAPSED_ID',id};
		const currentState = collapsedSupIds(initState,actionType);
		const expectedState = [1,4];
		expect(currentState).to.eql(expectedState);
	});

	it('should remove the id of superior card which want to show its subordinates when REMOVE_COLLAPSED_ID is called',() => {
		const initState = [1,2,3];
		const removedId = 2;
		const actionType = {type : 'REMOVE_COLLAPSED_ID',id : removedId};
		const currentState = collapsedSupIds(initState,actionType);
		const expectedState = [1,3];
		expect(currentState).to.eql(expectedState);
	});
});

