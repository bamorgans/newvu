export function SpiderChart({ competencies = [] }) {
  return (
    <section className="glass spider-chart">
      <h2>Competency Map</h2>
      {competencies.map(item => (
        <div key={item.name}>{item.name}: {item.score}%</div>
      ))}
    </section>
  );
}
