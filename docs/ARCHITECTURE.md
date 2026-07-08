# NewVu Architecture

## Component Rules

All UI components are presentation-only.

Components:
- Receive props
- Render UI
- Handle animations and interaction states
- Do not fetch data
- Do not contain business logic

Example:

```
CandidateCard.tsx
  props: candidate, score, status
  output: visual card
```

## Data Layer

Data access is isolated through hooks.

Examples:

```
useCandidates()
useInterviews()
useTranscript()
useEvaluation()
useUserRole()
```

Hooks provide:
- Loading states
- Error states
- Mock data initially
- Future API integration point

## Sample Data

The prototype will use realistic fixture data:

- Candidates
- Interview stages
- Interview transcripts
- Quotes
- Evaluations
- Avatars

External image assets will only be used for UI presentation and replaced later with production storage.

## Feature Structure

```
features/
  interviews/
    components/
    hooks/
    data/
    types/
```

## Design Goal

The prototype should allow replacing mock hooks with APIs without rewriting presentation components.
