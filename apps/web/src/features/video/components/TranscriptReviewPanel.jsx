export function TranscriptReviewPanel({ quotes = [] }) {
  return (
    <section className="glass transcript-review">
      <h2>Transcript Review</h2>
      {quotes.map(quote => (
        <article key={quote.id}>
          <button>Include</button>
          <button>Exclude</button>
          <p>{quote.text}</p>
        </article>
      ))}
    </section>
  );
}
