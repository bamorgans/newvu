export function TranscriptDrawer({ quotes = [] }) {
  return (
    <aside className="glass">
      <h3>Transcript Highlights</h3>
      {quotes.map((quote) => (
        <div key={quote.id}>{quote.text}</div>
      ))}
    </aside>
  );
}
