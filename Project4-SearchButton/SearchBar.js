import React from 'react';
import SearchButton from './SearchButton';

const SearchBar = ({
	handleKeyDown,
	handleValueChange,
	handleSearch,
	query,
	placeholder,
}) => {
	return (
		<div>
			<div>
				<input
					className='search-bar-input'
					type='text'
					value={query}
					placeholder='Search...'
					onChange={handleValueChange}
					onKeyDown={handleKeyDown}
				/>
				<SearchButton query={query} />
			</div>
		</div>
	);
};

export default SearchBar;
