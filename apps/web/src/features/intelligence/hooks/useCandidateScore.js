import { intelligenceSample } from '../data/intelligence.sample';

export function useCandidateScore(data = intelligenceSample) {
  return {
    confidence: data.confidence,
    stages: data.stages,
    competencies: data.competencies
  };
}
