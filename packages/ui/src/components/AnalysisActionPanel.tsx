export type AnalysisActionPanelProps = {
  title: string;
  description: string;
  actions: string[];
};

export function AnalysisActionPanel({ title, description, actions }: AnalysisActionPanelProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      {actions.map((action) => (
        <button key={action}>{action}</button>
      ))}
    </section>
  );
}
