import React from 'react'
import cssModules from 'react-css-modules'
import style from './login.style.scss'
import {Input} from 'components'
import {Loading} from 'components'

export const LoginView = cssModules(({handleOnSubmit,handleOnChangeInput,errors,isAuthenticating}) => (
	<div styleName='login'>
		<div styleName='login__container'>
			<h1 styleName='login__title'>Login</h1>
			<form className='form-horizontal' onChange={handleOnChangeInput} >
				<Input type="text" name="username" placeholder="Username" errorMsg={errors.username} />
				<Input type="password" name="password" placeholder="Password" errorMsg={errors.password}/>
				<div styleName='login__server-error'>{errors.server}</div>
				<div className='form-group'>
					{isAuthenticating ? <Loading /> : 
										(<button type="button" 
										className='btn btn-primary btn-lg btn-block'
										onClick={handleOnSubmit}>Login</button>)}
				</div>
			</form>
		</div>
	</div>	
),style,{errorWhenNotFound: false});