export type MeterChartProps = {
  label: string;
  value: number;
};

export function MeterChart({ label, value }: MeterChartProps) {
  return (
    <section aria-label={label}>
      <h3>{label}</h3>
      <div role="meter" aria-valuenow={value}>{value}%</div>
    </section>
  );
}
