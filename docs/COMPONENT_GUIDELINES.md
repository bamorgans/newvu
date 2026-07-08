# NewVu Component Guidelines

## Presentation Components

All components must be presentation focused.

Responsibilities:
- Render UI
- Accept typed props
- Handle visual states
- Support animation
- Provide accessibility

Do not:
- Fetch data
- Call APIs
- Contain domain calculations
- Manage business workflows

## Hook Pattern

Example:

```
useInterviewAnalysis()
        |
        v
AnalysisDashboard
        |
        v
ScoreMeter
```

## Charts

Charts are reusable visual components:

- SpiderChart
- BarChart
- MeterChart
- ProgressRing

They receive data through props.

## Mock Data

All prototype screens use hooks backed by fixture data until services are available.
