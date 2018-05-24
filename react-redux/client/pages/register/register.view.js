import React from 'react'
import cssModules from 'react-css-modules'
import style from './register.style.scss'
import {Input} from 'components'
import {Loading} from 'components'

export const RegisterView = cssModules(({handleOnChangeInput,onSubmit,errors,submitting}) => {
	return (
		<div styleName='register'>
			<div styleName='register__container'>
				<h1 styleName='register__title'>Register</h1>
				<form className='form-horizontal' onChange={handleOnChangeInput}>
					<Input type='text' placeholder='User name' name='username' errorMsg={errors.username} />
					<Input type='text' placeholder='Name' name='name' errorMsg={errors.name} />
					<Input type='password' placeholder='Password' name='password' errorMsg={errors.password} />
					<div className='form-group'>
						{submitting ? <Loading /> : 
							(<button type='button' 
									className='btn btn-primary btn-lg btn-block'
							 	onClick={onSubmit}>
								Register
							</button>)
						}
					</div>
				</form>
			</div>
		</div> 
	);
},style,{errorWhenNotFound: false});