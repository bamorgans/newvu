import { InterviewKanban } from '../features/interviews/components/InterviewKanban';
import { useInterviews } from '../features/interviews/hooks/useInterviews';

export function InterviewsPage() {
  const { interviews, stages } = useInterviews();
  return <InterviewKanban interviews={interviews} stages={stages} />;
}
