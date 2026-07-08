export function useAdminWorkspace(role = 'Admin') {
  const workspaces = {
    'Super Admin': ['Organizations', 'Users', 'Permissions', 'Analytics'],
    Admin: ['Interviews', 'Candidates', 'Evaluations'],
    Interviewer: ['Assigned Interviews', 'Video Studio', 'Reviews'],
    User: ['Profile']
  };

  return {
    role,
    sections: workspaces[role] || workspaces.User
  };
}
