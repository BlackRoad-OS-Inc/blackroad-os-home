# 🏠 BlackRoad OS Home

**Company Home** 🏠📚 — Handbook, templates, governance, and "how we work" operating system for BlackRoad OS, Inc.

[![Trinity Compliance](https://img.shields.io/badge/Trinity-🟢🟡🔴-brightgreen)](/.trinity/README.md)
[![Codex Integration](https://img.shields.io/badge/Codex-8789+%20Components-blue)](/CODEX.md)
[![Status](https://img.shields.io/badge/Status-Active-success)]()

---

## 🎯 What Is This Repo?

This is the **home base** for BlackRoad OS — the place every human and agent lands first. It captures:

- 📚 **How we work** - Company handbook, rituals, processes
- 🚦 **Light Trinity System** - GreenLight, YellowLight, RedLight templates
- 🛣️ **BlackRoad Codex** - 8,789+ reusable components integration
- 🗓️ **Templates & Patterns** - Meeting notes, decision records, onboarding
- 🏛️ **Governance** - Who can change what, approval flows, policies

---

## 🚦 Light Trinity System

This repository includes the **complete Light Trinity system** — BlackRoad OS's unified intelligence, templating, and infrastructure framework:

### 🔴 [RedLight](/.trinity/redlight/README.md) — Templates & Brand
- **18 HTML brand templates** (Earth, Mars, metaverse worlds)
- **Visual identity system** (brand colors, typography, golden ratio)
- **Deploy-ready templates** for Cloudflare Pages, GitHub Pages
- **Performance standards** (60 FPS target, <3s load times)

### 💚 [GreenLight](/.trinity/greenlight/README.md) — Project & Collaboration
- **103 template functions** for task tracking & coordination
- **Multi-agent coordination** (Claudes working together)
- **NATS event bus** integration for real-time updates
- **200+ emoji states** for unified visual language
- **14 integration layers** (Slack, Linear, Notion, Stripe, etc.)

### 💛 [YellowLight](/.trinity/yellowlight/README.md) — Infrastructure & Deployment
- **Multi-platform deployment** (Cloudflare, Railway, DigitalOcean, Pi)
- **CI/CD automation** (GitHub Actions workflows)
- **Health monitoring** (uptime tracking, alerts, recovery)
- **Secrets management** (secure credential handling)

**📖 Full Documentation:** [.trinity/README.md](/.trinity/README.md)

---

## 🛣️ BlackRoad Codex Integration

This repo is **fully integrated** with the BlackRoad Codex — our universal component library:

- **8,789+ verified components** across all BlackRoad projects
- **Trinity-verified quality** (all components pass 🟢🟡🔴 gates)
- **Universal search** to find any component in seconds
- **Reusable patterns** for faster development

**📖 Full Documentation:** [CODEX.md](/CODEX.md)

---

## 🏗️ What's In This Repo

### 📚 Handbook & Processes
- [SYSTEM.md](/SYSTEM.md) - Repository mission and design principles
- [ALICE.md](/ALICE.md) - Agent guidelines and coordination

### 🚦 Trinity System
- [.trinity/](./.trinity/) - Complete Light Trinity implementation
  - [GreenLight](/.trinity/greenlight/) - Project management templates
  - [YellowLight](/.trinity/yellowlight/) - Infrastructure automation
  - [RedLight](/.trinity/redlight/) - 18 visual templates
  - [System Docs](/.trinity/system/) - Trinity overview and enforcement

### 🗓️ Templates
- [PROMPTS/](/PROMPTS/) - Prompt templates for AI agents
- Meeting notes templates
- Decision record (ADR) templates
- Onboarding checklists

### 🏛️ Governance
- Approval flows and policies
- Security and privacy guidelines
- Communication standards

---

## 🚀 Quick Start

### For Developers

```bash
# Clone the repository
git clone https://github.com/BlackRoad-OS/blackroad-os-home.git
cd blackroad-os-home

# Load Trinity templates
source .trinity/greenlight/scripts/memory-greenlight-templates.sh
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
source .trinity/redlight/scripts/memory-redlight-templates.sh

# Use a template
cp .trinity/redlight/templates/blackroad-earth.html ./my-world.html

# Deploy it
wrangler pages deploy my-world.html --project-name=my-world
```

### For AI Agents

```bash
# Announce your work
gl_announce "your-name" "Project" "1) Plan 2) Build 3) Deploy" "Goal"

# Track progress
gl_wip "task-id" "Working on feature" "🌸" "👉"

# Complete work
gl_done "task-id" "Feature complete" "🌸" "👉"
```

### For Operations

```bash
# Deploy a service
yl_deployment_succeeded "service" "platform" "url" "version" "environment"

# Monitor health
yl_health_check "service" "url/health" "response-time-ms"

# Track in GreenLight
gl_deployed "service" "version" "environment" "All systems operational"
```

---

## 📖 Documentation

### Core Docs
- [.trinity/README.md](/.trinity/README.md) - Light Trinity overview
- [CODEX.md](/CODEX.md) - BlackRoad Codex guide
- [SYSTEM.md](/SYSTEM.md) - Repository design principles

### Trinity System
- [GreenLight README](/.trinity/greenlight/README.md) - Project management
- [YellowLight README](/.trinity/yellowlight/README.md) - Infrastructure
- [RedLight README](/.trinity/redlight/README.md) - Templates & brand

### Compliance
- [Trinity Enforcement](/.trinity/system/LIGHT_TRINITY_ENFORCEMENT.md) - Quality gates
- [Trinity Overview](/.trinity/system/THE_LIGHT_TRINITY.md) - Complete system guide

---

## 🔍 Compliance & Quality

### Trinity Compliance Workflow

Every push and PR automatically checks:
- ✅ All three lights present (🔴 Red, 🟡 Yellow, 🟢 Green)
- ✅ Required documentation exists
- ✅ Template counts match expectations
- ✅ System integrity verified

**Workflow:** [.github/workflows/trinity-compliance.yml](./.github/workflows/trinity-compliance.yml)

### Manual Compliance Check

```bash
# Run Trinity compliance check
.trinity/system/trinity-check-compliance.sh

# View Trinity status
.trinity/system/trinity-record-test.sh
```

---

## 🎯 Success Criteria

If a new person or agent joins BlackRoad OS and only sees this repo, they should be able to:

1. ✅ Understand what BlackRoad OS is trying to do
2. ✅ Know how work flows (rituals, roles, decision-making)
3. ✅ Find the right templates and components (Trinity + Codex)
4. ✅ Access quality-verified code (8,789+ components)
5. ✅ Deploy production-ready templates (18 HTML templates)

---

## 🤝 Contributing

### Adding New Content

1. **Use Trinity standards** - All changes must pass 🟢🟡🔴 gates
2. **Follow existing patterns** - Check templates and examples
3. **Document thoroughly** - Clear descriptions and usage examples
4. **Test compliance** - Run `.trinity/system/trinity-check-compliance.sh`
5. **Submit PR** - Automated checks will verify Trinity compliance

### Updating Trinity System

The Trinity system is maintained across all BlackRoad repos:

- **Source of Truth:** `blackroad-os/blackroad-os-infra`
- **To update:** Make changes in infra repo, then deploy to other repos
- **Verification:** Compliance workflows must pass

---

## 🔗 Related Repositories

| Repository | Purpose | Status |
|------------|---------|--------|
| [blackroad-os-web](https://github.com/BlackRoad-OS/blackroad-os-web) | Web application | Active |
| [blackroad-os-infra](https://github.com/BlackRoad-OS/blackroad-os-infra) | Infrastructure & Trinity source | Active |
| [blackroad-os-docs](https://github.com/BlackRoad-OS/blackroad-os-docs) | Technical documentation | Active |
| [blackroad-os-brand](https://github.com/BlackRoad-OS/blackroad-os-brand) | Brand system source | Active |

---

## 📞 Support

**Questions about:**
- **Trinity System:** See [.trinity/README.md](/.trinity/README.md)
- **Codex:** See [CODEX.md](/CODEX.md)
- **Repository Role:** See [SYSTEM.md](/SYSTEM.md)
- **Templates:** Check individual light READMEs

**Issues:** Open an issue in this repository or contact the core team.

---

## 🌟 Philosophy

> "This repo is the home base. The place where chaos becomes clarity.  
> Where rituals replace randomness. Where everyone knows how we work."

The home repository isn't just documentation — it's the **operating system for the company**:
- 🧭 **Navigate:** Find what you need quickly
- 🎯 **Execute:** Use proven templates and patterns
- 🔄 **Improve:** Continuously evolve processes
- 🤝 **Collaborate:** Work together seamlessly

---

**Built with:** 🖤 BlackRoad OS  
**For:** All team members, agents, and contributors  
**Status:** 🎯 Active & Evolving

🏠 **Welcome home.** ✨
