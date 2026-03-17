# Agent Build SOP — Step by Step

*From approved brief to live agent. This is the production line.*
*Thomas owns architecture decisions. Alfred handles scaffolding and monitoring.*

---

## Overview

| Phase | Duration | Owner | Gate |
|-------|----------|-------|------|
| 1. Brief Review | 1-2 hours | Thomas | Brief accuracy confirmed |
| 2. Spec Generation | 2-4 hours | Rook + Configurator | Spec reviewed by Thomas |
| 3. Workspace Scaffold | 1-2 hours | Rook | All files generated |
| 4. SOUL & Identity | 2-3 hours | Thomas + Rook | Client approves personality |
| 5. Skills & Integrations | 2-4 hours | Rook | All tools connected |
| 6. Testing | 4-8 hours | Thomas + Rook | 20+ scenarios pass |
| 7. Deploy | 1-2 hours | Rook | Agent live on client infra |
| 8. Handoff | 45 min call | Thomas | Client sign-off |

**Total: 5-8 working days.** Promise clients "1-2 weeks" to leave buffer.

---

## Phase 1: Brief Review

**Input:** Completed discovery form (I-07) + Fathom transcript

**Steps:**
1. Read the discovery form cover to cover
2. Cross-reference with Fathom transcript — did we miss anything?
3. Identify the **top 3 capabilities** the agent needs (not everything — the 3 that solve 80% of their pain)
4. Flag any scope creep risks — things the client mentioned casually that could balloon
5. Confirm integration requirements — do their tools have APIs? Are we going to hit walls?
6. Write a 1-paragraph "Agent Mission Statement" — what this agent exists to do

**Output:** Annotated brief with priorities, risks, and mission statement

**Quality Gate:** Thomas reviews. If the brief doesn't clearly answer "what does this agent do and why?" — it goes back.

---

## Phase 2: Spec Generation

**Input:** Approved brief + Agent Configurator

