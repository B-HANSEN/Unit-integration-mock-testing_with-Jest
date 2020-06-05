const SearchButton = ({ query, handleClick }) => {
	// if there is a query in the seach bar, render button:
	// consider to trim empty spaces in the search bar:
	if (query.trim() !== '') {
		return (
			<button onClick={handleClick} className='search-button'>
				Search
			</button>
		);
	}
	// don't show button if there is no query:
	return null;
};

SearchButton.prototypes = {
	query: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};

export default SearchButton;
