import { FloatingControls } from './FloatingControls';
import { QuoteMarker } from './QuoteMarker';

export function InterviewStudioControls() {
  return (
    <>
      <FloatingControls />
      <QuoteMarker quote="Candidate explained the architecture tradeoff." />
    </>
  );
}
