import React from 'react'
import {withRouter} from 'react-router'

export function redirectSubmitted(path,submitAction,Component){
	class RedirectSubmittedComponent extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				errors : {}
			};
		}

		onSubmit(...args){
			submitAction(...args)
				.then(data => {
					if(data.success){
						const {router} = this.props;
						return router.push(path);
					}
					this.setState({errors : data.error});
				})
		}

		render(){
			return (
				<div>
					<Component {...this.props}
								onSubmit = {::this.onSubmit}
							 	errors={this.state.errors} />
				</div>
			)
		}
	}
	return withRouter(RedirectSubmittedComponent);
}
