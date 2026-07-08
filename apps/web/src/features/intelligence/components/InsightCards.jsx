export function InsightCards({ insights = [] }) {
  return (
    <section className="glass insight-cards">
      <h2>AI Insights</h2>
      {insights.map((item, index) => (
        <article key={index}>{item}</article>
      ))}
    </section>
  );
}
