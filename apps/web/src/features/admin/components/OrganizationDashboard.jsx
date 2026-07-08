export function OrganizationDashboard({ metrics = {} }) {
  return (
    <section className="glass organization-dashboard">
      <h2>Organization Dashboard</h2>
      <div>Users: {metrics.users || 0}</div>
      <div>Interviews: {metrics.interviews || 0}</div>
      <div>Candidates: {metrics.candidates || 0}</div>
    </section>
  );
}
