export function StageQuickLook({ stages = [] }) {
  return (
    <section className="glass stage-quick-look">
      <h2>Interview Stages</h2>
      {stages.map(stage => (
        <button key={stage.name}>{stage.name}: {stage.score}%</button>
      ))}
    </section>
  );
}
