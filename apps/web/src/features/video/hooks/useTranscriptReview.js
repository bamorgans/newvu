import { useState } from 'react';

export function useTranscriptReview(initialQuotes = []) {
  const [quotes, setQuotes] = useState(initialQuotes);

  function toggleQuote(id) {
    setQuotes(items => items.map(item => item.id === id ? { ...item, included: !item.included } : item));
  }

  return { quotes, toggleQuote };
}
