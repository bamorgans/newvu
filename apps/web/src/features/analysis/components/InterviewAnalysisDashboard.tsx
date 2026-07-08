import { ScoreMeter } from '@newvu/ui/ScoreMeter';
import { StageQuickLookCard } from '@newvu/ui/StageQuickLookCard';
import { AnalysisActionPanel } from '@newvu/ui/AnalysisActionPanel';
import { SpiderChart } from '@newvu/ui/SpiderChart';
import { BarChart } from '@newvu/ui/BarChart';

export type InterviewAnalysisDashboardProps = {
  candidateName: string;
  score: number;
  stages: Array<{ name: string; score: number }>;
  competencies: Array<{ label: string; value: number }>;
};

export function InterviewAnalysisDashboard({
  candidateName,
  score,
  stages,
  competencies
}: InterviewAnalysisDashboardProps) {
  return (
    <main>
      <h1>{candidateName} Analysis</h1>
      <ScoreMeter label="Hiring Confidence" value={score} />
      <AnalysisActionPanel
        title="Recommended Next Action"
        description="Review highlights and submit interviewer recommendation."
        actions={["Review Interview", "Compare Candidate", "Submit Recommendation"]}
      />
      <section>
        {stages.map((stage) => (
          <StageQuickLookCard
            key={stage.name}
            title={stage.name}
            score={stage.score}
            summary="View stage analysis"
          />
        ))}
      </section>
      <SpiderChart data={competencies} />
      <BarChart data={competencies} />
    </main>
  );
}
