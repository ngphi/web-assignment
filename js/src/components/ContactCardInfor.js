import {createVirtualDOM} from "../utils/virtualDOM";
import {fullName} from "../utils/contactHelper";

const ContactCardInfor = ({contact}) => {

	const {firstName,
			lastName,
			department,
			employeeId} = contact;

	const children = [
		createVirtualDOM("h3",{},fullName(firstName,lastName)),
		createVirtualDOM("span",{className: "department"},department),
		createVirtualDOM("span",{className: "employee-id"},employeeId),
		createVirtualDOM("span",{},"@kms-technology.com"),
	];

	return createVirtualDOM("div",{className: "contact-card--infor"},children);
};

export default ContactCardInfor;