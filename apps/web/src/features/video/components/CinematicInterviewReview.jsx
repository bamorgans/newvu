import { CinematicShell } from '../../../design-system/components/CinematicShell';
import { VideoOverlay } from '../../../design-system/components/VideoOverlay';
import { FilmTimeline } from '../../../design-system/components/FilmTimeline';
import { AnimatedDrawer } from '../../../design-system/components/AnimatedDrawer';
import { FloatingButton } from '../../../design-system/components/FloatingButton';

export function CinematicInterviewReview({ moments = [], drawerOpen = false }) {
  return (
    <CinematicShell>
      <VideoOverlay />
      <FilmTimeline moments={moments} />
      <AnimatedDrawer open={drawerOpen} />
      <FloatingButton label="AI Review" />
    </CinematicShell>
  );
}
