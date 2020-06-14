import React from 'react';
import SearchButton from './Button';

const SearchBar = ({
	handleKeyDown,
	handleValueChange,
	handleSearch,
	query,
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
				{query.trim() !== '' ? (
					<SearchButton
						buttonText='Search'
						classNames='search-button'
						handleClick={handleSearch}
						// query={query}
					/>
				) : null}
			</div>
		</div>
	);
};

export default SearchBar;
