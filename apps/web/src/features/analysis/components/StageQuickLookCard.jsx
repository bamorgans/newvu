export function StageQuickLookCard({ stage }) {
  return <article className="glass"><h3>{stage.name}</h3><strong>{stage.score}%</strong><p>View stage analysis</p></article>;
}
