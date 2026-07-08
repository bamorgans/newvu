import { VideoStudioShell } from '../features/video/components/VideoStudioShell';
import { AIQuestionPanel } from '../features/video/components/AIQuestionPanel';
import { TranscriptDrawer } from '../features/video/components/TranscriptDrawer';
import { FilmTimeline } from '../features/video/components/FilmTimeline';

export function VideoInterviewPage() {
  return (
    <VideoStudioShell>
      <AIQuestionPanel question="Tell me about your recent project." followUps={["What tradeoffs did you consider?"]} />
      <TranscriptDrawer quotes={[{id:1,text:'Strong architecture explanation'}]} />
      <FilmTimeline markers={[{time:'00:14',label:'Key insight'}]} />
    </VideoStudioShell>
  );
}
