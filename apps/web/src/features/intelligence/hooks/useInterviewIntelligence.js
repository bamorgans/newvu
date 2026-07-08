import { useCandidateScore } from './useCandidateScore';

export function useInterviewIntelligence() {
  const score = useCandidateScore();

  return {
    ...score,
    recommendation: score.confidence >= 90 ? 'Strong Hire' : 'Review Required'
  };
}
