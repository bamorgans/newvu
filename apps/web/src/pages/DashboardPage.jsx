export function DashboardPage() {
  return (
    <section className="glass">
      <h1>NewVu Dashboard</h1>
      <p>Interview pipeline overview and hiring intelligence.</p>
      <div className="grid">
        <article className="glass"><h2>Active Interviews</h2><strong>12</strong></article>
        <article className="glass"><h2>Average Confidence</h2><strong>89%</strong></article>
        <article className="glass"><h2>Pending Reviews</h2><strong>4</strong></article>
      </div>
    </section>
  );
}
