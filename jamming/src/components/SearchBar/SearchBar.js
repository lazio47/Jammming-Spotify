import React from 'react';

function SearchBar() {
    return (
        <>
            <form>
                <input type='text' id='searchInput' />
                <button type='submit'>Search</button>
            </form>
        </>
    );
}

export default SearchBar;