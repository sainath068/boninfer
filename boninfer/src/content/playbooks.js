/** Prompt Playbooks data — grouped by role */
export const playbooks = [
    {
        id: 'ceo-strategy-brief',
        role: 'CEO/Leadership',
        title: 'AI Opportunity Brief',
        goal: 'Generate an executive-ready summary of AI opportunities in a given business domain.',
        prompt: `You are an AI strategy advisor. Given the following business context, identify the top 3 AI opportunities ranked by value and feasibility.

Business context:
- Industry: {{industry}}
- Current pain point: {{pain_point}}
- Data availability: {{data_availability}}
- Budget horizon: {{budget_horizon}}

For each opportunity provide:
1. Opportunity name
2. Value driver (cost / revenue / quality / time)
3. Feasibility score (High / Medium / Low)
4. Minimum viable system description
5. Key risk to mitigate`,
        exampleInput: `Industry: Insurance. Pain point: Manual claims triage taking 5-7 days. Data: Structured claims history (3 years). Budget: 6-month pilot.`,
        exampleOutput: `**Opportunity 1: Claims Triage Automation**
Value driver: Time + Cost
Feasibility: High
System: Fine-tuned classifier on historical claims + routing rules engine. 
Risk: Model bias in edge-case claim types — requires human review gate.

**Opportunity 2: Policy Q&A Assistant**
Value driver: Quality + Time
Feasibility: High
System: RAG over policy corpus, source-cited answers, compliance logging.
Risk: Answer accuracy; needs evaluation framework from day one.

**Opportunity 3: Fraud Signal Detector**
Value driver: Cost + Quality
Feasibility: Medium
System: Anomaly detection layer over structured claims + network graph.
Risk: High false positive rate — calibrate threshold carefully.`,
        howToEvaluate: [
            'Check: are all 3 opportunities grounded in the stated data availability?',
            'Check: is the feasibility rating justified by the system description?',
            'Check: does each risk map to a concrete mitigation?',
            'Reject: generic opportunities not tailored to the industry context.',
        ],
    },
    {
        id: 'product-prd-assist',
        role: 'Product',
        title: 'AI Feature PRD Assistant',
        goal: 'Draft an AI feature section for a PRD with trust and transparency requirements.',
        prompt: `You are a product manager drafting an AI feature for {{product_name}}. 

Feature description: {{feature_description}}
Target user: {{target_user}}
Model capability: {{model_capability}}

Write a PRD section including:
1. Problem statement
2. User story (As a... I want... So that...)
3. AI behaviour spec (inputs, outputs, failure modes)
4. Trust & disclosure requirements
5. Success metrics
6. Out of scope`,
        exampleInput: `Product: HR platform. Feature: Auto-suggest job descriptions. User: HR manager. Model: GPT-4 class.`,
        exampleOutput: `**Problem statement:** HR managers spend 45 min per job description; quality is inconsistent across teams.

**User story:** As an HR manager, I want AI-suggested JD drafts so that I can produce consistent, inclusive job descriptions in under 10 minutes.

**AI behaviour spec:**
- Inputs: Job title, seniority, department, key responsibilities (bullets)
- Outputs: 400-word JD draft, bias-flagged terms highlighted
- Failure modes: Hallucinated skills, biased language — mitigated by bias classifier + human edit gate

**Trust & disclosure:** Output must be labelled "AI draft — review required". Bias flags must be visible before publishing.

**Success metrics:** Time-to-publish < 15 min; inclusive language score ≥ 85%; editor satisfaction ≥ 4/5.`,
        howToEvaluate: [
            'Does the behaviour spec cover all failure modes?',
            'Is the disclosure requirement concrete (not just "add a label")?',
            'Are success metrics measurable?',
        ],
    },
    {
        id: 'eng-eval-plan',
        role: 'Engineering',
        title: 'LLM Evaluation Plan',
        goal: 'Design an evaluation framework for an LLM-powered feature before production.',
        prompt: `You are a senior ML engineer. Design an evaluation plan for the following LLM feature.

Feature: {{feature_description}}
Model: {{model_name}}
Output type: {{output_type}} (e.g. classification / generation / retrieval)
Risk level: {{risk_level}} (low / medium / high)

Provide:
1. Evaluation dimensions (with descriptions)
2. Test dataset requirements
3. Automated metrics to use
4. Human eval protocol
5. Go/no-go thresholds
6. Monitoring plan post-launch`,
        exampleInput: `Feature: RAG-based policy Q&A. Model: GPT-4o. Output: Retrieval + generation. Risk: High (compliance).`,
        exampleOutput: `**Evaluation dimensions:**
- Faithfulness: answer supported by retrieved context (no hallucination)
- Relevance: context retrieved matches query intent
- Completeness: answer covers all required policy points
- Safety: no harmful or non-compliant content generated

**Test dataset:** 200 QA pairs (100 synthetic, 100 human-authored from compliance team).

**Automated metrics:** RAGAS faithfulness ≥ 0.85, context recall ≥ 0.80.

**Human eval:** 50 random samples reviewed by compliance officer weekly. Target: 90%+ rated accurate.

**Go/no-go:** RAGAS faithfulness < 0.80 = block deployment.

**Monitoring:** Log every query + response. Weekly sampling review. Alert on faithfulness drift > 5%.`,
        howToEvaluate: [
            'Does the eval cover faithfulness, not just accuracy?',
            'Is the test dataset realistic for the domain?',
            'Are thresholds set before (not after) seeing results?',
        ],
    },
    {
        id: 'ops-sop-automation',
        role: 'Operations',
        title: 'SOP Automation Scope',
        goal: 'Identify which parts of an operational SOP are safe to automate with AI.',
        prompt: `You are an operations consultant reviewing an SOP for AI automation potential.

SOP name: {{sop_name}}
Steps: {{sop_steps}}
Volume: {{volume_per_week}} executions/week
Risk classification: {{risk_level}}

For each step, classify as:
- AUTOMATE: safe to fully automate
- AUGMENT: AI assists, human decides  
- HUMAN-ONLY: keep human in loop

Provide rationale and risk note for each classification.`,
        exampleInput: `SOP: Vendor invoice approval. Steps: Receive invoice, extract data, match to PO, flag variance, route for approval, log in ERP. Volume: 500/week. Risk: Medium.`,
        exampleOutput: `Step 1 — Receive invoice: AUTOMATE (structured intake, no judgment needed)
Step 2 — Extract data: AUTOMATE (LLM extraction with field validation)
Step 3 — Match to PO: AUTOMATE (rules engine + fuzzy match; confidence-gated)
Step 4 — Flag variance: AUGMENT (AI flags, human reviews flagged items)
Step 5 — Route for approval: AUTOMATE (rules-based routing on variance size)
Step 6 — Log in ERP: AUTOMATE (API write after human approval)`,
        howToEvaluate: [
            'Is every AUTOMATE classification backed by a confidence threshold?',
            'Are high-risk decisions kept as HUMAN-ONLY or AUGMENT?',
            'Is the volume justifying automation cost?',
        ],
    },
    {
        id: 'compliance-disclosure',
        role: 'Compliance',
        title: 'AI Disclosure Statement Generator',
        goal: 'Draft a user-facing AI disclosure statement for a specific product feature.',
        prompt: `You are a compliance officer drafting AI disclosure language for a regulated product.

Feature: {{feature_name}}
AI involvement: {{ai_involvement}} (e.g. "generates draft content reviewed by humans")
Data used: {{data_used}}
Model provider: {{model_provider}}
Jurisdiction: {{jurisdiction}}

Write:
1. Short in-product disclosure (≤ 2 sentences, plain English)
2. Extended disclosure (for privacy policy / governance page)
3. Limitations to communicate to users`,
        exampleInput: `Feature: AI-generated insurance quote summary. AI: Generates summary from structured quote data, reviewed by agent. Data: Policy details, pricing data. Provider: OpenAI. Jurisdiction: UK.`,
        exampleOutput: `**Short disclosure:** "This summary was generated by AI using your quote details and reviewed by our team before delivery. It may not cover all policy nuances — speak to your advisor for full terms."

**Extended disclosure:** This feature uses a large language model (OpenAI GPT-4 family) to generate plain-English summaries from structured quote data. All outputs are reviewed by a licensed agent before delivery to the customer. No personally identifiable financial data is retained by the model provider beyond the session. This feature is governed by our AI Use Policy [link].

**Limitations:** AI summaries may simplify complex policy exclusions. Always read the full policy document. This summary does not constitute financial advice.`,
        howToEvaluate: [
            'Is the short disclosure legible to a non-technical user?',
            'Does the extended disclosure name the model provider?',
            'Are limitations stated plainly, not buried in legal language?',
        ],
    },
]
