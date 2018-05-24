import { expect }  from 'chai';
import {convertTreeToContact,convertContactToTree} from '../src/utils/contactHelper';
import Tree from '../src/utils/tree';

describe('contactHelper util', () => {

	const array = [
		{
		    "firstName": "Hung",
		    "id": 2
		},{
			"firstName": "Phong",
			"id": 3,
			"superiorId" : 2,
		},{
			"firstName" : "Trung",
			"id": 4,
			"superiorId" : 3,
		}
	];

	let tree = new Tree();

	tree.add({
	    "firstName": "Hung",
	    "id": 2
	});
	tree.add({
		"firstName": "Phong",
		"id": 3,
		"superiorId" : 2,
	},2);
	tree.add({
		"firstName" : "Trung",
		"id": 4,
		"superiorId" : 3,
	},3);

	it('should convert an array to a tree by using convertContactToTree function',() => {

		const result = convertContactToTree(array);

		expect(result).to.eql(tree);

	});

	it('should convert tree to contact array by using convertTreeToContact function',() => {

		const result = convertTreeToContact(tree);

		expect(result).to.eql(array);
	});
});

