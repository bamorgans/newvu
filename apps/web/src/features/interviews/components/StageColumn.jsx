import { CandidateCard } from './CandidateCard';

export function StageColumn({ stage, candidates = [], onSelect }) {
  return (
    <section className="glass">
      <h2>{stage}</h2>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} onSelect={() => onSelect?.(candidate)} />
      ))}
    </section>
  );
}
