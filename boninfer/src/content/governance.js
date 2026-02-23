/** Governance page content blocks */
export const governanceContent = {
    disclosure: {
        title: 'AI Content Disclosure',
        summary: 'We are transparent about where AI assists our work.',
        items: [
            {
                label: 'AI-assisted content',
                description:
                    'Some content on this site — including AI Studio outputs, case summaries, and prompt examples — is generated with AI assistance. These are clearly labelled with an "AI-assisted" badge.',
            },
            {
                label: 'Human review',
                description:
                    'All customer-facing content, case studies, and service descriptions are reviewed and approved by a human editor before publication. Human-reviewed content carries a "Human-reviewed" badge.',
            },
            {
                label: 'No hidden AI',
                description:
                    'We do not publish AI-generated content without disclosure. If something is AI-assisted, we say so.',
            },
        ],
    },
    dataHandling: {
        title: 'Data Handling & Retention',
        summary: 'What we collect, why, and how long we keep it.',
        items: [
            {
                label: 'Opportunity Mapper inputs',
                description:
                    'Form inputs to the Opportunity Mapper are used solely to generate your output in-session. We do not store your inputs beyond the browser session unless you explicitly save them.',
            },
            {
                label: 'Contact form data',
                description:
                    'Contact submissions are stored in our CRM for up to 24 months or until you request deletion. We do not sell or share contact data with third parties.',
            },
            {
                label: 'Analytics',
                description:
                    'We use privacy-respecting analytics (no cross-site tracking, no fingerprinting). You can opt out via your browser settings.',
            },
            {
                label: 'Data deletion',
                description:
                    'To request deletion of your data, email privacy@boninfer.com. We will respond within 30 days.',
            },
        ],
    },
    modelMetadata: {
        title: 'Model Metadata',
        summary: 'What AI models we use and their known limitations.',
        items: [
            {
                label: 'Opportunity Mapper',
                provider: 'Mock (demo mode)',
                family: 'Deterministic rule-based generator',
                limitations: 'Outputs are illustrative, not tailored to your specific organisation. Use as a starting point only.',
            },
            {
                label: 'Future AI features',
                provider: 'To be disclosed at feature launch',
                family: 'To be disclosed at feature launch',
                limitations: 'All future AI features will disclose model provider, version, and known limitations at launch.',
            },
        ],
    },
    riskControls: [
        {
            pillar: 'Govern',
            icon: 'Shield',
            description: 'Policies, roles, and oversight structures for AI use.',
            controls: [
                'AI Acceptable Use Policy (internal)',
                'Designated AI Review Board',
                'Vendor due diligence checklist',
                'Incident escalation procedure',
            ],
        },
        {
            pillar: 'Map',
            icon: 'Map',
            description: 'Inventory and risk-classify every AI use case.',
            controls: [
                'Use-case register with risk tier',
                'Data sensitivity classification per use case',
                'Third-party model dependency mapping',
            ],
        },
        {
            pillar: 'Measure',
            icon: 'BarChart2',
            description: 'Define metrics and evaluate AI system performance.',
            controls: [
                'Accuracy and faithfulness benchmarks',
                'Bias and fairness audits (semi-annual)',
                'User satisfaction tracking for AI features',
                'Hallucination rate monitoring',
            ],
        },
        {
            pillar: 'Manage',
            icon: 'Settings',
            description: 'Respond to risks and improve continuously.',
            controls: [
                'Red-teaming schedule for high-risk features',
                'Automated output monitoring + alerts',
                'Quarterly model update review',
                'User feedback loop for AI outputs',
            ],
        },
    ],
    security: {
        title: 'Security',
        summary: 'High-level security controls and how to reach us.',
        items: [
            'All data encrypted in transit (TLS 1.2+) and at rest.',
            'Access to customer data is role-based and logged.',
            'We follow responsible disclosure — contact security@boninfer.com.',
            'Penetration testing conducted annually by a third-party firm.',
        ],
        contact: 'security@boninfer.com',
    },
}
