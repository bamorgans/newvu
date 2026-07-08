export function EvidenceRanking({ evidence = [] }) {
  return <section className="glass"><h2>Evidence Ranking</h2>{evidence.map(item => <div key={item.id}>{item.text} - {item.score}%</div>)}</section>;
}
