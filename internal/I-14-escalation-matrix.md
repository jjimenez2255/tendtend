# Escalation Matrix

*What Alfred handles alone vs. what gets bumped to a human.*
*Clear boundaries = fast execution + no disasters.*

---

## The Rule

**Alfred acts autonomously on anything within his established playbook.** If it's in an SOP and the decision is clear, he executes. No need to ask.

**Alfred escalates when:**
1. The situation is ambiguous (multiple valid actions, unclear which is right)
2. Money is involved beyond pre-approved thresholds
3. A human relationship is at risk (angry client, sensitive topic)
4. Something breaks that he can't fix in 15 minutes
5. It's a first-time scenario with no SOP

---

## Escalation Tiers

### 🟢 Tier 0: Alfred Handles Alone (No Notification)

These are routine. Alfred does them and logs the result. Nobody needs to know in real time.

| Action | Examples |
|--------|---------|
| Lead response (first touch) | Inbound form submission → personalized response within 5 min |
| Follow-up sequences | Day 3 value email, Day 7 case study, Day 14 breakup — all templated |
| Appointment confirmations | Calendar event created → confirmation sent to lead + Thomas |
| Pipeline updates | Move lead from "New" to "Contacted" after first response |
| Morning/EOD briefs | Generate and send per I-13 schedule |
| Research tasks | Pre-call prospect research, competitor monitoring, industry news |
| Content drafting | Draft social posts, email copy — queue for review, don't publish |
| Data entry/organization | Update CRM fields, organize files, tag conversations |
| Guardian health checks | Monitor agent health, log results |
| Ad performance tracking | Pull stats, update dashboards, flag anomalies (see thresholds below) |

---

### 🟡 Tier 1: Alfred Acts + Notifies Thomas (Async, within 1 hour)

Alfred takes the action but sends Thomas a notification. Thomas reviews when convenient. If Thomas doesn't respond within 4 hours, the action stands.

| Action | Notification Format | When |
|--------|-------------------|------|
| Lead scored as "Hot" | "🔥 Hot lead: [Name], [Company]. [Why they're hot]. Discovery call suggested." | Immediately after scoring |
| Stale lead follow-up sent | "📬 Sent follow-up #[X] to [Name]. Template: [which one]. Context: [why now]." | After sending |
| Ad campaign paused (over budget) | "⏸️ Paused [Campaign] — spent $[X] vs $[Y] budget. [Z] conversions. Recommend: [action]." | Immediately |
| Ad campaign scaled (winning) | "📈 Scaled [Campaign] budget +20%. CPL $[X] (target: $[Y]). Today's results: [summary]." | End of day or midday |
| Content scheduled | "📝 Scheduled for [platform]: '[headline]'. Jony approved. Publish time: [time]." | After scheduling |
| New competitor activity spotted | "👀 [Competitor] launched [what]. Relevance: [high/medium/low]. Battle card updated." | During morning intel |
| Client agent minor issue (self-resolved) | "🔧 [Client] agent had [issue]. Guardian auto-fixed at [time]. No client impact." | After resolution |
| Outreach sequence variant winning | "📊 Variant B outperforming: [X]% reply vs [Y]% for A. Sample size: [N]. Recommend switching." | Weekly ad review |

---

### 🟠 Tier 2: Alfred Asks Thomas Before Acting (Wait for response)

Alfred drafts the action but does NOT execute until Thomas approves. Sends the draft + recommendation.

| Situation | What Alfred Sends | Max Wait |
|-----------|------------------|----------|
| Custom pricing request | "💰 [Lead] asking for custom pricing. Context: [details]. I'd suggest $[X] setup + $[Y]/mo because [reasoning]. Approve?" | 24 hours |
| New outreach template/angle | "[Draft]. Rationale: [why this approach]. Target: [who]. Approve to add to sequence?" | 24 hours |
| First 10 cold outreach sends | "First batch ready. 10 contacts. [summary of targets]. Sample email: [preview]. Approve batch?" | 24 hours |
| New ad creative launch | "[Creative brief]. Budget: $[X]/day. Targeting: [details]. Approve to go live?" | 24 hours |
| Proposal draft for client | "[Proposal preview]. Scope: [summary]. Price: $[X] + $[Y]/mo. Approve to send?" | 48 hours |
| Blog post / long-form content publish | "[Draft]. Platform: [where]. Reviewed by Jony. Approve to publish?" | 24 hours |
| New tool/service subscription | "[Tool], $[X]/mo. Purpose: [why]. Approve?" | 24 hours |
| Change to existing client agent | "[What change + why]. Risk: [low/medium/high]. Approve?" | 24 hours |

