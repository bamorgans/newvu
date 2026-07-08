export function SpiderChart({ metrics = [] }) {
  return <section className="glass"><h2>Competency Radar</h2>{metrics.map(metric => <div key={metric.name}>{metric.name}: {metric.score}%</div>)}</section>;
}
