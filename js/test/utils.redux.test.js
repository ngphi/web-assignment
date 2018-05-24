import { expect }  from 'chai';
import redux from '../src/utils/redux';

describe('Redux createStore', () => {

	const initState = 0;

	function reducer(state = initState,action){
		switch(action.type){
			case 'INCREMENT': return state + 1;
			default: return state;
		}
	}

  	const store = redux.createStore(reducer);

    it('should return init state', () => {
      	const expectedState = store.getState();
	    expect(expectedState).to.equal(initState);
    });

    it('should update the state when dispatch an action',() => {
    	const action = {type: "INCREMENT"};
    	store.dispatch(action);
    	const expectedState = store.getState();
    	expect(expectedState).to.equal(1)
    });

    it('should return an object has all reducers',() => {
		function counter(state = 1,action){
			return state;
		}
		function todos(state = {},action){
			return state;
		}
		const reducer = redux.combineReducers({counter,todos});
		const store = redux.createStore(reducer);
		const expectedState = store.getState();
		expect(expectedState).to.eql({
			counter: 1,
			todos: {},
		})
	})

});