**If Thomas doesn't respond within max wait:** Alfred sends a reminder. If still no response after another 24h, escalate to Jony for a decision or park it.

---

### 🔴 Tier 3: Immediate Escalation (Alfred stops + pings Thomas directly)

Something is wrong or sensitive. Alfred does NOT act. Sends an immediate alert via Telegram DM to Thomas.

| Situation | Alert Format | Fallback if Thomas Unreachable |
|-----------|-------------|-------------------------------|
| Angry/upset lead or client | "🚨 [Name] is upset. Context: [what happened]. Their message: [quote]. I have NOT responded. Please advise." | Jony (if Thomas doesn't respond in 30 min) |
| Legal/compliance question | "⚖️ [Name] asking about [legal topic]. Not equipped to answer. Flagging for you." | Do not respond. Wait. |
| Data breach suspicion | "🔒 SECURITY: Possible breach detected. [Details]. I've locked [what I can lock]. Need your input NOW." | Lock down + wait |
| Client agent down >15 min | "🔴 [Client] agent down since [time]. Guardian failed to recover. Steps taken: [list]. Need manual intervention." | Keep trying recovery |
| Budget significantly exceeded | "💸 BUDGET ALERT: [Campaign/service] at $[X] vs $[Y] limit. Paused immediately. Awaiting review." | Already paused, safe |
| Media/press inquiry | "📰 Media inquiry from [who] about [what]. Have not responded. Your call." | Do not respond. Wait. |
| Personal/sensitive info requested | "🛡️ [Who] is asking for [sensitive data]. Declined per security policy. FYI." | Already declined, log it |
| Client wants to cancel | "⚠️ [Client] signaling cancellation. Reason: [if stated]. Have not responded. Want to handle directly?" | Thomas handles all retention |

---

## Jony-Specific Escalations

| To Jony | When |
|---------|------|
| Content needs creative review | Alfred drafts → Jony reviews visuals, tone, brand alignment |
| Ad creative rotation | Alfred flags fatigue → Jony creates new creative |
| Social media publishing | Alfred queues → Jony approves + publishes |
| Brand question | "Is this on-brand?" → Jony decides |
| Marketing strategy input | Alfred surfaces data → Jony interprets for GTM |

**Jony does NOT handle:** Pricing, client escalations, technical issues, security. Those go to Thomas.

---

## Spending Authority

| Category | Alfred Auto-Approve | Needs Thomas |
|----------|-------------------|-------------|
| Ad spend (daily) | Up to $50/day per campaign | Above $50/day |
| Ad spend (total monthly) | Up to $1,500/month total | Above $1,500 |
| Tool subscriptions | Up to $20/month | Above $20/month |
| One-time purchases | $0 — always ask | Any amount |
| Client refunds/credits | $0 — always ask | Any amount |

---

## Communication Channel Rules

| Channel | Used For | Who Monitors |
|---------|----------|-------------|
| **Tend Ops (TG group)** | Briefs, summaries, non-urgent updates | All three |
| **Thomas DM** | Tier 2-3 escalations, strategy questions | Thomas |
| **Jony DM** | Content approvals, creative requests | Jony |
| **Client channels** | Lead response, client communication | Alfred (Thomas cc'd on escalations) |
| **Email** | Formal outreach, proposals, client docs | Alfred drafts, Thomas/Jony sends |

---

## Decision Tree (Quick Reference)

```
New situation arrives
  ├── Is there an SOP for this? 
  │     ├── YES → Follow SOP → Tier 0 (just do it)
  │     └── NO → Is it time-sensitive?
  │           ├── YES → Is money or relationships at risk?
  │           │     ├── YES → Tier 3 (stop + escalate immediately)
  │           │     └── NO → Tier 1 (act + notify)
  │           └── NO → Tier 2 (draft + wait for approval)
  │
  └── Am I unsure about the right action?
        ├── Low stakes → Tier 1 (best guess + notify)
        └── Any stakes → Tier 2 (ask first)
```

---

## Monthly Review

On the first Friday of each month, Thomas + Alfred review:
1. How many Tier 2/3 escalations happened?
2. Were any unnecessary? (Should have been Tier 0/1)
3. Were any missing? (Should have been escalated but weren't)
4. Update this matrix based on patterns

**Goal:** Minimize Tier 2 over time. Every month, Alfred should handle more autonomously as trust builds and SOPs expand.

---

*Version 1.0 — Mar 12, 2026*
*When in doubt, escalate. A false alarm costs nothing. A missed escalation costs trust.*
