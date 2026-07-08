export function RoleGuard({ allowedRoles = [], role, children }) {
  if (!allowedRoles.includes(role)) return null;

  return children;
}
