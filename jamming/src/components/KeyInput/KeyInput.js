import React from 'react';

function KeyInput(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type='text' placeholder='Enter your rapidapi spotify Key' value={props.accessKey} onChange={props.onChange} id='searchInput' />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default KeyInput;