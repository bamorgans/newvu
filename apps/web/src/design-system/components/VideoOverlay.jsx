export function VideoOverlay({ children, markers = [] }) {
  return (
    <div className="video-overlay">
      {children}
      {markers.map(marker => (
        <span key={marker.id}>{marker.label}</span>
      ))}
    </div>
  );
}
