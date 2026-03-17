# TEND ALIGNMENT

*Single source of truth for the Tend team and team agents.*
*Updated: March 17, 2026*

---

## How to use this document

This document is meant to do two jobs at once.

- **Humans** should read: **What Tend Is**, **Current State**, **Locked Decisions**, **Offer Structure**, **What Not to Say**, and **Top Priorities**.
- **Agents** should read the whole document.

This is intentional. We are not keeping two parallel docs that drift out of sync. This is the master file.

If you are feeding this to an agent, feed the whole thing.
If you are briefing a teammate, start with Part 1.

### Agent operating rules

If you are an agent reading this document:
1. First determine your audience: **internal** / **prospect** / **client** / **partner**.
2. Default to conservative claims. If you are unsure whether something is live, say it is planned.
3. Never invent capabilities, integrations, certifications, or live status.
4. In any client-facing or prospect-facing output, **never mention** Alfred, Mission Control, Configurator, SupportClaw, Rook, or any internal architecture names unless Thomas explicitly asks you to.
5. Use the **canonical positioning line** below as the default description.

---

# Part 1: Executive Brief

## Canonical positioning

This is the one line. Everyone uses it. Agents default to it.

> **Tend builds, runs, and supports managed AI operators for business workflows.**

**External vocabulary:** AI operator, managed AI operator, workflow operator.
**Internal vocabulary:** agent, sub-agent, orchestrator, factory, manufacturing system.

Do not use internal vocabulary in prospect-facing or client-facing output.

## What Tend is

Tend is a managed AI agent consultancy.

We design, deploy, run, and support AI operators for real business workflows.

We are **not** launching as a SaaS platform.
We are **not** selling generic chatbots.
We are **not** pitching a dashboard product.

That means we identify one painful workflow inside a business, deploy an operator into it with scoped permissions and human oversight, then keep it running.

## What we sell

### Entry offer
**One agent. One workflow. Managed.**

This is the front door.

Examples:
- inbound lead qualification and routing
- meeting prep and follow-up
- support triage
- internal operations coordination
- reporting and status synthesis
- simple CRM / admin workflow handling

### Expansion offer
**Multi-agent system.**

Once the first agent proves value, we expand into a broader system:
- one orchestrator
- multiple specialist agents
- broader workflow coverage
- more integrations
- higher trust / controls / support requirements

We do **not** lead with this. We earn the right to expand.

## Current state

### Live infrastructure
- Tend landing page and intake form on staging VPS (temporary IP, domain routing pending)
- Tend Ops internal dashboard at `/app/`
- SQLite-backed pipeline backend
- Inbound webhook capturing form submissions

### Internally defined
- Strategic analysis V1 and V2 complete
- Pricing, contract structure, and offer scope locked
- Alfred role and responsibilities designed
- Mission Control concept and architecture designed
- Configurator 7-pillar model and 21 modules mapped

### Not yet configured
- Alfred: needs real credentials and deployment
- Telegram lead notifications: not wired
- Domain and routing: staging only
- Landing page copy: not yet updated to match current positioning
- Configurator modules: not yet coded

## Locked Decisions

These are not open for re-debate unless Thomas explicitly changes them.

### Business model
- Tend consultancy is the primary revenue play.
- The product is the output of the agent-building machine, not the machine itself.
- Monday launch path is manual-first.

### Offer and pricing
- Entry offer starts with **one agent**.
- Multi-agent is the **expansion path**, not the required starting point.
- Pricing floor is **$5K setup + $2K/month**.
- Contract is **3 months minimum**.
- Day one payment is **$7K**: setup + month one.
- Offboarding: if a client churns, managed support stops. The deployed agent is not taken down. Client owns their agent workspace and context. Tend retains no ongoing responsibility for unmanaged agents. API keys and model billing transfer to client or get deactivated.

### Internal vs external
- **Mission Control** is internal for now.
- **Alfred** is internal for now.
- **SupportClaw** is internal for now.
- **Configurator** is internal for now.

Clients buy the result, not the internal stack names.

### Positioning
- Use control and security language where it is factual and useful.
- **Allowed claims:** scoped access, approval gates, human oversight, controlled execution, audit-friendly operations, managed deployment.
- **Disallowed claims:** NVIDIA partnership, enterprise compliance certification, SOC2 posture, OpenShell / NemoClaw as something we currently run in production.
- **Ask-Thomas claims:** anything about custom compliance work, regulated industry readiness, enterprise procurement commitments, or bespoke security guarantees.
- OpenShell / NemoClaw may be referenced as **market context and vocabulary**, not as a current Tend deployment.
- Do **not** lean on NVIDIA halo marketing as a crutch.

### Target market
- SMBs, especially mid-market teams with budget and pain.
- Avoid tiny-budget buyers.
- Avoid heavy procurement enterprise deals for now.

## Offer Structure

### Floor offer: $5K setup
Includes:
- discovery and workflow selection for one business function
- workflow map for one primary use case
- deployment of one production agent with a tightly-scoped role
- up to 2 integrations
- one operating channel
- permissions, escalation logic, and approval gates where needed
- context / knowledge setup from SOPs, docs, examples, FAQs
- internal testing, launch, and first-pass tuning
- one team onboarding session

