export function AIQuestionPanel({ question, followUps = [] }) {
  return (
    <section className="glass">
      <h3>AI Interview Assistant</h3>
      <p>{question}</p>
      {followUps.map((item) => <button key={item}>{item}</button>)}
    </section>
  );
}
