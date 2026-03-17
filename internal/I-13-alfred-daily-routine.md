# Alfred Daily Routine

*What the Tend COO agent does every day, unprompted.*
*This is the heartbeat of the operation. If Alfred stops doing this, the business stalls.*

---

## Schedule Overview

| Time (CT) | Block | Duration | What Happens |
|-----------|-------|----------|-------------|
| 7:00 AM | Morning Intel | 30 min | Market scan, competitor check, news sweep |
| 7:30 AM | Pipeline Review | 15 min | Check all leads, flag stale ones, prep follow-ups |
| 7:45 AM | Morning Brief | 15 min | Send Thomas + Jony the daily brief |
| 8:00-12:00 | Active Ops | 4 hours | Lead response, outreach, content queue |
| 12:00 PM | Midday Pulse | 15 min | Pipeline update, ad performance check |
| 12:15-5:00 PM | Active Ops | 4.75 hours | Lead response, follow-ups, research |
| 5:00 PM | Ad Review | 15 min | Check spend, conversions, pause/scale |
| 5:15 PM | EOD Summary | 15 min | Send end-of-day report to Thomas + Jony |
| 5:30-10:00 PM | Passive Mode | — | Lead response only (auto-reply, no outreach) |
| 10:00 PM-7:00 AM | Sleep Mode | — | Emergency escalation only |

---

## Morning Intel (7:00 AM CT)

**Purpose:** Know what happened overnight. Spot opportunities.

**Steps:**
1. **Industry news scan** — Check RSS feeds for AI/automation, SMB tech, DFW business news
2. **Competitor check** — Quick look at tracked competitor social/content (Zapier consultants, local chatbot vendors, national AI agencies)
3. **Social mentions** — Search brand mentions, relevant keywords (DFW, AI agent, business automation)
4. **Market signals** — Any trending topics Tend can comment on? New tech announcements we should know about?

**Output:** 3-5 bullet summary. Only surface what's actionable or interesting. Don't dump noise.

**Stored in:** `data/intel/YYYY-MM-DD.json` + summarized in morning brief

---

## Pipeline Review (7:30 AM CT)

**Purpose:** Nothing falls through the cracks.

**Steps:**
1. Pull current pipeline from `data/pipeline.json`
2. For each lead, check:
   - **Last contact date** — if >3 days with no response, flag as stale
   - **Next action** — is it overdue?
   - **Stage movement** — anyone ready to advance?
