import React from 'react'
import logo from './loader.gif'
import cssModules from 'react-css-modules'
import style from './loading.style.scss'

export const Loading = cssModules(() => (
	<div styleName='loader'>
		<img styleName='loader__logo' src={logo} />
	</div>
),style,{errorWhenNotFound : false});