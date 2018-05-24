import React from 'react'
import {connect} from 'react-redux'

import {LogoutActionCreator} from './logout.action'

const MapStateToProps = (state) => ({});

const MapDispatchToProps = (dispatch) => ({
	logout : () => dispatch(LogoutActionCreator.logout())
});

@connect(MapStateToProps,MapDispatchToProps)
export class Logout extends React.Component {

	componentDidMount() {
    	this.props.logout();
  	}

	render(){
		return(
			<div>
				You are now logged out
			</div>
		)
	}
}