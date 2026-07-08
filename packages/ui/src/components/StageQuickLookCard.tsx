export type StageQuickLookCardProps = {
  title: string;
  score: number;
  summary: string;
  onSelect?: () => void;
};

export function StageQuickLookCard({ title, score, summary, onSelect }: StageQuickLookCardProps) {
  return (
    <button onClick={onSelect} type="button">
      <h3>{title}</h3>
      <strong>{score}%</strong>
      <p>{summary}</p>
    </button>
  );
}
