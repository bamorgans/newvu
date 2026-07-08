export function CandidateCard({ candidate, onSelect }) {
  return (
    <button type="button" onClick={onSelect} className="glass">
      <h3>{candidate.name}</h3>
      <p>{candidate.role}</p>
      <strong>{candidate.score}% confidence</strong>
    </button>
  );
}
