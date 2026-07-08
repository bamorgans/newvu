import { useCandidateMetrics } from './useCandidateMetrics';
import { useInterviewAnalysis } from './useInterviewAnalysis';
import { useStageScores } from './useStageScores';

export function useAnalysisWorkspace(candidateId) {
  const analysis = useInterviewAnalysis(candidateId);
  const stages = useStageScores(candidateId);
  const metrics = useCandidateMetrics(candidateId);

  return {
    analysis,
    stages,
    metrics,
    candidateId,
  };
}
