export function EvidenceTimeline({ evidence = [] }) {
  return <section className="glass"><h2>Evidence Timeline</h2>{evidence.map(item => <div key={item.time}>{item.time} - {item.text}</div>)}</section>;
}
