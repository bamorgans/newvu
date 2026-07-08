export function AIFollowUpPanel({ question, suggestions = [] }) {
  return (
    <aside className="glass ai-panel">
      <h2>AI Follow Up</h2>
      <p>{question}</p>
      {suggestions.map(item => <button key={item}>{item}</button>)}
    </aside>
  );
}
