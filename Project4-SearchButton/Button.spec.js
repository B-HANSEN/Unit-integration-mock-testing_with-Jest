import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

describe('Button', () => {
	// describe('SearchButton conditional display', () => {
	// 	it('should render when there is a non-empty query', () => {
	// 		const searchButton = shallow(<Button query='some query' />);
	// 		expect(searchButton.html()).toBe(
	// 			'<button class="search-button">Search</button>'
	// 		);
	// 	});
	// 	it('should not render when there is an empty query', () => {
	// 		const searchButton = shallow(<Button query='' />);
	// 		expect(searchButton.html()).toBe(null);
	// 	});
	// 	it('should not render when there is a bunch of empty spaces', () => {
	// 		const searchButton = shallow(<Button query='     ' />);
	// 		expect(searchButton.html()).toBe(null);
	// 	});

	describe('SearchButton behaviour', () => {
		it('should call the onClick handler when button is clicked', () => {
			// given:
			let fakeFunction = sinon.spy();
			const button = shallow(
				<Button
					buttonText='Search'
					//  query='some query'
					handleClick={fakeFunction}
				/>
			);
			// when:
			button.simulate('click');

			// then:
			expect(fakeFunction.called).toBe(true);
		});
	});
});
