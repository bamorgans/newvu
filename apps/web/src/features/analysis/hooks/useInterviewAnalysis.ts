export function useInterviewAnalysis() {
  return {
    overallScore: 87,
    confidence: 91,
    stages: [
      { id: 'discovery', name: 'Discovery', score: 91 },
      { id: 'values', name: 'Values', score: 86 },
      { id: 'working', name: 'Working Session', score: 94 },
      { id: 'final', name: 'Final', score: 88 }
    ],
    competencies: [
      { name: 'Communication', value: 92 },
      { name: 'Technical Depth', value: 88 },
      { name: 'Leadership', value: 90 },
      { name: 'Problem Solving', value: 85 }
    ]
  };
}
