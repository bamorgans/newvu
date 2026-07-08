export function UserManagement({ users = [] }) {
  return (
    <section className="glass user-management">
      <h2>Users</h2>
      {users.map(user => <div key={user.id}>{user.name} - {user.role}</div>)}
    </section>
  );
}
