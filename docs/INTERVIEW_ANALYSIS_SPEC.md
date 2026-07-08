# NewVu Interviewer Analysis Dashboard

## Purpose

Provide interviewers and hiring teams with a visual analysis workspace that communicates candidate performance quickly.

## Dashboard Overview

The interviewer analysis page contains:

1. Overall Interview Meter
2. Call To Action section
3. Four stage quick-look cards
4. Detailed analysis workspace

## Overall Meter

A large visual meter communicates interview confidence.

Example:

- Overall Recommendation: 87%
- Interview Quality: 92%
- Hiring Confidence: 84%

The meter should visually emphasize strong signals while allowing users to drill into details.

## Call To Action Section

Primary actions:

- Review interview
- View AI summary
- Compare candidates
- Submit recommendation
- Schedule next round

## Four Stage Quick Look Cards

Each card represents:

- Discovery
- Values
- Working Session
- Final

Each card contains:

- Stage score
- Completion status
- Strengths
- Concerns
- Key quotes
- Interview duration

Selecting a card opens the detailed stage analysis page.

## Detailed Analysis Page

Visual components:

### Spider Charts

Used for:

- Communication
- Technical depth
- Leadership
- Problem solving
- Collaboration

### Bar Charts

Used for:

- Question performance
- Competency comparison
- Candidate versus role requirements

### Meter Charts

Used for:

- Confidence
- Recommendation
- Interview quality

## Component Architecture

Presentation components:

- ScoreMeter
- StageCard
- SpiderChart
- BarChart
- AnalysisPanel

Data hooks:

- useInterviewAnalysis()
- useStageScores()
- useCandidateMetrics()

Components receive data only through props.
