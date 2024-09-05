import React from 'react';

function SearchBar(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type='text' placeholder='Enter a song/artist' value={props.searchWord} onChange={props.onChange} id='searchInput' />
                <button type='submit'>Search</button>
            </form>
        </>
    );
}

export default SearchBar;