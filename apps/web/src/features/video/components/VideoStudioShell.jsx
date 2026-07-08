export function VideoStudioShell({ children }) {
  return (
    <section className="glass">
      <div className="video-canvas">Video Canvas</div>
      <div className="overlay-panel">AI Assistant</div>
      <div className="timeline">Interview Timeline</div>
      {children}
    </section>
  );
}
