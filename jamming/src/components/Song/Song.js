import React from "react";

function Song() {
    return (
        <li>
            <div className="songInfo">
                <div className="songTitle"></div>
                <div className="songArtists"></div>
            </div>
            <div className="clickSong">*</div>
        </li>
    );
}

export default Song;