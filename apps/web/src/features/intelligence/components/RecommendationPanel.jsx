export function RecommendationPanel({ recommendation = '', confidence = 0 }) {
  return (
    <section className="glass recommendation-panel">
      <h2>Recommendation</h2>
      <p>{recommendation}</p>
      <strong>{confidence}% confidence</strong>
    </section>
  );
}
