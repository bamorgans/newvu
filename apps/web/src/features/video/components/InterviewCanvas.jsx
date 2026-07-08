export function InterviewCanvas({ children }) {
  return (
    <main className="interview-canvas">
      <div className="video-surface">Interview Video</div>
      {children}
    </main>
  );
}
