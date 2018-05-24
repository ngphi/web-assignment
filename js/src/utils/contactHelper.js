import Tree from "./tree";

export const contactTemplate =   {
    "firstName": "",
    "lastName": "",
    "title": "",
    "department": "Management",
    "project": "",
    "avatar": "avatar.png",
    "employeeId": "",
};

export const departments = [
	"Management",
	"IT",
	"Delivery",
	"Technology Services",	
];

export function convertContactToTree(data){
	let tree = new Tree();

	data.forEach(contact => {
		if(tree.root && tree.contains(contact.id)){
			return; //do nothing
		}

		if(contact.superiorId === undefined){
			return tree.add(contact);
		}

		tree.add(contact,contact.superiorId);
	});

	return tree;
}

export function convertTreeToContact(tree){
	let contacts = [];

	tree.traverseDFS(contactNode => {
		contacts.push(contactNode.content);
	});

	return contacts;
}

export function fullName(first,name){
	return first + " " + name;
}

