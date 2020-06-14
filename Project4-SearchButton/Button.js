// const SearchButton = ({ query, handleClick }) => {
// 	// if there is a query in the seach bar, render button:
// 	// consider to trim empty spaces in the search bar:
// 	if (query.trim() !== '') {
// 		return (
// 			<button onClick={handleClick} className='search-button'>
// 				Search
// 			</button>
// 		);
// 	}
// 	// don't show button if there is no query:
// 	return null;
// };

// SearchButton.prototypes = {
// 	query: PropTypes.string,
// 	handleClick: PropTypes.func.isRequired,
// };

// export default SearchButton;

// alternative: more generic test case:
const Button = ({ buttonText, classNames, handleClick }) => {
	return (
		<button onClick={handleClick} className={classNames}>
			{buttonText}
		</button>
	);
};

Button.prototypes = {
	buttonText: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	classNames: PropTypes.string,
};

export default Button;
