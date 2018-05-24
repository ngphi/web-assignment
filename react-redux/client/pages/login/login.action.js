import {makeLoginRequest} from 'core/fetchApi'

export const LoginAction = {
    'LOGIN_REQUEST': 'LOGIN_REQUEST',
    'LOGIN_SUCCESS':'LOGIN_SUCCESS',
    'LOGIN_FAILURE':'LOGIN_FAILURE'
};

export const LoginActionCreator = {
    requestLogin: () => ({
        type: LoginAction.LOGIN_REQUEST,
    }),
    receiveLogin: (user,token) => {
        return {
            type: LoginAction.LOGIN_SUCCESS,
            user,
            token
        }
    },
    failLogin: (message) => ({
    	type : LoginAction.LOGIN_FAILURE,
    	message,
    }),
    loginUser: (username,password) => {
        
    	return dispatch => {
    		dispatch(LoginActionCreator.requestLogin());
    		return makeLoginRequest({username,password})
    						.then(data => {
    							if(data.success){
    								dispatch(LoginActionCreator.receiveLogin(data.user,data.token));
    							}else{
    								dispatch(LoginActionCreator.failLogin(data.message));
    							}
    						}).catch(err => {
    							dispatch(LoginActionCreator.failLogin(err));
    						});
    	}
    }
}
