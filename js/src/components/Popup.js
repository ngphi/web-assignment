import {createVirtualDOM} from "../utils/virtualDOM";

const Popup = (props) => {

	const {handleClosePopup,children,style} = props;

	const PopupContent = createVirtualDOM("div",{className: "popup",style},children);

	const extenedChildren = [
		createVirtualDOM("div",{className :"popup-mask",onClick : handleClosePopup}),
		PopupContent,
	];

	return createVirtualDOM("div",{},extenedChildren);
};

export default Popup;