import React from 'react'
import {connect} from 'react-redux'
import {TopTradersActionCreator} from './toptraders.action'
import {TopTradersView} from './toptraders.view'
import isEqual from 'lodash/isEqual'

const mapStateToProps = (state) => ({
	token : state.auth.token,
	toptraders : state.toptraders
});

const mapStateToDispatch = (dispatch) => ({
	fetchTopTraders : (token) => dispatch(TopTradersActionCreator.fetchTopTraders(token))
});

@connect(mapStateToProps,mapStateToDispatch)
export class Toptraders extends React.Component {

	componentDidMount(){
		//fetch top traders list for every second
		this.toptraderInterval = setInterval(() => this.props.fetchTopTraders(this.props.token), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.toptraderInterval);
	}

	render(){
		return(
			<div>
				<TopTradersView toptraders={this.props.toptraders} />
			</div>
		)
	}
}