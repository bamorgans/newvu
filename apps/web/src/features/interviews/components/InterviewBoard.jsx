import { StageColumn } from './StageColumn';

export function InterviewBoard({ stages, interviews = [], onSelect }) {
  return (
    <section className="grid">
      {stages.map((stage) => (
        <StageColumn key={stage} stage={stage} candidates={interviews.filter((item) => item.stage === stage)} onSelect={onSelect} />
      ))}
    </section>
  );
}