**Steps:**
1. Feed brief into Configurator's 7-Pillar framework
2. Generate module selections:
   - **Identity:** Name, persona, tone (from client's brand)
   - **Context:** Business rules, pricing, team info, processes
   - **Channels:** Where the agent lives (Telegram, email, SMS, web widget)
   - **Models:** Sonnet for daily ops, Gemini Flash for crons, Opus for weekly strategy (default stack unless client needs differ)
   - **Skills:** Map capabilities to installed skills + identify gaps
   - **Memory:** Cortex config (entity types, recall strategies relevant to their domain)
   - **Security:** David's template v1.2, adapted per client (data handling, escalation rules, rate limits)
3. Run gap analysis — what skills need building vs. what exists?
4. Estimate build hours for custom work
5. Generate the full spec document

**Output:** `CLIENT-SPEC.md` — complete technical specification

**Quality Gate:** Thomas reviews spec. Every module must have a clear "why." No speculative features.

---

## Phase 3: Workspace Scaffold

**Input:** Approved spec

**Steps:**
1. Run `assemble.mjs` with the spec — generates the workspace directory
2. Verify all files generated:
   - `AGENTS.md` — agent operating instructions
   - `SOUL.md` — personality and behavior
   - `USER.md` — client profile (pre-filled from discovery)
   - `MEMORY.md` — initialized with business context
   - `HEARTBEAT.md` — monitoring routine
   - `TOOLS.md` — local environment notes
   - `IDENTITY.md` — agent identity card
   - `openclaw.json` — gateway configuration
   - `lanes/` — lane files (operations, clients, admin — varies by client)
   - `scripts/` — guardian.sh, any custom scripts
   - `skills/` — custom skills if needed
3. Copy security template sections into relevant files
4. Set up Git repo for workspace backup
5. Verify `openclaw.json` is valid (run schema validation)

**Output:** Complete workspace directory ready for customization

**Quality Gate:** All files present. Config validates. Git initialized.

---

## Phase 4: SOUL & Identity

**Input:** Scaffolded workspace + client brand materials

**Steps:**
1. Write `SOUL.md` — this is the most important file in the whole build
   - Personality: Match the client's brand voice (formal? casual? playful?)
   - Boundaries: What the agent can and can't do
   - Escalation triggers: When to hand off to a human
   - Communication style: How it talks to their clients vs. internal team
2. Write `USER.md` — profile of the primary human(s) who'll interact with the agent
3. Write `IDENTITY.md` — name, role, avatar description, channel identities
4. **Client approval step:** Share SOUL.md with client (cleaned version, no technical details). Ask: "Does this sound like someone you'd want representing your business?"

**This is where 90% of "bad agent" problems originate.** A weak SOUL means a generic agent. A strong SOUL means the agent feels like part of their team.

**Output:** Finalized SOUL.md, USER.md, IDENTITY.md

**Quality Gate:** Client explicitly approves the personality. Not "looks fine" — actually reads it and says yes.

---

## Phase 5: Skills & Integrations

**Input:** Spec module list + client tool credentials

**Steps:**
1. Install required skills from catalog
2. For each integration:
   - Get API credentials from client (send secure form, never ask over email)
   - Test connection in isolation
   - Document in TOOLS.md (what it connects to, any quirks)
3. Configure channels:
   - Telegram: Create bot via BotFather, set webhook
   - Email: IMAP/SMTP config (if applicable)
   - Web widget: Generate embed code (if applicable)
4. Set up crons:
   - Morning brief (if included in scope)
   - Monitoring/patrol (always)
   - Any recurring tasks (appointment reminders, report generation)
5. Configure model routing in `openclaw.json`
6. Set up Guardian watchdog in crontab

**Credential handling rules:**
- Client sends creds via secure link (not email, not Telegram)
- Store in `~/.openclaw/secrets/` with client prefix
- Never commit to Git
- Document what each cred is for in TOOLS.md (without the actual values)

**Output:** All integrations live and tested individually

**Quality Gate:** Every tool returns data. Every channel sends/receives. Every cron fires.

---

## Phase 6: Testing

**Input:** Fully configured workspace

**The 20-Scenario Test:**

| # | Category | Test | Pass? |
|---|----------|------|-------|
| 1 | Lead response | New lead comes in → agent responds within 5 min | |
| 2 | Lead response | Lead asks off-script question → agent handles gracefully | |
| 3 | Lead response | Lead is abusive/spam → agent disengages politely | |
| 4 | Booking | Client requests appointment → agent books correctly | |
| 5 | Booking | Double-booking attempt → agent catches conflict | |
| 6 | Booking | Client cancels → agent confirms and offers reschedule | |
| 7 | Follow-up | 48h after no response → agent sends follow-up | |
| 8 | Follow-up | Client says "not now" → agent schedules future check-in | |
| 9 | Escalation | Complex question beyond scope → agent escalates to human | |
| 10 | Escalation | Urgent issue → agent flags immediately (not queued) | |
| 11 | Reporting | Morning brief generates correctly with real data | |
| 12 | Reporting | Weekly summary is accurate and readable | |
| 13 | Security | Prompt injection attempt → agent rejects | |
| 14 | Security | Request for internal data → agent refuses | |
| 15 | Security | Impersonation attempt → agent doesn't comply | |
| 16 | Recovery | Agent crashes → Guardian restarts within 5 min | |
| 17 | Recovery | Bad config pushed → Guardian rolls back | |
| 18 | Memory | Agent remembers context from previous conversation | |
| 19 | Memory | Agent doesn't hallucinate client details | |
| 20 | Tone | 5 sample conversations reviewed — agent sounds like SOUL.md | |

**Custom scenarios:** Add 5-10 industry-specific tests per client.

**Output:** Test log with pass/fail for all scenarios

**Quality Gate:** All 20 core scenarios pass. Any fail = fix before deploy. No exceptions.

---

## Phase 7: Deploy

**Input:** All tests passing

**Steps:**
1. Deploy to target environment:
   - **VPS clients:** Provision droplet (DO or Hetzner), install OpenClaw, push workspace
   - **Our VPS clients:** Deploy to Tend's shared infrastructure (separate workspace per client)
2. Configure DNS/domain if needed
3. Set up monitoring:
   - Guardian watchdog (every 5 min)
   - Alert channel (Thomas gets critical alerts for first month)
4. Enable all channels (go live on Telegram, email, etc.)
5. Run 3 smoke tests in production environment
6. Take a snapshot (backup before handoff)

**Deploy checklist:**
- [ ] Agent responds on all configured channels
- [ ] Guardian running and tested
- [ ] Backup working
- [ ] Monitoring alerts reaching Thomas
- [ ] Credentials verified in production
- [ ] HTTPS/security configured

**Output:** Live agent in production

**Quality Gate:** All smoke tests pass in prod. Different from staging — always verify.

---

## Phase 8: Handoff

**Input:** Live agent + handoff call scheduled

**The 45-Minute Handoff Call:**

**Minutes 1-5:** "Here's your agent."
- Show the agent responding live
- Demonstrate the personality matches what they approved

**Minutes 5-20:** "Here's what it does."
- Walk through each capability with real examples
- Show them the morning brief / summary reports
- Demonstrate escalation flow ("when it bumps something to you, here's what that looks like")

**Minutes 20-30:** "Here's how you interact with it."
- How to message the agent
- How to give it feedback ("say 'that was wrong' and it adjusts")
- How to reach us if something's off

**Minutes 30-40:** "Here's the support plan."
- First 48 hours: we check on it hourly
- First week: daily check-in
- First month: weekly call
- After month 1: monthly strategy call
- Emergency: Thomas's direct line

**Minutes 40-45:** Questions + Sign-off
- Client signs off on delivery
- Set first weekly check-in date
- Alfred sends recap email within 1 hour

**Output:** Client sign-off. First check-in scheduled.

**Quality Gate:** Client verbally confirms they understand how to use the agent and who to contact if something goes wrong.

---

## Post-Handoff Monitoring (First 30 Days)

| Timeframe | Check Frequency | Owner | What to Check |
|-----------|----------------|-------|---------------|
| Days 1-2 | Every 2 hours | Rook | Response quality, errors, escalation accuracy |
| Days 3-7 | Daily morning | Alfred | Performance summary, any client complaints |
| Days 8-14 | Every other day | Alfred | Usage patterns, edge cases, adjustment needs |
| Days 15-30 | Weekly | Alfred + Thomas | Optimization opportunities, client satisfaction |
| Month 2+ | Monthly call | Thomas | Strategy review, capability expansion, renewal |

**Escalation during monitoring:**
- ⚠️ Agent gives wrong answer → Fix immediately, notify client
- 🔴 Agent goes down → Guardian handles restart, notify client if >15 min downtime
- 🟡 Client feedback → Log, adjust within 24h, confirm fix with client

---

*Version 1.0 — Mar 12, 2026*
*This SOP is the backbone of Tend's delivery. Every agent ships through this pipeline. No shortcuts.*
