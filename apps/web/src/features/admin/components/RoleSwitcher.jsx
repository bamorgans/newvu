export function RoleSwitcher({ roles = [], activeRole }) {
  return (
    <section className="glass role-switcher">
      <h2>Role</h2>
      {roles.map(role => (
        <button key={role} aria-current={role === activeRole}>{role}</button>
      ))}
    </section>
  );
}
