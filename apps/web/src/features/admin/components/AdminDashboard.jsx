import { AdminNavigation } from './AdminNavigation';
import { OrganizationDashboard } from './OrganizationDashboard';
import { useAdminWorkspace } from '../hooks/useAdminWorkspace';

export function AdminDashboard({ role = 'Admin' }) {
  const workspace = useAdminWorkspace(role);

  return (
    <main className="admin-dashboard">
      <AdminNavigation sections={workspace.sections} />
      <OrganizationDashboard metrics={{ users: 248, interviews: 42, candidates: 96 }} />
    </main>
  );
}
