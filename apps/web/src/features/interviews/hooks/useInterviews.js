import { interviews } from '../data/interviews.sample';

export function useInterviews() {
  return {
    interviews,
    stages: ['Discovery', 'Values', 'Working Session', 'Final']
  };
}
