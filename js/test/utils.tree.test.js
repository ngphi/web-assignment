import { expect }  from 'chai';
import Tree, {Node} from '../src/utils/tree';

describe('Tree class (data structure)', () => {

	const data1 = {
		id: 1,
		firstName : "Hung",
	};

	const data2 = {
		id: 2,
		firstName : "Dai",
		superiorId : 1,
	};

	const data3 = {
		id: 3,
		firstName : "Trung",
		superiorId : 1,
	};

	const data4 = {
		id: 4,
		firstName : "Mai",
		superiorId : 2,
	};

	it('should have a root default is null',() => {
		let tree = new Tree();

		const expectedTree = {
			root : null,
		}

		expect(tree).to.eql(expectedTree);

	});

	it('should have a root which is Node type when adding the first data',() => {

		let tree = new Tree();

		tree.add(data1);

		const result = tree.root instanceof Node;

		expect(result).to.equal(true);

	});

	it('should be able to add multiple children nodes',() => {

		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);
		
		const resultRoot = tree.root;

		let expectedRoot = new Node(data1);

		let node2 = new Node(data2);

		let node3 = new Node(data3);

		let node4 = new Node(data4);

		node2.children = [node4];

		expectedRoot.children = [node2,new Node(data3)];

		expect(resultRoot).to.eql(expectedRoot);

	});

	it('should be able to remove a node and its children',() => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);

		//pass an id of data instead of data itself
		tree.remove(data2.id);

		const resultRoot = tree.root;

		let expectedRoot = new Node(data1);

		let node3 = new Node(data3);

		expectedRoot.children = [node3];

		expect(resultRoot).to.eql(expectedRoot);

	});

	it('should be able to do depth-first search',(done) => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);

		const expectedResult = [
			data1.id,
			data2.id,
			data4.id,
			data3.id,
		];

		let result = [];

		tree.traverseDFS(node => {
			result.push(node.data);
			if(result.length === 4){
				expect(result).to.eql(expectedResult);
				done();
			}
		});
	})

	it('should be able to do breadth-first search', (done) => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);

		const expectedResult = [
			data1.id,
			data2.id,
			data3.id,
			data4.id,
		];

		let result = [];

		tree.traverseBFS(node => {
			result.push(node.data);
			if(result.length === 4){
				expect(result).to.eql(expectedResult);
				done();
			}
		});
	})

	it('should able to find a node',() => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);

		const resultNode = tree.findBFS(data3.id);

		const expectedNode = new Node(data3);

		expect(resultNode).to.eql(expectedNode);
	})

	it('should return null if there is no node found',() => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		const resultNode = tree.findBFS(data3.id);

		expect(resultNode).to.equal(null);
	})

	it('should check if a node is a subnode of another node',() => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);

		const result = tree.isParent(data1.id,data4.id);

		expect(result).to.equal(true);	
	})

	it('should check if a node is not a subnode of another node',() => {
		let tree = new Tree();

		tree.add(data1);

		tree.add(data2,data1.id);

		tree.add(data3,data1.id);

		tree.add(data4,data2.id);

		const result = tree.isParent(data3.id,data4.id);

		expect(result).to.equal(false);
	});

});