### Managed service: $2K/month
Includes:
- monitoring and operational oversight
- prompt / context / routing tuning
- incident handling and support
- light improvements within original scope
- monthly performance review and recommendations
- human-in-the-loop support for edge cases

### Support boundaries
- Default support channel is whatever Tend and the client agree in writing at onboarding.
- Monthly support covers fixes, tuning, and minor workflow adjustments **inside the original scope**.
- New workflows, new departments, new channels, and new integrations are **not** support. They are expansion work.
- Tend does not promise 24/7 response, enterprise SLAs, or compliance operations at the floor tier.
- If the client needs faster response, wider scope, or higher assurance, that becomes a higher support tier or custom quote.

### Scope and change-order rule
- The floor includes **one workflow**, **one operating channel**, and **up to 2 integrations**.
- Anything beyond that is not a casual add-on.
- Third integration, second workflow, extra channel, major new logic, or cross-department expansion = **change order, expansion package, or custom quote**.
- If a request changes the shape of the system, it changes the price.

### Explicit exclusions from the floor
Not included at $5K / $2K:
- custom client dashboard
- multi-agent deployment
- broad cross-department automation
- net-new software product development
- large integration programs
- enterprise compliance / procurement requirements
- "replace your whole team" promises

The rule is simple: **The floor sells one controlled workflow that actually ships.**

## What Not To Say

**Do not say:**
- “Fully autonomous business”
- “Enterprise-grade compliance”
- “Powered by NVIDIA” as if we are an official partner
- “Mission Control dashboard for every client”
- “Custom AI system for anything you want” at the floor price

**Do say:**
- controlled execution
- scoped access
- approval gates
- human oversight
- audit-friendly operations
- managed deployment
- one workflow first, expansion second

### Client-facing forbidden names
Unless Thomas explicitly asks otherwise, client-facing and prospect-facing materials must **not** mention:
- Alfred
- Mission Control
- Configurator
- SupportClaw
- Rook
- factory / manufacturing system / internal stack language

## Top Priorities Now

1. Rewrite the landing page around the real offer.
2. Finalize the floor offer one-pager and exclusions.
3. Configure Alfred with real credentials.
4. Wire inbound lead notifications properly.
5. Use Mission Control internally with real pipeline activity.
6. Publish a methodology page that builds trust without exposing the factory.
7. Tighten the Tend delivery model around one shipped workflow, not vague AI transformation.

---

# Part 2: Full Alignment Reference

## 1. Why Tend exists

Tend exists because the real opportunity is not building cool agents for ourselves forever.
The real opportunity is selling the capability to design, deploy, operate, and support them for other businesses.

The consultancy is the primary money path.
Internal ventures like PLAY, FUTR, SKYLRK, and others are experiments.
Tend is the commercial layer around the machine we have been building internally.

That machine includes:
- agent design
- operating docs
- deployment patterns
- memory systems
- monitoring
- support posture
- context systems
- business logic

The stronger our own operating stack becomes, the stronger Tend becomes.

## 2. Tend trajectory so far

### Phase 1: early consultancy instinct
Tend started as the obvious commercialization of Rook’s capability.
The first framing was loose: AI agents for businesses.
The instinct was right. The framing was immature.

### Phase 2: delivery and support questions emerge
As the idea got more real, the hard questions showed up:
- what is actually being sold?
- what justifies monthly recurring revenue?
- what does support look like?
- what needs to be productized vs kept internal?

This is when Configurator, SupportClaw, Alfred, and MC started converging.

### Phase 3: system convergence
By March 10 to March 16, Tend stopped being just a loose consultancy idea.
It became a stack:
- landing page
- orchestrator concept
- dashboard / ops layer
- build factory concept
- pricing and contract logic
- internal support model

### Phase 4: live infrastructure
Tend Ops was deployed to the VPS.
The landing page, intake flow, and SQLite pipeline became real.
This matters. Tend is no longer just slides and ideas.
It has operating infrastructure.

### Phase 5: positioning upgrade
NemoClaw and OpenShell sharpened the vocabulary.
Not because we need to bet the company on day-zero software, but because they validate where the market is going:
- trust
- permissions
- sandboxing
- auditability
- controlled routing
- enterprise control language

The right move is to borrow the language honestly, not borrow authority we do not have.

## 3. Current strategic position

Tend is best understood as:

> a managed AI workflow operator business

The public story should stay simple.
The internal system can be sophisticated.

### Public story
- we identify one painful workflow
- we deploy one controlled AI operator into it
- we run and support it with human oversight
- we expand once value is proven

### Current trust posture
What is true today:
- human oversight is part of the operating model
- permissions and approval logic are scoped during deployment
- Tend is intentionally conservative about what it claims

What is **not** true today:
- enterprise compliance certification
- OpenShell / NemoClaw production deployment by default
- formal enterprise audit trail productization
- 24/7 enterprise support posture at the floor tier

