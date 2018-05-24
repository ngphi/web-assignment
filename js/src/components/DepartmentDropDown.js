import {createVirtualDOM} from "../utils/virtualDOM";
import {departments} from "../utils/contactHelper";

const DepartmentDropDown = ({handleOnChange,currentDepartment,className}) => {

	const children = departments.map(depart => {
		return createVirtualDOM("option",{
								value: depart,
								selected : (currentDepartment === depart)
								},depart);
	});

	return createVirtualDOM("select",{	
							name: "department",
							className,
							onChange: handleOnChange
							},children);
};

export default DepartmentDropDown;