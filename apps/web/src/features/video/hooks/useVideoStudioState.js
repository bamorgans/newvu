import { useState } from 'react';

export function useVideoStudioState() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(true);

  return {
    activeDrawer,
    setActiveDrawer,
    controlsVisible,
    setControlsVisible,
  };
}