### Internal reality
Behind the scenes, Tend is building toward:
- orchestrated multi-agent delivery
- repeatable manufacturing via Configurator
- internal control and visibility via Mission Control
- support continuity via a SupportClaw-style function
- stronger trust posture over time

## 4. What Tend sells right now

### 4.1 Entry offer
The default offer is **single-agent deployment**.

What the client thinks they are buying:
- one agent
- one workflow
- one scoped use case
- managed setup and support

What Tend is actually delivering:
- workflow design
- permissions logic
- context and knowledge setup
- channel deployment
- integrations
- testing and tuning
- monitoring
- human oversight

This is the right entry offer because it lowers friction, shortens the sales cycle, and makes ROI easier to prove.

### 4.2 Expansion offer
The recommended upgrade is a **multi-agent system**.

This is the account expansion path after the first agent works.
A broader client system can include:
- one orchestrator
- 2 to 3 specialist agents
- cross-workflow coordination
- broader tool integrations
- higher support tiers
- internal operating visibility

This is where ACV goes up.
But the mistake would be forcing this complexity on day one.

## 5. Exact commercial structure

### Pricing
- **Setup:** $5,000 minimum
- **Monthly:** $2,000 minimum
- **Term:** 3 months minimum
- **Day one payment:** $7,000
- **Minimum total deal:** $11,000

### Why setup is separate
Week 1 is heavy:
- discovery
- workflow mapping
- permissions design
- context setup
- testing
- integration
- first tuning pass

That intensity is what the setup fee pays for.

### Why monthly exists
Monthly is not “hosting.”
Monthly is:
- monitoring
- improvements
- operational support
- exception handling
- trust maintenance
- prompt / context / routing tuning

Support is not an add-on. Support is part of the business.

### Hosting, ownership, and offboarding
Tend can operate in three modes:
1. **Tend-hosted managed** — Tend runs and supports the deployment.
2. **Client-owned with Tend support** — client owns the environment, Tend supports it.
3. **Terminated / unsupported** — client keeps what was delivered, but Tend is no longer responsible for operation, uptime, fixes, or model billing.

Default rule:
- if support ends, Tend support obligations end
- unmanaged systems run at client risk
- credentials and billing either transfer to client control or get shut off
- any reactivation after churn is a new scoped engagement

## 6. Methodology

This is the public methodology Tend can share at a high level.

### Step 1: Select the workflow
Find a workflow with:
- pain
- repetition
- clear inputs and outputs
- enough value to matter
- manageable risk

### Step 2: Scope the agent
Define:
- what the agent does
- what it does not do
- what tools it can touch
- what needs human approval
- what counts as success

### Step 3: Deploy the system
Set up:
- channel
- context
- integrations
- permissions
- operating rules
- escalation logic

### Step 4: Run with oversight
Operate the agent with:
- monitoring
- support
- tuning
- review loops
- exception handling

### Step 5: Expand only after proof
Once the first workflow proves itself:
- add more scope
- add specialist agents
- add orchestration
- raise ACV

This is the right methodology because it is controlled, legible, and sellable.

## 7. Internal stack and what each piece means

### Alfred
Alfred is internal.
Alfred is the internal orchestrator role played by an agent.

Alfred’s likely responsibilities:
- inbound lead triage
- meeting prep
- morning brief
- pipeline tracking
- follow-up support
- ad anomaly flagging
- operational summaries

Alfred is **not** a public brand right now.
Clients do not need to know the internal agent names.

### Tend surfaces and internal tools
- **Tend landing page** = marketing and intake surface
- **Tend Ops** = internal operating dashboard for Tend pipeline and activity
- **Mission Control** = broader internal operating system and control surface
- **Alfred** = internal operator / orchestrator role

### Mission Control
Mission Control is internal for now.
It is not the product being sold.

Its role:
- internal visibility
- pipeline tracking
- operational surface
- auditability over time
- team coordination
- proof that we run Tend on our own system

### Configurator
Configurator is the internal manufacturing system.
It assembles repeatable client agent workspaces and deployments.

7-pillar model:
- Identity
- Context
- Channels
- Models
- Skills
- Memory
- Security

### Support function
SupportClaw as a public brand is dead for now.
The support function remains crucial.

Publicly, this shows up as:
- support
- monitoring
- continuity
- improvements

## 8. Target market

Best target right now:
- SMBs
- especially mid-market teams
- teams with budget and obvious workflow pain
- operators, founders, heads of ops, overloaded teams

Bad targets right now:
- tiny businesses with no budget
- massive enterprises with long procurement cycles
- buyers looking for magic instead of operational leverage

## 9. NemoClaw / OpenShell position

Our current position is simple:

- OpenShell is interesting and strategically relevant.
- It strengthens the language around permissions, sandboxing, auditability, and controlled execution.
- It is not yet the right thing to force into our own stack as a default.
- It absolutely belongs in the Tend toolkit and future enterprise story.

So the right use is:
- adopt the vocabulary where it is factual
- treat it as market context, not current production reality
- do not pretend we are an exclusive NVIDIA partner
- do not imply OpenShell / NemoClaw integration unless explicitly confirmed
- use the concepts to sell trust
- build toward actual OpenShell integration when it leaves preview