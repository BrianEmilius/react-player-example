import './App.css';
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css";
import { useEffect, useState } from 'react';


function App() {
  const [trackIndex, setTrackIndex] = useState(false)
  const musicTracks = [
    {
      name: "Cantina Band",
      src: "https://github.com/cookieman2002/iplay-music-mp3/blob/main/Cantina%20Band.mp3?raw=true"
    },
    {
      name: "Memories",
      src: "https://github.com/cookieman2002/iplay-music-mp3/blob/main/bensound-memories.mp3?raw=true"
    },
  ]
  
  useEffect(function() {
    setTrackIndex(0)
  }, [])

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    )
  }

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    )
  }

  return (
    <div className="App">
      {trackIndex !== false && (<AudioPlayer
        autoPlay
        src={musicTracks[trackIndex].src}
        onPlay={e => console.log("onPlay")}
        header={musicTracks[trackIndex].name}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />)}
    </div>
  );
}

export default App;
