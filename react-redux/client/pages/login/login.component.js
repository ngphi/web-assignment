import React from 'react'
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty';
import forOwn from 'lodash/forOwn'
import {validateInputs} from 'core/Validator'
import {LoginActionCreator} from './login.action'

import {LoginView} from './login.view'

const mapStateToProps = (state) => ({
	loginErrorMsg : state.auth.errorMessage,
	isAuthenticating : state.auth.isAuthenticating
});

const mapDispatchToProps = (dispatch) => ({
	loginUser : (username,password) => dispatch(LoginActionCreator.loginUser(username,password))
})

@connect(mapStateToProps,mapDispatchToProps)
export class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username : null,
			password : null,
			errors : {},
		}
	}

	componentWillReceiveProps(nextProps) {
    	const {loginErrorMsg} = nextProps;
    	if(!isEmpty(loginErrorMsg)){
    		this.setState({errors : {'server' : loginErrorMsg}});
    	}

    }	

	submitCredentials(){
		const {username,password} = this.state;
		this.props.loginUser(username,password);

	}

	handleOnSubmit(event){
		event.preventDefault();
		const {errors,...credentials} = this.state;
		validateInputs(credentials,(err) => {
			if(!isEmpty(err)){
				return this.setState({errors : err});
			}
			this.submitCredentials();	
		});		
	}

	handleOnChangeInput(event){
		const {name,value} = event.target;
		const newState = Object.assign({},this.state,{[name] : value.trim(),errors : {}});
		return this.setState(newState);
	}

	render(){
		const {errors} = this.state;
		return (
			<div>
				<LoginView 
					handleOnSubmit={::this.handleOnSubmit}
					handleOnChangeInput={::this.handleOnChangeInput}
					errors={errors}
					isAuthenticating={this.props.isAuthenticating}/>
			</div>
		)
	}
}