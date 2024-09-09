
// * {
//   box-sizing: border-box;
// }

// main {
//   padding: 0 16px;
//   font-family: sans-serif;
// }

// .player-controls {
//   display: flex;
//   flex-direction: row;
//   background: rgba(255, 255, 255, 0.8);
//   align-items: center;

//   .player-controls__btn {
//     border: none;
//     background-color: transparent;
//     width: 30px;
//     height: 30px;
//     margin: 6px;
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center;
//     opacity: .5;

//     &:hover {
//       cursor: pointer;
//       opacity: 1;
//     }
//   }

//   .player-controls__play-btn {
//     background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557136695174/play-right-arrow-circular-button.svg");
//   }

//   .player-controls__pause-btn {
//     background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557137524244/rounded-pause-button.svg");
//   }

//   .player-controls__next-btn {
//     background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557137539567/next-button.svg");
//   }

//   .player-controls__prev-btn {
//     background-image: url("https://codesignal.s3.amazonaws.com/uploads/1557138446191/previous-button.svg");
//   }

//   .player-controls__track {
//     padding: 6px;
//     display: flex;
//     flex-direction: column;

//     .track__name {
//       font-weight: 600;
//       color: black;
//       line-height: 20px;
//       font-size: 14px;
//     }

//     .track__artist {
//       color: #777;
//       line-height: 20px;
//       font-size: 14px;
//     }
//   }
// }

// .tracks-list {

//   .tracks-list__name {
//     color: black;
//     line-height: 20px;
//     font-size: 14px;
//   }

//   .tracks-list__artist {
//     color: #777;
//     line-height: 20px;
//     font-size: 14px;
//   }

//   .tracks-list__item {
//     display: flex;
//     padding: 6px;
//   }

//   .tracks-list__item--selected {
//     border: 2px solid #f33;
//   }

//   .tracks-list__title {
//     padding: 6px;
//   }
// }


const PlayButton = ({onClick}) => (
  <button
    aria-label="Play button"
    type="button"
    className="player-controls__btn player-controls__play-btn"
    onClick={onClick}
  />
);

const PauseButton = ({onClick}) => (
  <button
    aria-label="Pause button"
    type="button"
    className="player-controls__btn player-controls__pause-btn"
    onClick={onClick}
  />
);

const NextButton = ({onClick}) => (
  <button
    aria-label="Next button"
    type="button"
    className="player-controls__btn player-controls__next-btn"
    onClick={onClick}
  />
);

const PreviousButton = ({onClick}) => (
  <button
    aria-label="Previous button"
    type="button"
    className="player-controls__btn player-controls__prev-btn"
    onClick={onClick}
  />
);

const App = () => {
  const tracks = [
    {
      id: 1,
      name: 'Yesterday',
      artist: 'Beatles',
    },
    {
      id: 2,
      name: 'Nothing else matters',
      artist: 'Metallica',
    },
    {
      id: 3,
      name: 'Always',
      artist: 'Bon Jovi',
    },
    {
      id: 4,
      name: 'Waka Waka',
      artist: 'Shakira',
    },
  ];
  // useState hook to track the selected track
  const [selectedTrack, setSelectedTrack] = React.useState(tracks[0]);
  // use state hook to pause and unpause songs
  const [isPaused, setPaused] = React.useState(true);

// tracking the index on the song from tracks and updating the position to the next song
  const onNextButtonClick = () => {
    const currentIndex = tracks.findIndex(track => track.id === selectedTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setSelectedTrack(tracks[nextIndex]);
  };

  // tracking the index on the song from tracks and updating the position to the previous song
  const onPreviousButtonClick = () => {
    const currentIndex = tracks.findIndex(track => track.id === selectedTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setSelectedTrack(tracks[prevIndex]);
  };

  const onPlayButtonClick = () => {
    setPaused(false);
  };

  const onPauseButtonClick = () => {
    setPaused(true);
  }

  const renderTracks = () => tracks.map((track) => (
    <div className={`tracks-list__item ${selectedTrack.id === track.id ? 'tracks-list__item--selected' : ''}`} key={track.id}>
      <span className="tracks-list__name">{track.name}</span>
      <span className="tracks-list__artist">
        &nbsp;—&nbsp;
        {track.artist}
      </span>
    </div>
  ));

  return (
    <main>
      <div className="tracks-list">
        <h2 className="tracks-list__title">Tracks</h2>
        {renderTracks()}
      </div>
      <div className="player-controls">
        <PreviousButton onClick = {onPreviousButtonClick}/>
        {isPaused ? (<PlayButton onClick={onPlayButtonClick}/>) : (<PauseButton onClick={onPauseButtonClick}/>)}
        <NextButton onClick = {onNextButtonClick}/>
        <div className="player-controls__track">
          <span className="track__name">{selectedTrack.name}</span>
          <span className="track__artist">{selectedTrack.artist}</span>
        </div>
      </div>
    </main>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
