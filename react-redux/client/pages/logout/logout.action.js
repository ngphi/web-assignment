export const LogoutAction = {
    'LOGOUT_REQUEST' : 'LOGOUT_REQUEST'
}

export const LogoutActionCreator = {
   logout : () => {
	   	return {
	       type : LogoutAction.LOGOUT_REQUEST
	   	}
   }
}
