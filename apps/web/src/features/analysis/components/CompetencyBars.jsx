export function CompetencyBars({ competencies = [] }) {
  return <section className="glass"><h2>Competencies</h2>{competencies.map(item => <div key={item.name}><span>{item.name}</span><strong>{item.score}%</strong></div>)}</section>;
}
