import { ScoreMeter } from './ScoreMeter';
import { StageQuickLook } from './StageQuickLook';
import { SpiderChart } from './SpiderChart';
import { InsightCards } from './InsightCards';
import { AnalysisCTA } from './AnalysisCTA';
import { useInterviewIntelligence } from '../hooks/useInterviewIntelligence';

export function IntelligenceDashboard() {
  const data = useInterviewIntelligence();

  return (
    <main>
      <ScoreMeter value={data.confidence} />
      <StageQuickLook stages={data.stages} />
      <SpiderChart competencies={data.competencies} />
      <InsightCards insights={[data.recommendation]} />
      <AnalysisCTA />
    </main>
  );
}
