import { useState } from 'react';

export function usePlaybackControls() {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  return {
    playing,
    setPlaying,
    speed,
    setSpeed,
  };
}
