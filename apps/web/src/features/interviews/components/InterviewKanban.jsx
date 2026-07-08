export function InterviewKanban({ stages, interviews }) {
  return <section className="grid">{stages.map(stage => <div className="glass" key={stage}><h2>{stage}</h2>{interviews.filter(item => item.stage === stage).map(item => <article key={item.id}><h3>{item.candidate}</h3><p>{item.role}</p><strong>{item.score}%</strong></article>)}</div>)}</section>;
}
