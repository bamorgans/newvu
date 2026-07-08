export function StudioLayout({ video, panels }) {
  return (
    <section className="studio-layout">
      <div className="video-canvas">{video}</div>
      <div className="overlay-panels">{panels}</div>
    </section>
  );
}
