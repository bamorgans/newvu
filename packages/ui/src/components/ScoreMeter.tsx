export type ScoreMeterProps = {
  label: string;
  value: number;
  description?: string;
};

export function ScoreMeter({ label, value, description }: ScoreMeterProps) {
  return (
    <section aria-label={label}>
      <h3>{label}</h3>
      <div role="meter" aria-valuenow={value}>
        {value}%
      </div>
      {description && <p>{description}</p>}
    </section>
  );
}
