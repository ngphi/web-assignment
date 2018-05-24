import { expect }  from 'chai';
import {createVirtualDOM} from '../src/utils/virtualDOM';

describe('VirtualDOM util', () => {
	it('should be able to receive one child',() => {
		const dom = createVirtualDOM('div',{},'Hello');
		const expectedDom = {
			type: 'div',
			props : {},
			children : ['Hello'],
		};
		expect(dom).to.eql(expectedDom);
	});

	it('should be able to receive multiple children',() => {
		const dom1 = createVirtualDOM('h1',{},'Hello');
		const dom2 = createVirtualDOM('h2',{},'World');
		const dom = createVirtualDOM('div',{},[dom1,dom2]);

		const expectedDom1 = {
			type: 'h1',
			props: {},
			children: ['Hello'],
		};

		const expectedDom2 = {
			type: 'h2',
			props: {},
			children: ['World']
		};

		const children = [
			expectedDom1,
			expectedDom2
		];

		const expectedDom = {
			type: 'div',
			props: {},
			children,
		};

		expect(dom).to.eql(expectedDom);
	});

	it('should be able to remove undefined/null child',() => {
		const dom1 = createVirtualDOM('h1',{},'Hello');
		const dom2 = createVirtualDOM('h2',{},'World');
		const dom = createVirtualDOM('div',{},[dom1,undefined,null,dom2]);

		const expectedDom1 = {
			type: 'h1',
			props: {},
			children: ['Hello'],
		};

		const expectedDom2 = {
			type: 'h2',
			props: {},
			children: ['World']
		};

		const children = [
			expectedDom1,
			expectedDom2
		];

		const expectedDom = {
			type: 'div',
			props: {},
			children,
		};

		expect(dom).to.eql(expectedDom);
	})

});

