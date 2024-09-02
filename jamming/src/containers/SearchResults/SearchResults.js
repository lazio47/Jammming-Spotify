import React from "react";
import Song from "../../components/Song/Song";

function SearchResults(props) {
    return (
        <div>
            <h2>Results</h2>
            <ul>
                {
                props.results.map(
                    (result, index) => {
                        return <Song onClick={props.onAdd} 
                        key={result.data.id}  
                        title={result.data.name} 
                        name={result.data.artists.items[0].profile.name} isResult={true}
                        songId={result.data.id}
                        />;
                    }
                )
                }
            </ul>
        </div>
    );
}

export default SearchResults;