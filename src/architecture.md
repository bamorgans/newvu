# NewVu Application Architecture

## Layers

```
Pages
 |
Feature Containers
 |
Presentation Components
 |
Hooks
 |
Mock Data / Services
```

## Interview Analysis

```
InterviewAnalysisPage
        |
        +-- useInterviewAnalysis()
        |
        +-- ScoreMeter
        +-- StageQuickLookCard
        +-- SpiderChart
        +-- BarChart
        +-- MeterChart
```

## Goals

- Reusable components
- Replaceable data sources
- Fast prototype iteration
- Responsive layouts
