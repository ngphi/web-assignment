import React from 'react'
import {Modal} from 'react-bootstrap'
import {Input} from 'components'
import isEmpty from 'lodash/isEmpty'

export class OrderForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			quantity : 0,
			errors : {},
			ordered : false,
		}
	}

	componentWillReceiveProps(nextProps){
		const {stockorder,type} = nextProps;
		if(stockorder.ordered){
			return this.closeModal();
		}

		const {error} = stockorder;
		if(isEmpty(error)){
			return this.setState({errors : {}});
		}
		const errors = {[error.param] : error.msg};
		this.setState({errors : errors});
	}

	componentWillUnmount(){
		this.closeModal();
	}

	handleQuantityChange(event){
		const {value} = event.target;
		const quantityInt = parseInt(value);
		if(!isNaN(quantityInt)){
			this.setState({quantity : parseInt(event.target.value),errors : {}});
		}else if(value.trim() === ''){
			this.setState({quantity : 0});
		}
	}

	handleSubmitOrder(event){
		event.stopPropagation();
		const {quantity} = this.state;
		if(quantity === 0){
			return this.setState({errors : {quantity : 'should be greater than zero'}});
		}
		this.props.submitOrder(quantity);
	}

	closeModal(){
		this.props.closeOrderForm();
		this.setState({quantity : 0,errors : {},ordered: false});
	}

	render(){
		const {type,symbol} = this.props;
		const {errors,quantity,ordered} = this.state;
		return 	<Modal show={type !== null} onHide={::this.closeModal}>
					<Modal.Header>
			        	<Modal.Title><p className='text-uppercase'>{type}</p></Modal.Title>
			      	</Modal.Header>
			      	<Modal.Body>
			      		<div style={{padding : 15}}>
							<form className='form-horizontal'>
								<Input type='text'
											value={symbol}
											label='Symbol'
											errorMsg={errors.code}
											disabled={true} />
								<Input type='text'
									name='quantity'
									value={quantity}
									errorMsg ={errors.quantity}
									label='Quantity'
									onChange={::this.handleQuantityChange} />			      		
							</form>
						</div>
			      	</Modal.Body>
			      	<Modal.Footer>
						<button className={'btn ' + (type === 'buy' ? 'btn-info' : 'btn-warning')} 
								onClick={::this.handleSubmitOrder}>
								{type}
						</button>
			      	</Modal.Footer>

				</Modal>
	}
}