export function createStore(reducer,preloadedState){
	let state = preloadedState;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state,action);
		listeners.forEach( l => {
			l();
		});
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};
	//dispatch INIT action when a store is created
	dispatch({type: "INIT"});

	return {getState,dispatch,subscribe};
}

export function combineReducers(reducers){
	return (state = {}, action) => {
		return Object.keys(reducers).reduce(
			(nextState,key) => {
				nextState[key] = reducers[key](state[key],action);
				return nextState;
			}
		,{});
	};
}

export default {
	createStore,
	combineReducers
};

