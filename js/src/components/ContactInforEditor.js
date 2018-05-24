import {createVirtualDOM} from "../utils/virtualDOM";

//components
import ResizeInput from "./ResizeInput";
import DepartmentDropDown from "./DepartmentDropDown";

const ContactInforEditor = ({handleOnChange,contact}) => {
	let children = [];

	children.push(ResizeInput({	type: "text",
								className: "form-control",
								placeholder:"first name",
								value:contact.firstName,
								name: "firstName",
								onChange: handleOnChange,	
								}));

	children.push(ResizeInput({ type: "text",
								className: "form-control",									
								placeholder:"last name",
								value:contact.lastName,
								name: "lastName",
								onChange: handleOnChange,
								}));

	children.push(DepartmentDropDown({	handleOnChange,
										className: "department-editor",
										currentDepartment:contact.department
									}));

	children.push(ResizeInput({	type: "text",
								className: "account-id-editor",			
								placeholder: "account id",
								value:contact.employeeId,
								name: "employeeId",
								onChange: handleOnChange,
								}));

	children.push(createVirtualDOM("span",{},"@kms-technology.com"));

	return createVirtualDOM("div",{className : "contact-card--infor"},children);

};

export default ContactInforEditor;