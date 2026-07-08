export function CandidateDetailDrawer({ candidate, onClose }) {
  if (!candidate) return null;

  return (
    <aside className="glass">
      <button onClick={onClose}>Close</button>
      <h2>{candidate.name || candidate.candidate}</h2>
      <p>{candidate.role}</p>
      <strong>{candidate.score}% confidence</strong>
    </aside>
  );
}
