export function QuoteMarker({ quote, included = true, onToggle }) {
  return (
    <button type="button" onClick={onToggle} className="glass">
      <span>{included ? 'Included' : 'Excluded'}</span>
      <p>{quote}</p>
    </button>
  );
}
