export function FloatingControls({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="glass floating-controls">
      <button>Play</button>
      <button>Mute</button>
      <button>Settings</button>
    </div>
  );
}
