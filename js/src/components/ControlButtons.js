import {createVirtualDOM} from "../utils/virtualDOM";

const ControlButtons = ({deleteContact,handleOpenEditor,isRoot = false}) => {

	let children = [];

	children.push(createVirtualDOM("button",{
									onClick : () => handleOpenEditor("edit")
									},"Edit"));

	children.push((isRoot ? "" :    createVirtualDOM("button",{
									onClick : () => handleOpenEditor("addPeer")
									},"Peer")));

	children.push(createVirtualDOM("button",{
									onClick : () => handleOpenEditor("addSub")
									},"Sub"));

	children.push((isRoot ? "" : 	createVirtualDOM("button",{
									onClick : deleteContact
									},"Delete")));

	return createVirtualDOM("div",{className: "contact-btns"},children);
};

export default ControlButtons;