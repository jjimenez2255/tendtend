# tend.team Monday Launch Readiness Checklist

*What must be true before ads go live Monday morning*

---

## 🔴 CRITICAL (Must Have)

- [ ] **MC Dashboard accessible** — Production build (not Vite dev), accessible via `mc-v10.surge.sh` or LAN. Thomas can show it to prospects.
- [ ] **Alfred agent configured** — API keys plugged in, responds to messages, handles basic inquiries
- [ ] **Ad campaigns verified running** — Jony confirms campaigns are live and targeting correctly
- [ ] **Inbound response plan documented** — What happens when someone clicks the ad? Who responds? How fast?
- [ ] **tend.team domain live** — Website loads, value prop clear, CTA works

## 🟡 HIGH (Should Have)

- [ ] **Configurator pitch-ready** — One coherent doc (not scattered brain dumps) explaining the 7 Pillars and what a client gets
- [ ] **Hayden agent production-ready** — All 27 files, security template, just waiting on creds from Jony
- [ ] **Rook HQ v2 running** — Server.mjs on port 3003, systemd service, accessible on LAN as prototype demo
- [ ] **MC bugs fixed (top 3)** — AgentHub full content, Dana personal messages visible, trail card widths
- [ ] **Pricing confirmed** — What does a Tend agent build cost? What's included?

## 🔵 NICE TO HAVE (Weekend Bonus)

- [ ] **MC Team page** — Org chart view showing Tend team (Thomas, Alfred, Rook)
- [ ] **MC Calendar view** — Cron visualization (when agents fire, what they do)
- [ ] **VPS test agent** — DO droplet running a demo OpenClaw instance
- [ ] **Configurator UI prototype** — Even a basic form-builder showing the 7 Pillars

---

## Who Owns What

| Item | Owner | Blocker |
|------|-------|---------|
| MC production build | Rook | None |
| Alfred API keys | Thomas | Needs to provide key list |
| Ad campaigns | Jony | Needs confirmation |
| Inbound plan | Thomas + Rook | Needs strategy discussion |
| tend.team domain | Thomas/Jony | Check DNS + hosting |
| Configurator doc | Rook | ✅ Done (CONFIGURATOR-STATE-OF-PLAY.md) |
| Hayden agent | Rook | Jony (TG ID + bot token) |
| Rook HQ v2 | Rook | None (just restart) |
| MC bug fixes | Rook (or GPT-5.4 sub-agent) | None |
| Pricing | Thomas | Business decision |

---

## Timeline

**Saturday 8:30am:** Standup — review this checklist, make decisions, assign owners
**Saturday 10am-4pm:** Execution window — knock off critical items
**Sunday:** Remaining items + final verification
**Monday 8am:** Ads live, inbound starts

---

*Created: Mar 14, 01:00 GMT+2*
