import { usersSample } from '../data/users.sample';

export function useRoles() {
  return {
    users: usersSample,
    roles: ['Super Admin', 'Admin', 'Interviewer', 'User']
  };
}
