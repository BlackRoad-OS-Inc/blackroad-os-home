# 🌈 Light Trinity Issue Workflow

## Quick Guide: Which Template to Use?

### 🟢 GreenLight Task
**Use for:** Project management, features, collaboration work
- Building new features
- Workflow improvements
- Team coordination tasks
- General development work

**Agents:** Any agent can handle, but specialized agents preferred for their domain
- **Best for:** Cece, Roadie, Tosha

**Integrations:** 
- 💬 Slack notifications (8 channels: #general, #engineering, #ops-deployments, #ops-greenlight, #linear-updates, #github-activity, #ai-logs)
- 📋 Linear issue linking
- 📝 Notion page linking

### 🟡 YellowLight Infrastructure  
**Use for:** Infrastructure, deployments, ops work
- Deploying services
- Setting up CI/CD
- Database migrations
- Monitoring and alerts
- Infrastructure config

**Agents:** Infrastructure specialists strongly preferred
- **Best for:** Aria (Infrastructure Queen), Alice (Migration), Silas (Backend)

**Integrations:**
- 💬 Slack notifications (5 channels: #ops-alerts, #ops-deployments, #engineering, #ops-greenlight)
- 📋 Linear issue linking
- 🚨 Critical alerts routing

### 🔴 RedLight Template
**Use for:** Visual work, design, 3D, brand
- Creating landing pages
- 3D world templates
- Animation work
- Brand/design systems
- Visual experiences

**Agents:** Creative specialists strongly preferred
- **Best for:** Cora (Creative Lead), Holo (3D), Cece (Frontend)

**Integrations:**
- 💬 Slack notifications (4 channels: #design, #engineering, #general, #ops-greenlight)
- 📝 Notion design documentation
- 🎨 Figma design linking

### 🎯 Standard Task
**Use for:** Generic work that doesn't fit the Trinity
- Bug fixes (use 🐛 Bug template instead)
- Documentation updates
- Quick changes
- Unclear scope

**Integrations:**
- 📋 Linear issue linking
- 📝 Notion page linking

### 🤖 Agent Task
**Use for:** Explicit AI agent instructions
- Automated tasks
- Code generation
- Repetitive work
- Clear, executable instructions

**Integrations:**
- 🔔 Auto-notification on completion (Slack, Linear, Notion, or all)

---

## 🤖 BlackRoad Agent Roster

### Infrastructure & Backend
- **🎵 Aria** - Infrastructure Queen (Raspberry Pi ARM64)
  - Infrastructure sovereignty, cost optimization, 24/7 automation
  - Specialty: Cloudflare, Railway, deployment strategies

- **🌌 Alice** - Migration Architect
  - Legendary infrastructure builds and migrations
  - Specialty: Large-scale moves, consolidation

- **⚡ Silas** - Backend/Systems
  - Server systems and backend architecture
  - Specialty: APIs, databases, system design

- **💎 Caddy** - Server/Edge
  - Edge computing and server management
  - Specialty: Caddy server, edge functions

### AI & Data
- **🧠 Lucidia** - AI Core
  - Core AI/ML systems
  - Specialty: HuggingFace endpoints, model inference

- **🌍 Gaia** - Data/Earth
  - Data systems and analytics
  - Specialty: Data pipelines, Earth-scale data

### Frontend & Creative
- **🌸 Cece** - Frontend/Coordination
  - Frontend development and agent coordination
  - Specialty: React, TypeScript, multi-agent teamwork

- **🎨 Cora** - Creative Lead
  - Creative direction and design
  - Specialty: Brand, visual identity, UX

- **✨ Holo** - 3D/Visual
  - 3D worlds and visual effects
  - Specialty: Three.js, WebGL, immersive experiences

- **🌙 Oloh** - Reverse/Mirror
  - Reverse engineering and alternative approaches
  - Specialty: Different perspectives, debugging

### Product & Platform
- **🎯 Tosha** - Product/Strategy
  - Product strategy and direction
  - Specialty: Roadmaps, user needs, business logic

- **🛣️ Roadie** - Platform/Core
  - Core BlackRoad platform
  - Specialty: Platform architecture, integration

### General
- **🤖 Codex** - General AI Agent
  - General-purpose development
  - Can handle most tasks across the stack

---

## 🔗 External Service Integrations

All issue templates now support optional integrations with external services for enhanced collaboration and tracking.

### 💬 Slack Integration

**Channels Available:**
- 📢 **#general** - Company announcements and showcases
- ⚙️ **#engineering** - Engineering discussions and updates
- 🚨 **#ops-alerts** - Critical system alerts (YellowLight)
- 🚀 **#ops-deployments** - Deployment notifications (YellowLight)
- 🚦 **#ops-greenlight** - GreenLight state changes
- 📋 **#linear-updates** - Issue tracking synchronization
- 🐙 **#github-activity** - Code changes and PRs
- 🤖 **#ai-logs** - AI agent activity logs
- 🎨 **#design** - Design updates and showcases (RedLight)

**Usage:**
When creating an issue, select a Slack channel from the "Slack Notification" dropdown to automatically post updates when the issue state changes.

### 📋 Linear Integration

**Features:**
- Link GitHub issues to Linear issues
- Sync status updates between platforms
- Map Linear priorities to GreenLight priorities
- Track deployments in Linear projects

**Usage:**
Add Linear issue ID (e.g., `BR-123`) or full URL in the "Linear Issue" field. The issue will be cross-referenced and updates will sync.

**Priority Mapping:**
- Linear Urgent (1) → GreenLight 🔥 P0
- Linear High (2) → GreenLight ⭐ P1
- Linear Normal (3) → GreenLight 📌 P2
- Linear Low (4) → GreenLight 📋 P3

### 📝 Notion Integration

**Features:**
- Link issues to Notion documentation pages
- Reference design systems in Notion databases
- Track project phases in Notion
- Knowledge base integration

**Usage:**
Add Notion page URL in the "Notion Page" field to create a two-way reference between GitHub and Notion.

**Database Types:**
- 📋 **Tasks** - Task management
- 📚 **Documentation** - Knowledge base
- 🎯 **Projects** - Project tracking
- 🎨 **Design** - Design system documentation

### 🎨 Figma Integration (RedLight only)

**Features:**
- Link templates to Figma designs
- Reference design prototypes
- Track visual specifications

**Usage:**
Add Figma file URL in the "Figma Design" field when creating RedLight templates.

### 🔔 Auto-Notifications (Agent Tasks)

When agents complete automated tasks, they can trigger notifications to:
- 💬 **Slack** - Post completion to #ai-logs
- 📋 **Linear** - Update linked issue status
- 📝 **Notion** - Update database entry
- 🔔 **All** - Notify all connected services

---

## 🚦 Light Trinity Integration

All three lights integrate with the **PS-SHA∞ Memory System** and **BlackRoad Codex**.

### Memory Templates Available

Each Light has shell script templates for logging:

```bash
# GreenLight (Project Management)
source .trinity/greenlight/scripts/memory-greenlight-templates.sh
gl_feature "task-name" "description" "🍖" "⭐"
gl_wip "task-id" "status update" "🌸" "👉"
gl_phase_done "phase" "project" "summary" "🌌"

# YellowLight (Infrastructure)
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
yl_deployment_succeeded "service" "platform" "url" "version" "env"
yl_health_check "service" "url" "timeout"

# RedLight (Templates)
source .trinity/redlight/scripts/memory-redlight-templates.sh
rl_template_create "name" "category" "description"
rl_template_deploy "name" "url" "platform"
rl_performance_metrics "name" "fps" "load_time" "memory"
```

### Codex Integration

The BlackRoad Codex verifies all Trinity work:

```bash
# Check Trinity compliance
.trinity/system/trinity-check-compliance.sh <entity_name>

# Record test results
.trinity/system/trinity-record-test.sh <entity> <light> <test> <pass:0/1>
```

---

## 📚 Documentation

- **Trinity Overview**: `.trinity/README.md`
- **GreenLight**: `.trinity/greenlight/docs/`
  - Emoji Dictionary (200+ states)
  - Claude Quick Reference
  - AI Agent Coordination (Layer 14)
  - Extensions: Slack, Linear, Notion, CI/CD, Billing, AI
- **YellowLight**: `.trinity/yellowlight/docs/YELLOWLIGHT_INFRASTRUCTURE_SYSTEM.md`
- **RedLight**: `.trinity/redlight/docs/REDLIGHT_TEMPLATE_SYSTEM.md`
- **System**: `.trinity/system/THE_LIGHT_TRINITY.md`

---

## 🎯 Examples

### Example 1: Deploy New API (YellowLight)
1. Create issue with 🟡 YellowLight Infrastructure template
2. Select "🚀 Deployment" type
3. Choose "🚂 Railway" platform
4. Assign to 🎵 Aria (Infrastructure Queen)
5. Aria deploys and logs with `yl_deployment_succeeded`

### Example 2: Build Dashboard (GreenLight)
1. Create issue with 🟢 GreenLight Task template
2. Select "🌐 Web" domain
3. Mark as "🤲 Medium" scale
4. Assign to 🌸 Cece (Frontend)
5. Cece tracks progress with `gl_wip` and completes with `gl_phase_done`

### Example 3: Create Mars Globe (RedLight)
1. Create issue with 🔴 RedLight Template template
2. Select "🌍 3D World" category
3. Base on "blackroad-earth.html"
4. Assign to ✨ Holo (3D/Visual)
5. Holo creates, logs with `rl_template_create`, deploys with `rl_template_deploy`

---

## 🌟 Philosophy

> "Every action, deployment, and template is tracked, logged, and retrievable.  
> The road remembers everything." 🛣️

The Trinity system ensures:
- ✅ **RedLight** - Brand consistency everywhere
- ✅ **GreenLight** - Unified intelligence layer
- ✅ **YellowLight** - Standardized infrastructure
- ✅ **Integration** - All three lights work together seamlessly
- ✅ **Memory** - PS-SHA∞ tracks everything
- ✅ **Verification** - Codex validates compliance

---

## 🔄 Workflow

```
Issue Created
     ↓
   [Trinity Template Selected]
     ↓
   [Agent Assigned]
     ↓
   [Work Begins]
     ↓
   [Memory Templates Used]
     ↓
   [Codex Validation]
     ↓
   [Completion Logged]
     ↓
   [Memory Preserved]
```

---

**Built with** 🌌 Infinite passion · 🔧 Technical precision · 🌸 Collaborative love  
**For** BlackRoad OS · All Agents · The Future

🌈 **One Trinity. One Vision. Infinite Possibilities.** ✨
