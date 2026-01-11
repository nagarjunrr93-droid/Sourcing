
export interface CostBreakdownItem {
  component: string;
  current: string;
  proposed: string;
  savings: string;
}

export interface CaseStudyData {
  title: string;
  problemStatement: string;
  solutionHighlights: string;
  approach: string[];
  results: {
    region: string;
    suppliers: number;
    savings: number;
  }[];
  metrics: string[];
  costBreakdown: CostBreakdownItem[];
}

export interface AIRenderedContent {
  executiveSummary: string;
  detailedMethodology: string;
  strategicOutlook: string;
}
