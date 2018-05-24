import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {makeRegisterRequest} from 'core/fetchApi'
import {validateInputs} from 'core/Validator'
import {redirectSubmitted} from 'components/RedirectSubmittedComponent'
import {RegisterView} from './register.view'

export class RegisterComponent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			username : null,
			name : null,
			password : null,
			submitting : false,
			errors : {},
		};
	}

    componentWillReceiveProps(nextProps) {
    	const {errors} = nextProps;
    	if(!isEmpty(errors)){
    		const {param,msg} = errors;
    		this.setState({errors : {[param] : msg},submitting : false});
    	}

    }	

	submitRegister(){
		const {errors,submitting,...registerInputs} = this.state;
		this.props.onSubmit(registerInputs);
	}

	handleOnChange(event){
		const {name,value} = event.target;
		const newState = Object.assign(	{},{[name] : value.trim(),errors : {}});
		this.setState(newState);
	}

	handleOnSubmit(event){
		event.preventDefault();
		const {errors,submitting,...registerInputs} = this.state;
		validateInputs(registerInputs,(err) => {
			if(!isEmpty(err)){
				return this.setState({errors : err});
			}
			this.setState({submitting : true});
			this.submitRegister();	
		});
	}

	render(){
			const {register,submitting,errors} = this.state;
		return (
			<div>
					<RegisterView onSubmit={::this.handleOnSubmit} 
								handleOnChangeInput={::this.handleOnChange} 
								value={register}
								submitting={submitting}
								errors={errors} />
			</div>
		)
	}
}

export const Register = redirectSubmitted('/login',makeRegisterRequest,RegisterComponent);