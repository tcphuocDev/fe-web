import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = ({ value, changeInput }) => {
	return (
		<div className='searchBar-wrap'>
			<SearchIcon className='searchBar-wrap-icon' />
			<input
				type='text'
				placeholder='Tìm kiếm......'
				value={value}
				onChange={changeInput}
			/>
		</div>
	);
};

export default SearchBar;
