import { InterviewBoard } from '../features/interviews/components/InterviewBoard';
import { useInterviews } from '../features/interviews/hooks/useInterviews';

export function InterviewsPage() {
  const { interviews, stages } = useInterviews();

  return (
    <InterviewBoard
      stages={stages}
      interviews={interviews}
      onSelect={(candidate) => console.log('selected', candidate)}
    />
  );
}
