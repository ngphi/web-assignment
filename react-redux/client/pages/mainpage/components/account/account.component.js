import React from 'react';
import {connect} from 'react-redux';
import {renderWhenAuthenticated} from 'components/AuthenticatedHOCs'
import {AccountView} from './account.view'

const mapStateToProps = (state) => ({
	user : state.auth.user
});

@renderWhenAuthenticated
@connect(mapStateToProps)
export class Account extends React.Component {
	render(){
		return (
			<div>
				<AccountView user={this.props.user} />
			</div>
		)
	}
}