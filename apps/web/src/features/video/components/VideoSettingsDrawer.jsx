export function VideoSettingsDrawer({ open = false }) {
  if (!open) return null;

  return (
    <aside className="glass settings-drawer">
      <h2>Video Settings</h2>
      <button>Camera</button>
      <button>Microphone</button>
      <button>Speaker</button>
    </aside>
  );
}
