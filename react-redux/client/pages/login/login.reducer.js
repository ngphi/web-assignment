import {LoginAction} from './login.action'
import {LogoutAction} from '../logout/logout.action'
import {StockOrderAction} from 'pages/mainpage/components/stockorder';

const initialState = {
	token : null,
	user : null,
	isAuthenticated : false,
	isAuthenticating : false,
	errorMessage : null,
};

export const auth = (state = initialState,action) => {
	switch(action.type){
		case LoginAction.LOGIN_REQUEST : return Object.assign({},state,{isAuthenticating : true,errorMessage: null});

		case LoginAction.LOGIN_SUCCESS : const {user,token} = action;
										return {
											token,
											user,
											isAuthenticating : false,
											isAuthenticated : true,
											errorMessage : null,
										};
		case LoginAction.LOGIN_FAILURE : return Object.assign({},state,{
											isAuthenticating : false,
											isAuthenticated : false,
											errorMessage : action.message
										});
		case LogoutAction.LOGOUT_REQUEST : return initialState;

		case StockOrderAction.TRANSACTION_SUCCESS : {	const {user} = action.data;
														const updatedUser = Object.assign({},state.user,user);
														return Object.assign({},state,{user : updatedUser});}
   		default : return state;
	}
}

