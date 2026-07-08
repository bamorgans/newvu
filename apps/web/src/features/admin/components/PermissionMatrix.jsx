export function PermissionMatrix({ permissions = [] }) {
  return (
    <section className="glass permission-matrix">
      <h2>Permissions</h2>
      {permissions.map(permission => <div key={permission}>{permission}</div>)}
    </section>
  );
}
