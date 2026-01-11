
import { CaseStudyData } from './types';

export const INITIAL_DATA: CaseStudyData = {
  title: "Sourcing Case Study: Alternate Supplier Identification in LCC",
  problemStatement: "A US-based client making plastic injection-molded parts is facing high costs and limited supplier options due to a monopoly. They need to explore alternative suppliers and compare costs with current purchases.",
  solutionHighlights: "Identify Low-Cost Country (LCC) suppliers in India & South-East Asia as alternative sourcing options while maintaining quality, tooling capability, and scalability.",
  approach: [
    "Supplier Identification & Shortlisting",
    "Capability & Capacity Assessment",
    "RFI & RFQ Management",
    "Cost, Lead-Time & Risk Benchmarking"
  ],
  results: [
    { region: "India", suppliers: 3, savings: 24 },
    { region: "South-East Asia", suppliers: 2, savings: 15 }
  ],
  metrics: ["Quality", "Cost", "Delivery", "Management (QCDM)"],
  costBreakdown: [
    { component: "Material", current: "48%", proposed: "44%", savings: "8%" },
    { component: "Labor", current: "22%", proposed: "12%", savings: "45%" },
    { component: "Overhead (OH)", current: "20%", proposed: "15%", savings: "25%" },
    { component: "Tooling", current: "10%", proposed: "29%", savings: "-190%" }
  ]
};
