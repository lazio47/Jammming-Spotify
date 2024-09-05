import React, {useState, useEffect} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlaylistSongs from "../PlaylistSongs/PlaylistSongs";
import Title from "../../components/Title/Title";
import Playlists from "../Playlists/Playlists";
import KeyInput from "../../components/KeyInput/KeyInput";
import "./Page.css";


function Page() {
    const [results, setResults] = useState([]);
    const [searchWord, setSearchWord] = useState('');
    const [accessKey, setAccessKey] = useState('');
    const [addedSongs, setAddedSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [currentPlaylistName, setCurrentPlaylistName] = useState('');

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': accessKey,
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };
    
    const url = 'https://spotify23.p.rapidapi.com/search/?type=tracks&offset=0&limit=10&numberOfTopResults=5';

    const seeData = async (query) => {
        try{
            const response = await fetch(url+query, options);
            const result = await response.json();
            const items = result['tracks']['items']
            console.log(items);
            setResults(items);
            return items;
        } catch(e) {
            console.log(e);
            return [];
        }
    }

    function handleSubmit(event) {
        if(searchWord.length !== 0){
            event.preventDefault();
            const query = `&q=${searchWord.split(' ').join('+')}`;
            seeData(query).then((resultItems) => setResults(resultItems));
        }
    }

    function handleSubmitKey(event) {
        event.preventDefault();
        event.target.innerHTML = `<p>If the key if wrong, the app will not work.</p><h3>Key: ${accessKey}</h3>`;
    }

    function handleAddSong(event) {
        const id = event.target.value;
        const indx = results.findIndex(item => item.data.id === id);
        if (indx !== -1) {
            setAddedSongs((prev) => [...prev, results[indx]]);
            setResults((prevResults) => prevResults.filter((_, i) => i !== indx));
        }
    }

    function handleRemoveSong(event) {
        const id = event.target.value;
        const indx = addedSongs.findIndex(item => item.data.id === id);
        if (indx !== -1) {
            setResults((prevResults) => [...prevResults, addedSongs[indx]]);
            setAddedSongs((prevAdded) => prevAdded.filter((_, i) => i !== indx));
        }
    }

    function handleAddPlaylist(event) {
        if(currentPlaylistName.length !== 0 
            && addedSongs.length !== 0
        ) {
            setPlaylists((prev) => [...prev, {name: ''+currentPlaylistName, playlist: [...addedSongs]}]);
        }
    }

    function onChangeSearchInput(event) {
        onChangeInput(event, setSearchWord);
    }

    function onChangePlaylistInput(event) {
        onChangeInput(event, setCurrentPlaylistName);
    }

    function onChangeAccessKey(event) {
        onChangeInput(event, setAccessKey);
    }

    function onChangeInput(event, setter) {
        setter(event.target.value);
    }

    useEffect(() => {
        console.log("Updates: ", playlists);
        setAddedSongs([]);
        setCurrentPlaylistName('');
    }, [playlists]);

    return (
        <>
            <Title />
            <KeyInput handleSubmit={handleSubmitKey} accessKey={accessKey} onChange={onChangeAccessKey} />
            <hr />
            <SearchBar handleSubmit={handleSubmit} onChange={onChangeSearchInput} searchWord={searchWord} />
            <hr />
            <div className="results-playlist-container">
                <SearchResults onAdd={handleAddSong} results={results} />
                <PlaylistSongs theValue={currentPlaylistName} onAddPlaylist={handleAddPlaylist} onChange={onChangePlaylistInput} onRemove={handleRemoveSong} addedSongs={addedSongs} />
            </div>
            <hr />
            <Playlists playlists={playlists} />
        </>
    );
}

export default Page;