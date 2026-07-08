export type SpiderChartProps = {
  data: Array<{ label: string; value: number }>;
};

export function SpiderChart({ data }: SpiderChartProps) {
  return (
    <div aria-label="spider chart">
      {data.map((item) => (
        <div key={item.label}>
          {item.label}: {item.value}%
        </div>
      ))}
    </div>
  );
}
