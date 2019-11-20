import React from 'react';
import './App.css';
import Loading from './components/Loading/Loading';
import LyPlaylist from './components/LyPlaylist/LyPlaylist';
import MusicPlayerController from './components/MusicPlayerController/MusicPlayer'; // 사실상 컨트롤러
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (
    <div className="App">
      <Loading isLoadingCompleted={true} />
      <div id="player">
        <MusicPlayerController /> 
        <LyPlaylist show={true} /> 
      </div>
      <div id="navigation">
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;

