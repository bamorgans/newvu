export function InsightPanel({ strengths = [], risks = [] }) {
  return <section className="glass"><h2>Insights</h2><p>Strengths: {strengths.join(', ')}</p><p>Risks: {risks.join(', ')}</p></section>;
}
