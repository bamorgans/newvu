export function FilmTimeline({ markers = [] }) {
  return (
    <div className="glass">
      <h3>Interview Timeline</h3>
      {markers.map((marker) => (
        <span key={marker.time}>{marker.time} - {marker.label}</span>
      ))}
    </div>
  );
}
