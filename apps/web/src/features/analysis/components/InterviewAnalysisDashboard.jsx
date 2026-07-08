import { RecommendationMeter } from './RecommendationMeter';
import { AnalysisCTA } from './AnalysisCTA';
import { StageQuickLookCard } from './StageQuickLookCard';
import { CompetencyBars } from './CompetencyBars';
import { SpiderChart } from './SpiderChart';
import { EvidenceTimeline } from './EvidenceTimeline';
import { useCandidateAnalysis } from '../hooks/useCandidateAnalysis';

export function InterviewAnalysisDashboard() {
  const analysis = useCandidateAnalysis();

  return <section>
    <RecommendationMeter value={analysis.confidence} />
    <AnalysisCTA recommendation={analysis.recommendation} />
    <div className="grid">{analysis.stages.map(stage => <StageQuickLookCard key={stage.name} stage={stage} />)}</div>
    <SpiderChart metrics={analysis.competencies} />
    <CompetencyBars competencies={analysis.competencies} />
    <EvidenceTimeline evidence={[{time:'00:14',text:'Strong architecture explanation'}]} />
  </section>;
}
