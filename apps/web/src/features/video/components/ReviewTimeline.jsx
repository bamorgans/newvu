export function ReviewTimeline({ markers = [] }) {
  return (
    <section className="glass review-timeline">
      <h2>Review Timeline</h2>
      {markers.map(marker => (
        <button key={marker.time}>{marker.time} - {marker.label}</button>
      ))}
    </section>
  );
}
