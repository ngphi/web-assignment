import {fetchJsonApi} from 'core/fetchApi'

export const API_ACTION = Symbol('API Action');

export const apiMiddleware = store => next => action => {
	const apiAction = action[API_ACTION];

	if(typeof apiAction === 'undefined'){
		return next(action);
	}

	let {endpoint,types,token,options} = apiAction;

	const [requestType, successType, errorType ] = types;

	next({type : requestType});

	return fetchJsonApi(endpoint,token,options)
					.then(data => {
						if(data.success === false){
							throw data.error;
						}
						next({
							data,
							token,
							type : successType,
						})
					}).catch(error => next({
						error : error || 'Fetch api has an error',
						type : errorType,
					}))

}
