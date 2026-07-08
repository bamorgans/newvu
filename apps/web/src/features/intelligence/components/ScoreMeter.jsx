export function ScoreMeter({ value = 0 }) {
  return (
    <section className="glass score-meter">
      <h2>Hiring Confidence</h2>
      <strong>{value}%</strong>
    </section>
  );
}
