import React, {useEffect} from "react";
import Song from "../../components/Song/Song";
import './Playlists.css';

function Playlists({playlists}) {

    useEffect(() => {
        console.log("Playlists:", playlists);
    }, [playlists]);

    return (
        <>
            <h2>Your Playlists</h2>
            {playlists.map((obj, index) =>
                    (<div key={index} className="playlist-item">
                        <h3>{obj.name}</h3>
                        {
                            obj.playlist.map(
                                (result, index) => (
                                 <Song
                                    key={result.data.id}  
                                    title={result.data.name} 
                                    name={result.data.artists.items[0].profile.name} 
                                    isResult={'playlist'}
                                    songId={result.data.id}
                                    />
                                )
                            )
                        }
                    </div>)
                )
            }
        </>
    );
}

export default Playlists;