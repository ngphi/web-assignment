import forOwn from 'lodash/forOwn'
import size from 'lodash/size'
import isEmpty from 'lodash/isEmpty'

export function validateInputs(inputs,cb){
	let errors = {};
	forOwn(inputs,(value,key) => {
		if(isEmpty(value)){
			return errors[key] = 'must not be empty';
		}
		if(key === 'password' && !lenBetween(value,6,20)){
			return errors[key] = 'must between 6 to 20 characters';
		}

	});
	cb(errors);
}

function lenBetween(value,min,max){
	return size(value) > min && size(value) < max;
}