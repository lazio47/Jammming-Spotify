import React from "react";
import Song from "../../components/Song/Song";

function PlaylistSongs(props) {
    return (
        <div id="playlistSong">
            <input value={props.theValue} placeholder="Playlist Name" onChange={props.onChange} type="text" id="playlistName" />
            <ul>
                {
                    props.addedSongs.map(
                        (result, index) => {
                            return <Song onClick={props.onRemove} 
                            key={result.data.id}  
                            title={result.data.name} 
                            name={result.data.artists.items[0].profile.name} isResult={false}
                            songId={result.data.id}
                            />;
                        }
                    )
                }
            </ul>
            <button onClick={props.onAddPlaylist}>Add Playlist</button>
        </div>
    );
}

export default PlaylistSongs;