import {createVirtualDOM} from "../utils/virtualDOM";

//Components
import ContactInforEditor from "./ContactInforEditor";

const ContactEditor = ({handleOnChange,contact}) => {

	let children = [];

	children.push(createVirtualDOM("img",{src: "/images/" + contact.avatar}));

	children.push(ContactInforEditor({handleOnChange,contact}));

	return createVirtualDOM("div",{className : "contact-card"},children);
};

export default ContactEditor;