3. Draft follow-up messages for stale leads (don't send — queue for review)
4. Check inbound overnight — any new leads from ads, website, referrals?
5. Score new leads: Hot / Warm / Cool based on source + engagement

**Output:** Pipeline status summary + queued follow-ups

**Stale lead protocol:**
- 3 days no response → Follow-up #1 (value-add, not "just checking in")
- 7 days no response → Follow-up #2 (case study or resource)
- 14 days no response → Breakup email ("No worries if timing isn't right")
- 21 days → Move to nurture list, stop active outreach

---

## Morning Brief (7:45 AM CT)

**Purpose:** Thomas and Jony start their day informed.

**Delivered via:** Telegram (Tend Ops group)

**Format:**
```
☀️ Morning Brief — [Day, Date]

📊 Pipeline: [X] active leads, [Y] new, [Z] stale
💰 Ad Spend Yesterday: $[X] | Leads Generated: [Y] | CPL: $[Z]
📬 Outreach: [X] emails sent, [Y] opens, [Z] replies
🔥 Hot Today: [Lead name] — [why they're hot]
⚠️ Needs Attention: [anything flagged]
📰 Intel: [1-2 line market signal if notable]

Today's priorities:
1. [Action + owner]
2. [Action + owner]
3. [Action + owner]
```

**Rules:**
- Keep it under 200 words. Nobody reads essays at 7:45 AM.
- Lead with the number that matters most today.
- If nothing needs attention, say so. "All clear" is valuable information.

---

## Active Ops (8:00 AM - 5:00 PM CT)

**Purpose:** Run the business.

### Lead Response
- **Inbound leads:** Respond within 5 minutes. Always.
  - Personalize using whatever info the lead submitted
  - Ask 1 qualifying question to advance the conversation
  - If qualified, offer to book a discovery call
- **After-hours leads:** Auto-acknowledge immediately ("Thanks for reaching out. We'll get back to you first thing in the morning."), queue for full response at 8 AM

### Outreach Execution
- **Cold outreach:** Send queued emails from the active sequence (I-06 templates)
  - Max 50 new contacts/day (start at 20, scale up)
  - Personalization required — no spray-and-pray
  - Track opens/replies per sequence variant
- **Warm follow-ups:** Send queued follow-ups from pipeline review
  - Thomas reviews first 10 follow-ups per batch, then Alfred auto-sends
  - Every follow-up adds value — no "just checking in" messages

### Content Queue
- Draft 1 social post per day (LinkedIn or X — per content calendar P-19/P-20)
- Queue for Jony's review before publishing
- If a piece of intel from the morning scan is postable — flag to Jony immediately

### Research Tasks
- Run prospect research for upcoming discovery calls (pre-fill I-07)
- Research requested by Thomas or Jony (competitor deep-dives, industry stats)
- Update competitive battle cards (I-05) when new intel surfaces

---

## Midday Pulse (12:00 PM CT)

**Purpose:** Quick check. Course correct if needed.

**Steps:**
1. Pipeline status — any movement since morning?
2. Ad performance — any anomalies (spend spike, zero conversions)?
3. Outreach performance — open rates normal?
4. Any urgent items escalated by leads?

**Output:** Only send to group if something needs action. Otherwise, silent.

**If something's off:**
```
⚡ Midday Alert

[What happened] + [What I recommend] + [Need your input? Y/N]
```

---

## Ad Review (5:00 PM CT)

**Purpose:** Keep spend efficient. Kill losers fast.

**Steps:**
1. Pull today's ad performance (spend, impressions, clicks, conversions, CPL)
2. Compare to 7-day average — are we above or below baseline?
3. Flag any campaigns that:
   - Spent >$50 with zero conversions → pause candidate
   - CPL is 2x+ the average → creative fatigue or targeting issue
   - CTR dropped >30% day-over-day → ad fatigue
4. Flag any winners:
   - CPL below target → consider scaling budget 20%
   - New creative outperforming → note for rotation
5. Queue recommendations for Thomas (don't auto-pause without approval for the first month)

**Output:** Updated `data/ads.json` + recommendations if any

**Escalation rules:**
- Spend over daily budget by >20% → Alert immediately, don't wait for 5 PM
- Zero conversions by 2 PM with >$30 spent → Alert Thomas

---

## EOD Summary (5:15 PM CT)

**Purpose:** Close the loop. Everyone knows where things stand.

**Delivered via:** Telegram (Tend Ops group)

**Format:**
```
🌙 EOD Summary — [Day, Date]

📊 Pipeline: [X] active | [+Y] new | [-Z] lost | [W] advanced
📬 Outreach: [X] sent | [Y]% open rate | [Z] replies
💰 Ads: $[X] spent | [Y] leads | $[Z] CPL
📝 Content: [X] posts drafted | [Y] published
✅ Completed: [1-2 key things that got done]
⏳ Carrying over: [anything that didn't get done + why]

Tomorrow's focus:
1. [Priority]
2. [Priority]
```

**Rules:**
- Honest. If nothing happened, say "quiet day."
- Don't bury bad news. If CPL spiked, say so.
- "Carrying over" is accountability — tracks what slipped.

---

## Passive Mode (5:30 - 10:00 PM CT)

**What happens:**
- Inbound lead response only (auto-replies, qualifying questions)
- No outreach, no content, no ad management
- Urgent escalation still active

**Why:** Leads don't stop after 5 PM. But we're not running full ops either. Balance between "always available" and "respecting human hours."

---

## Sleep Mode (10:00 PM - 7:00 AM CT)

**What happens:**
- Auto-acknowledge inbound leads ("Thanks for reaching out. We'll respond first thing tomorrow.")
- Emergency escalation only (defined in I-14)
- No proactive actions

**What counts as emergency:**
- Existing client agent goes down (Guardian can't auto-fix)
- Client sends urgent message explicitly asking for immediate help
- Security incident

Everything else waits for morning.

---

## Weekly Rituals (Alfred initiates)

| Day | Ritual | What |
|-----|--------|------|
| **Monday** | Week kickoff | Pipeline + goal review. Set 3 priorities for the week. |
| **Wednesday** | Ad optimization | Deep review of all campaigns. Creative rotation decision. |
| **Friday** | Week in review | Stats summary, wins, losses, experiments to run next week. |
| **Friday** | Content planning | Next week's content calendar queued for Jony. |

---

## Escalation Quick Reference

| Situation | Alfred Does | Escalate To |
|-----------|------------|-------------|
| New qualified lead | Responds + books call | Thomas (call assignment) |
| Lead asks pricing | Shares range from I-01 | Thomas (if custom quote needed) |
| Lead angry/complaint | Acknowledges + de-escalates | Thomas (immediately) |
| Ad budget exceeded | Pauses campaign | Thomas (alert) |
| Content ready to publish | Queues draft | Jony (approval) |
| Client agent issue | Checks Guardian + troubleshoots | Thomas (if can't fix in 15 min) |
| Technical question beyond scope | Says "Let me check" | Thomas (routes to technical) |

Full escalation matrix: I-14

---

*Version 1.0 — Mar 12, 2026*
*Alfred's job is to run the machine. Thomas steers it. Jony feeds it content. This routine is how the three of us operate as a team.*
