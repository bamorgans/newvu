export function RecommendationMeter({ value = 0 }) {
  return <section className="glass"><h2>Hiring Confidence</h2><strong>{value}%</strong></section>;
}
