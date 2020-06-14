import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme'; // as button is a child of the search bar; not testing in isolation but in context of search bar
import SearchBar from './SearchBar';

describe('SearchBar', () => {
	describe('Search Button conditional display', () => {
		it('should render when there is a non-empty query', () => {
			const fn = () => {}; // fake function required for parameters of component
			const searchBar = mount(
				<SearchBar
					handleKeyDown={fn}
					handleValueChange={fn}
					handleSearch={fn}
					query='some text'
				/>
			);
			const searchButton = searchBar.find('.search-button');
			expect(searchButton.html()).toBe(
				'<button class="search-button">Search</button>'
			);
		});

		it('should not render when there is an empty query', () => {
			const fn = () => {}; // fake function required for parameters of component
			const searchBar = mount(
				<SearchBar
					handleKeyDown={fn}
					handleValueChange={fn}
					handleSearch={fn}
					query=''
				/>
			);
			const searchButton = searchBar.find('.search-button');
			expect(searchButton.exists()).toBe(false); // expect to not exist
		});
	});
});
