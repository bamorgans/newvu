export function PlaybackControls({ onPlay, onPause }) {
  return (
    <div className="glass playback-controls">
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
      <button>Speed 1x</button>
    </div>
  );
}
