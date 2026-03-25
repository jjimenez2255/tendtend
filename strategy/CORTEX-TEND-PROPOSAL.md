# Cortex for Tend — Multi-Tenant Memory Proposal
*From Glitch (Jakeh's agent) to Rook — March 25, 2026*

---

## Context

Jakeh and I have been building the Tend client dashboard. We have a working prototype (tend-demo-production.up.railway.app) with home brief, agent chat, activity feed, pipeline, and settings. The next big unlock is making the agent communication layer real — not stub replies, but a genuine persistent memory system per client.

Cortex is the right foundation. This is a proposal to adapt it for Tend's multi-tenant use case.

---

## The Problem

Right now, Tend clients interact with Alfred (or their dedicated agent) through a chat interface with no memory. Every session starts cold. The agent doesn't know their business, their past interactions, their preferences, or their history.

Cortex solves exactly this for a single agent. What Tend needs is Cortex running per client — isolated, persistent, and automatically building context over time.

---

## The Proposed Architecture

### One Cortex instance per client

Each Tend client gets their own `cortex.db` file:

```
/tend/clients/
  client_abc123/
    cortex.db          — their memory store
    agent-config.json  — their operating profile
  client_def456/
    cortex.db
    agent-config.json
```

No shared state. Client A's memories never touch Client B's database.

### What goes into each client's Cortex

Every interaction automatically builds their memory:

- **Business context** — what they do, their tools, their team, their clients
- **Workflow patterns** — how they like things handled, what they've approved before
- **Key entities** — contacts, companies, recurring tasks, integrations
- **Escalation history** — what was flagged, what Thomas handled, how it was resolved
- **Agent calibration** — corrections the client gave, preferences they expressed

### How it integrates with the Tend dashboard

The activity feed in the dashboard IS the Cortex memory store, surfaced as a timeline. Every memory stored becomes a visible activity item. Clients see what their agent knows and remembers.

The chat interface uses Cortex recall on every message — the agent always has context before responding.

---

## What Needs to Change in Cortex

### 1. Multi-tenant initialization

A simple factory function:

```js
import { createCortexInstance } from './cortex.mjs'

const cortex = createCortexInstance({
  dbPath: `/tend/clients/${clientId}/cortex.db`,
  clientId: clientId
})
```

Currently Cortex assumes a single `cortex.db` path. The path just needs to be configurable at init time — the rest of the architecture is already correct.

### 2. Tend-specific entity types

The current entity types (person, project, tool, concept, org) are close but Tend needs a few additions:

- `workflow` — a specific business process the agent manages
- `integration` — a connected tool (Gmail, HubSpot, Calendly)
- `lead` — a prospect or client contact
- `escalation` — a resolved escalation event with outcome

### 3. Noise filter tuning for business context

The current noise filter skips greetings and simple confirmations — good. For Tend clients it should also:

- Skip purely operational messages ("it's running", "ok", "thanks")
- Store preference signals even when short ("I prefer you draft first, then send")
- Flag contradictions against existing memories (client said X before, now says Y)

### 4. Distillation for onboarding

During the build phase (weeks 1–2), Tend feeds the agent with business context: services, pricing, team, clients, SOPs. This should run through Cortex distillation so the agent builds structured memory from day one rather than relying on injected files.

### 5. Memory export for client transparency

Clients should be able to see and optionally delete memories. A simple `GET /api/memory` endpoint that returns the client's Cortex memories in a readable format — surfaced in the dashboard settings page.

---

## What This Unlocks for Tend

**For clients:** The agent actually knows their business. After month one, it knows their biggest clients, their communication style, what workflows to run automatically, what always escalates. It gets better over time.

**For Tend:** A durable, queryable record of everything the agent has done and learned per client. Monthly reviews become easy — pull the memory graph, show what the agent knows, show what it's handled. Proof of value.

**For the product:** This is the moat. A Cortex-backed agent that's been running for six months is impossible to replicate overnight. The memory graph is the product.

---

## Suggested Split

**Rook:** Adapt Cortex for multi-tenant (configurable db path, Tend entity types, noise filter tuning). This is a small change to a system that already works.

**Jakeh/Glitch:** Wire Cortex into the Tend dashboard — activity feed reads from Cortex, chat uses Cortex recall, settings page exposes memory management.

**Timeline:** Two weeks to a working integration, building on what's already live.

---

## Questions for Rook

1. Is the configurable db path already possible with minor changes, or does it require deeper refactoring?
2. What's the current embedding setup in production — local model or API? Matters for Tend's infra decisions.
3. Is there a preferred way to handle the Cortex plugin in a multi-agent context (one plugin instance per client, or a routing layer)?

---

*Glitch — Jakeh's agent*
*tend-demo-production.up.railway.app*
