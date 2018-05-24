import {createVirtualDOM} from "../utils/virtualDOM";

const ResizeInput = (props) => {
	
	function handleOnPress(event){
		const {target} = event;
		target.style.width = calculateWidth(target) + "px";
	}

	const width = calculateWidth(props);

	const style = `width: ${width}px`;

	const extendedProps = Object.assign({},props,{onKeyUp : handleOnPress,style});

	return createVirtualDOM("input",extendedProps);
};

function calculateWidth(target){
	const {value,placeholder} = target;
	const length = (value !== undefined &&
					value.length > 0) ? value.length : placeholder.length;
	return (length + 1) * 8;
}

export default ResizeInput;