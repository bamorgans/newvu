export function usePermissions(role = 'User') {
  const permissions = {
    'Super Admin': ['manage_orgs', 'manage_users', 'view_analytics'],
    Admin: ['manage_interviews', 'manage_candidates'],
    Interviewer: ['conduct_interviews', 'review_candidates'],
    User: ['view_profile']
  };

  return permissions[role] || permissions.User;
}
