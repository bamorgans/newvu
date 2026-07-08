export function InterviewerEffectiveness({ metrics = [] }) {
  return (
    <section className="glass">
      <h2>Interviewer Effectiveness</h2>
      {metrics.map(metric => <div key={metric.name}>{metric.name}: {metric.value}</div>)}
    </section>
  );
}
