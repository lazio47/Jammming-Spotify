import React from "react";
import './Song.css';

function Song(props) {
    return (
        <li className="song">
            <div className="songInfo">
                <div className="songTitle">{
                    props.title
                    }</div>
                <div className="songArtists">{
                    props.name
                    }</div>
            </div>
            {props.isResult !== 'playlist' && (
                <button 
                    value={props.songId} 
                    onClick={props.onClick} 
                    className={props.isResult ? 'addSong' : 'removeSong'}
                >
                    {props.isResult ? '+' : '-'}
                </button>
            )}

        </li>
    );
}

export default Song;