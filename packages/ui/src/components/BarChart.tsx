export type BarChartProps = {
  data: Array<{ label: string; value: number }>;
};

export function BarChart({ data }: BarChartProps) {
  return (
    <div aria-label="bar chart">
      {data.map((item) => (
        <div key={item.label}>
          {item.label}: {item.value}%
        </div>
      ))}
    </div>
  );
}
