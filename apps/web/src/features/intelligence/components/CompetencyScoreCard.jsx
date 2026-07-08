export function CompetencyScoreCard({ competencies = [] }) {
  return (
    <section className="glass competency-score-card">
      <h2>Competency Scores</h2>
      {competencies.map(item => (
        <div key={item.name}>
          <span>{item.name}</span>
          <strong>{item.score}%</strong>
        </div>
      ))}
    </section>
  );
}
