/**
 * Mock Opportunity Mapper generator.
 * Maps form input combinations to pre-written structured output.
 * Deterministic enough to feel real during demos.
 */

const FAST_WINS = {
    cost: [
        { title: 'Invoice Processing Automation', description: 'Automate structured document intake with an LLM extraction pipeline, cutting manual review by ~70%.', tags: ['RAG', 'Cost', 'Quick Win'] },
        { title: 'Internal FAQ Chatbot', description: 'Deploy a knowledge retrieval assistant over your internal docs to deflect Tier-1 support queries.', tags: ['RAG', 'Cost', 'Support'] },
    ],
    time: [
        { title: 'Meeting Summary + Action Tracker', description: 'Transcribe and summarise meetings automatically; extract action items and push to your task system.', tags: ['Automation', 'Time', 'Quick Win'] },
        { title: 'Draft Generation for Reports', description: 'Generate first-draft reports from structured data inputs, cutting writing time by ~60%.', tags: ['LLM', 'Time'] },
    ],
    revenue: [
        { title: 'Lead Enrichment Agent', description: 'Automatically research and score inbound leads using public signals, feeding richer data to your CRM.', tags: ['Agentic', 'Revenue'] },
        { title: 'Proposal Personalisation', description: 'Generate custom proposal sections based on CRM firmographics and past engagement signals.', tags: ['LLM', 'Revenue', 'Quick Win'] },
    ],
    quality: [
        { title: 'Automated QA Checklist', description: 'Run AI-driven checklist verification on outputs before delivery, reducing human error.', tags: ['Evaluation', 'Quality'] },
        { title: 'Policy Compliance Screener', description: 'Screen documents against a policy ruleset in real time before submission or publication.', tags: ['Governance', 'Quality'] },
    ],
}

const PLATFORM_PLAYS = [
    { title: 'Enterprise Knowledge Base (RAG)', description: 'Build a retrieval-augmented generation layer over your document corpus for accurate, citable answers at scale.', tags: ['RAG', 'Platform'] },
    { title: 'Agentic Workflow Orchestration', description: 'Chain LLM reasoning with tool calls and API integrations to automate multi-step business workflows end-to-end.', tags: ['Agentic', 'Platform'] },
    { title: 'MLOps & Evaluation Infrastructure', description: 'Instrument your AI pipelines with evals, monitoring dashboards, and guardrails before you scale.', tags: ['MLOps', 'Reliability'] },
]

const GOVERNANCE_CHECKS = {
    high: [
        'Define acceptable use policy before deployment',
        'Implement output logging and human review gates',
        'Run adversarial red-teaming on user-facing features',
        'Certify data retention and deletion procedures',
        'Disclose AI-generated content to end users',
    ],
    medium: [
        'Document model families and versions in use',
        'Establish eval benchmarks before go-live',
        'Review vendor data handling policies',
    ],
    low: [
        'Add AI-assisted badges to visible outputs',
        'Schedule quarterly model performance review',
    ],
}

/**
 * Generates a mock opportunity map from form input.
 * @param {Object} formData
 * @returns {{ fastWins, platformPlays, governanceChecks, roiAssumptions }}
 */
export function generateOpportunityMap(formData) {
    const { targetOutcomes = ['cost'], riskSensitivity = 'medium' } = formData

    // Pick fast wins based on first selected outcome
    const outcomeKey = Array.isArray(targetOutcomes) ? targetOutcomes[0] : targetOutcomes
    const fastWins = FAST_WINS[outcomeKey] || FAST_WINS.cost

    // Pick 2 platform plays
    const platformPlays = PLATFORM_PLAYS.slice(0, 2)

    // Governance checks based on risk sensitivity
    const governanceChecks = GOVERNANCE_CHECKS[riskSensitivity] || GOVERNANCE_CHECKS.medium

    const roiAssumptions = [
        { label: 'Estimated time saved per week', value: '12–20 hours', type: 'target' },
        { label: 'Cost reduction (Tier-1 support)', value: '30–50%', type: 'target' },
        { label: 'Prototype-to-production timeline', value: '6–10 weeks', type: 'target' },
    ]

    return { fastWins, platformPlays, governanceChecks, roiAssumptions }
}
