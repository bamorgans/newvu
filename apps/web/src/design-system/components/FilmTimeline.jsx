export function FilmTimeline({ moments = [] }) {
  return (
    <div className="film-timeline">
      {moments.map(moment => <div key={moment.id}>{moment.label}</div>)}
    </div>
  );
}
