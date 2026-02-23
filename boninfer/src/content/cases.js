/** Case study vignettes for Act 4 (Home) and Work page */
export const cases = [
    {
        id: 'support-rag',
        title: 'Support Deflection with RAG',
        industry: 'SaaS / Customer Success',
        badge: 'Knowledge AI',
        problem:
            'A B2B SaaS company was spending 40% of their support capacity on repetitive policy and product questions answered in existing documentation.',
        system:
            'Built a RAG knowledge assistant ingesting 1,200+ documentation pages, integrated into their Intercom inbox. Includes source citation and confidence-gated human takeover.',
        outcome:
            'Tier-1 deflection rate improved significantly within 8 weeks of deployment. Support team redeployed to complex escalations.',
        kpis: [
            { label: 'Ticket deflection', value: '41%', type: 'measured' },
            { label: 'Time to first response', value: '< 30s', type: 'measured' },
            { label: 'Agent satisfaction', value: '+28 NPS', type: 'measured' },
        ],
    },
    {
        id: 'finance-agent',
        title: 'Finance Reconciliation Agent',
        industry: 'Financial Services',
        badge: 'Agentic Automation',
        problem:
            'Month-end reconciliation took a 3-person team 5 days per cycle, pulling structured and unstructured data across 6 systems.',
        system:
            'Designed a multi-step agentic pipeline: data extraction, classification, variance flagging, and draft report generation. Human review gate on flagged exceptions only.',
        outcome:
            'Cycle time reduced from 5 days to under 1 day. Team now spends time on exception review and analysis rather than extraction.',
        kpis: [
            { label: 'Cycle time reduction', value: '~80%', type: 'measured' },
            { label: 'Exception accuracy', value: '97%', type: 'measured' },
            { label: 'Manual hours saved/month', value: '120 hrs', type: 'target' },
        ],
    },
    {
        id: 'policy-qa',
        title: 'Policy Q&A + Governance Logging',
        industry: 'Insurance / Compliance',
        badge: 'Governance AI',
        problem:
            'Compliance officers spent 30% of their time answering internal policy questions — with no audit trail for answers given.',
        system:
            'Deployed a policy Q&A assistant over a 400-document policy corpus. Every query and response is logged with model version, timestamp, and cited source for audit.',
        outcome:
            'Compliance team recaptured 25+ hours per week. Audit trail is now fully automated and searchable.',
        kpis: [
            { label: 'Hours recaptured/week', value: '25 hrs', type: 'target' },
            { label: 'Query audit coverage', value: '100%', type: 'measured' },
            { label: 'Policy accuracy rating', value: '94%', type: 'measured' },
        ],
    },
]
