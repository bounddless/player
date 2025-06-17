import("./styles/helpers/index.scss")
import React from 'react';
import AudioPlayer from './layouts/Player/Player.jsx';


function App() {
  return (
    <div className="App">
      <h1>Мой музыкальный плеер</h1>
      <AudioPlayer />
    </div>
  );
}

export default App;