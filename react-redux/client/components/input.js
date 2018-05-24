import React from 'react'

export const Input = ({errorMsg,label,...others}) => {

	const error = errorMsg !== undefined ? <p>{others.placeholder} {errorMsg}</p> : null;
	const labelElem = label !== undefined ? <label>{label} : </label> : null;
	return (<div className="form-group">
			{labelElem}
			<input className="form-control" {...others} />
			{error}
	</div>);
	
};
