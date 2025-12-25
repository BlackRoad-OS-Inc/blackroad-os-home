# 💚 GREENLIGHT: Project & Collaboration System
## The Intelligence Layer of BlackRoad OS

**Version:** 1.0.0  
**Status:** 🎯 Active  
**Part of:** [Light Trinity System](../README.md)

---

## What is GreenLight?

**GreenLight** is BlackRoad OS's unified project management, task tracking, and multi-agent coordination system. It's the intelligence layer that tracks **what we're building** and **how we're collaborating**.

### Key Capabilities
- 📋 **Task & Project Tracking** - From inbox to done
- 🤝 **Multi-Agent Coordination** - Claudes working together
- 📡 **Real-Time Events** - NATS event bus integration
- 🎯 **Lifecycle Management** - 15 states from void to done
- 🌍 **Universal Scale** - Track from micro to planetary tasks
- 🧠 **Memory Integration** - All actions logged to PS-SHA∞

---

## 🎯 Core Concepts

### 1. Lifecycle States (15 states)
```
⬛ void       → Not started, doesn't exist yet
📥 inbox      → Captured, needs triage
🎯 targeted   → Triaged, ready to start
🏃 wip        → Work in progress
⏸️ paused     → Temporarily on hold
🔒 blocked    → Waiting on dependency
🧪 testing    → In QA/testing phase
👀 review     → In code/design review
🔄 revision   → Changes requested
✅ done       → Completed successfully
🚫 wont-do    → Decided not to do
📦 archived   → Done and filed away
🔥 urgent     → Emergency priority
🌟 featured   → Showcase project
```

### 2. Scale Indicators (7 levels)
```
👉 micro      → Minutes: quick fix, small tweak
👊 mini       → Hours: feature, small component  
🍖 chunk      → Days: full feature, integration
🎢 macro      → Weeks: project, major initiative
⭐ stellar    → Months: platform, major system
🌸 planetary  → Quarters: ecosystem change
🌌 universal  → Years: company transformation
```

### 3. Domain Tags (18 domains)
```
🛣️ platform   → Core BlackRoad infrastructure
🌀 ai         → AI/ML systems
⛓️ chain      → Blockchain/crypto
🎨 creative   → Design, brand, visual
🔧 infra      → Infrastructure, DevOps
🧪 research   → R&D, experiments
📚 docs       → Documentation
🔐 security   → Security, compliance
💰 billing    → Payments, subscriptions
🌐 web        → Web development
📱 mobile     → Mobile apps
🤖 agents     → AI agents, automation
🔌 integrations → Third-party services
📊 analytics  → Data, metrics, BI
🧬 architecture → System design
🎮 gaming     → Game development
🌍 global     → Internationalization
🚀 growth     → Marketing, sales
```

### 4. Priority Levels (6 levels)
```
🔥 p0 → Emergency: fix now
⚡ p1 → Critical: within hours
⭐ p2 → High: within days
🎯 p3 → Normal: within weeks
🧊 p4 → Low: within months
🫧 p5 → Nice-to-have: whenever
```

---

## 📚 Documentation Files

Located in `docs/` directory:

### Core References
- **GREENLIGHT_EMOJI_DICTIONARY.md** - Complete emoji reference (429 emojis)
- **GREENLIGHT_CLAUDE_QUICK_REFERENCE.md** - Quick start guide

### Layer 12-14 (Advanced Features)
- **GREENLIGHT_CONTEXT_PROPAGATION.md** - Learning & understanding
- **GREENLIGHT_ANALYTICS_OBSERVABILITY.md** - Production visibility  
- **GREENLIGHT_AI_AGENT_COORDINATION.md** - Multi-Claude teamwork

### Integration Extensions
- **GREENLIGHT_SLACK_EXTENSION.md** - Slack integration
- **GREENLIGHT_NOTION_EXTENSION.md** - Notion integration
- **GREENLIGHT_LINEAR_EXTENSION.md** - Linear integration
- **GREENLIGHT_BILLING_EXTENSION.md** - Stripe integration
- **GREENLIGHT_AI_EXTENSION.md** - HuggingFace integration
- **GREENLIGHT_CICD_INFRASTRUCTURE_EXTENSION.md** - CI/CD integration
- **GREENLIGHT_CANVA_EXTENSION.md** - Canva integration

---

## 🚀 Quick Start

### 1. Load the Templates

```bash
# Source GreenLight memory templates
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Verify it loaded
type gl_announce
```

### 2. Announce Your Work

```bash
gl_announce \
    "your-agent-name" \
    "Project Name" \
    "1) Plan 2) Build 3) Deploy" \
    "What you're trying to achieve" \
    "🎢" \
    "🔧" \
    "⭐"
```

### 3. Track Progress

```bash
# Start working
gl_wip "task-id" "Working on feature X" "🌸" "👉"

# Update progress
gl_progress \
    "your-agent-name" \
    "Completed: API endpoints" \
    "Next: Frontend integration" \
    "👉" \
    "🔧"

# Mark phase complete
gl_phase_done \
    "implementation" \
    "Project Name" \
    "All features built and tested" \
    "🎢"
```

---

## 📋 Common Templates

### Project Management

```bash
# Start a phase
gl_phase_start "planning" "My Project" "Designing architecture" "🎢"

# Complete a phase
gl_phase_done "planning" "My Project" "Architecture finalized" "🎢"

# Track feature
gl_feature \
    "Feature Name" \
    "Description of what it does" \
    "🍖" \
    "⭐"

# Track bug
gl_bug \
    "Bug Name" \
    "Description of the issue" \
    "🔥" \
    "👉"

# Track epic
gl_epic \
    "Epic Name" \
    "Large initiative description" \
    "⭐"
```

### Deployment & Operations

```bash
# Log deployment start
gl_deployment_started \
    "service-name" \
    "v1.2.3" \
    "production" \
    "New features and bug fixes"

# Log successful deployment
gl_deployed \
    "service-name" \
    "v1.2.3" \
    "production" \
    "Deployed successfully, all checks passing"

# Log error
gl_error_detected \
    "service-name" \
    "database_connection_timeout" \
    "Could not connect to primary database" \
    "critical"
```

### Multi-Agent Coordination

```bash
# Announce availability
gl_agent_available \
    "claude-frontend" \
    "frontend" \
    "React, TypeScript, Tailwind CSS"

# Claim a task
gl_task_claimed \
    "feature-123" \
    "claude-frontend" \
    "Build new dashboard UI"

# Request help
gl_help_requested \
    "feature-123" \
    "claude-frontend" \
    "Need API endpoint specs from backend team" \
    "⚡"

# Share learning
gl_learning_discovered \
    "react-optimization" \
    "Using React.memo reduced re-renders by 50%" \
    "Performance improvement"

# Report collaboration success
gl_collaboration_success \
    "feature-123" \
    "claude-frontend,claude-backend" \
    "Dashboard shipped with full API integration"
```

---

## 🔧 Memory Template Functions

### Available Functions (103 total)

The script provides these function categories:

#### Core Tracking (15 functions)
- `gl_announce` - Announce new work
- `gl_wip` - Mark as work in progress
- `gl_done` - Mark as complete
- `gl_blocked` - Mark as blocked
- `gl_paused` - Pause work
- And more...

#### Project Management (20 functions)
- `gl_phase_start` - Start project phase
- `gl_phase_done` - Complete phase
- `gl_feature` - Track feature
- `gl_bug` - Track bug
- `gl_epic` - Track epic
- And more...

#### Deployment (15 functions)
- `gl_deployed` - Log deployment
- `gl_deployment_started` - Start deployment
- `gl_error_detected` - Log error
- `gl_health_check` - Record health check
- And more...

#### Coordination (20 functions)
- `gl_agent_available` - Announce availability
- `gl_task_claimed` - Claim task
- `gl_help_requested` - Request help
- `gl_coordinate` - Coordinate with another agent
- And more...

#### Analytics & Learning (18 functions)
- `gl_learning_discovered` - Share learning
- `gl_pattern_identified` - Identify pattern
- `gl_metric_recorded` - Record metric
- And more...

#### Integration (15 functions)
- `gl_slack_message` - Log Slack event
- `gl_linear_sync` - Sync with Linear
- `gl_notion_updated` - Log Notion update
- And more...

### Function Signature Examples

```bash
gl_announce <agent> <project> <tasks> <goal> [scale] [domain] [priority]
gl_wip <task> <status> [scale] [domain]
gl_phase_done <phase> <project> <summary> [scale]
gl_deployed <service> <version> <environment> <details>
gl_agent_available <agent_name> <specialty> <capabilities>
```

---

## 📡 NATS Event Bus Integration

### Event Publishing

Every GreenLight action publishes to NATS:

```bash
# Subject pattern
greenlight.{state}.{scale}.{domain}.{id}

# Examples
greenlight.wip.micro.creative.feature-123
greenlight.done.macro.infra.deployment-456
greenlight.blocked.planetary.platform.critical-bug
```

### Subscribing to Events

```bash
# Subscribe to all GreenLight events
nats sub "greenlight.>"

# Subscribe to specific state
nats sub "greenlight.wip.>"

# Subscribe to specific domain
nats sub "greenlight.*.*.platform.*"

# Subscribe to high-priority items
nats sub "greenlight.*.*.*.p0"
nats sub "greenlight.*.*.*.p1"
```

---

## 🧠 Memory Integration

All GreenLight actions are logged to PS-SHA∞:

```bash
# View memory
~/memory-system.sh summary | grep greenlight

# Search for specific events
~/memory-system.sh search "gl_deployed"

# Verify memory integrity
~/memory-system.sh verify
```

---

## 🎯 Use Cases

### Use Case 1: Solo Development

```bash
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Start your day
gl_announce "me" "Feature X" "1) Design 2) Code 3) Test" "Build awesome feature"

# Track as you work
gl_wip "feature-x" "Working on API endpoint" "🌸" "👉"
gl_progress "me" "API done" "Building frontend" "👉" "🔧"
gl_wip "feature-x" "Building UI components" "🌸" "👉"

# Complete
gl_done "feature-x" "Feature complete and tested" "🌸" "👉"
gl_phase_done "implementation" "Feature X" "Shipped!" "🎢"
```

### Use Case 2: Multi-Agent Coordination

```bash
# Agent 1: Backend developer
gl_agent_available "claude-backend" "backend" "Python, FastAPI, PostgreSQL"
gl_task_claimed "api-endpoints" "claude-backend" "Build REST API"
gl_wip "api-endpoints" "Creating database models" "🌸" "👉"

# Agent 2: Frontend developer (waiting)
gl_agent_available "claude-frontend" "frontend" "React, TypeScript"
gl_help_requested "dashboard-ui" "claude-frontend" "Need API endpoint specs" "⚡"

# Agent 1: Shares progress
gl_progress "claude-backend" "API endpoints complete" "Writing docs" "👉" "🔧"
gl_coordinate "claude-backend" "claude-frontend" "API ready at /docs/api" "🔧"

# Agent 2: Can now proceed
gl_task_claimed "dashboard-ui" "claude-frontend" "Build dashboard"
gl_wip "dashboard-ui" "Integrating with API" "🌸" "👉"

# Both complete
gl_collaboration_success "feature-123" "claude-backend,claude-frontend" "Dashboard shipped"
```

### Use Case 3: Deployment Tracking

```bash
# Start deployment
gl_deployment_started "api" "v2.0.0" "production" "Major feature release"

# Log to PS-SHA∞
gl_deployed "api" "v2.0.0" "production" "All services healthy"

# Monitor health
gl_health_check "api" "https://api.example.com/health" "98ms"

# Handle errors if they occur
gl_error_detected "api" "slow_queries" "Database queries >1s" "high"
```

---

## 🔍 Advanced Features

### Layer 12: Context Propagation

Share understanding across agents:

```bash
gl_learning_discovered \
    "topic" \
    "What you learned" \
    "Why it matters"

gl_pattern_identified \
    "pattern-name" \
    "Description of the pattern" \
    "Where it applies"
```

### Layer 13: Analytics & Observability

Track metrics and performance:

```bash
gl_metric_recorded \
    "metric-name" \
    "123.45" \
    "unit" \
    "context"

gl_performance_tracked \
    "service-name" \
    "response_time" \
    "45ms" \
    "production"
```

### Layer 14: AI Agent Coordination

Advanced multi-agent workflows:

```bash
gl_agent_available "agent" "specialty" "capabilities"
gl_task_claimed "task-id" "agent" "description"
gl_coordinate "from-agent" "to-agent" "message" "domain"
gl_handoff "task-id" "from-agent" "to-agent" "context" "reason"
gl_collaboration_success "task-id" "agent1,agent2" "outcome"
```

---

## 🎨 Emoji Usage Guide

### When to Use Each Emoji

**States (lifecycle):**
- Use ⬛ for ideas not yet started
- Use 📥 for new items in inbox
- Use 🎯 for triaged, ready items
- Use 🏃 for active work
- Use ✅ for completed work

**Scale (effort size):**
- Use 👉 for quick 5-minute tasks
- Use 👊 for 1-2 hour tasks
- Use 🍖 for multi-day work
- Use 🎢 for week-long projects
- Use ⭐ for month-long initiatives

**Domain (area):**
- Use 🔧 for infrastructure
- Use 🎨 for design/creative
- Use 🌀 for AI/ML
- Use 🛣️ for platform/core
- Use 🔐 for security

**Priority:**
- Use 🔥 for "drop everything"
- Use ⚡ for "today"
- Use ⭐ for "this week"
- Use 🎯 for "normal flow"
- Use 🧊 for "someday maybe"

---

## 🧪 Testing & Validation

### Test Your Setup

```bash
# Load templates
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Run a test announcement
gl_announce \
    "test-agent" \
    "Test Project" \
    "1) Test" \
    "Testing GreenLight" \
    "👉" \
    "🔧" \
    "🎯"

# Check memory system
~/memory-system.sh summary | tail -10

# Verify NATS (if available)
nats sub "greenlight.>" --count=1
```

### Validation Checklist

- [ ] Script loads without errors
- [ ] Functions are available (`type gl_announce`)
- [ ] Memory logging works (`~/memory-system.sh summary`)
- [ ] NATS events publish (if NATS configured)
- [ ] Templates follow naming convention

---

## 🔗 Integration with Other Lights

### With RedLight (Templates)

```bash
# RedLight creates templates, GreenLight tracks
source .trinity/redlight/scripts/memory-redlight-templates.sh
rl_template_create "my-template" "world" "3D world"

source .trinity/greenlight/scripts/memory-greenlight-templates.sh
gl_wip "my-template" "Creating template" "🌸" "🎨"
gl_done "my-template" "Template complete" "🌸" "🎨"
```

### With YellowLight (Infrastructure)

```bash
# YellowLight deploys, GreenLight tracks
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
yl_deployment_succeeded "api" "railway" "https://api.io" "1.0.0" "prod"

source .trinity/greenlight/scripts/memory-greenlight-templates.sh
gl_deployed "api" "1.0.0" "production" "Deployment successful"
```

---

## 📊 Best Practices

### DO ✅
- Announce work before starting
- Update progress regularly
- Use appropriate scale indicators
- Tag with correct domain
- Complete phases explicitly
- Share learnings with team
- Coordinate with other agents

### DON'T ❌
- Skip GreenLight tracking
- Leave work in "stealth mode"
- Use wrong scale (be honest about effort)
- Forget to mark done
- Ignore blocked dependencies
- Duplicate work others are doing

---

## 🛠️ Troubleshooting

### Script Won't Load

```bash
# Check if file exists
ls -la .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Check permissions
chmod +x .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Load with explicit path
source /full/path/to/memory-greenlight-templates.sh
```

### Functions Not Working

```bash
# Verify function exists
type gl_announce

# Check for typos
# Correct: gl_announce
# Wrong: gl-announce, greenlight_announce

# Reload script
source .trinity/greenlight/scripts/memory-greenlight-templates.sh
```

### Memory Not Logging

```bash
# Check memory system
~/memory-system.sh status

# Verify PS-SHA∞ is initialized
ls -la ~/.blackroad/memory/

# Check logs
tail -50 ~/.blackroad/memory/memory.log
```

---

## 📦 What's Included

### Scripts
- `memory-greenlight-templates.sh` - 103 template functions

### Documentation (12 files)
- Core reference docs (emoji dictionary, quick reference)
- Layer docs (context, analytics, coordination)
- Integration docs (Slack, Linear, Notion, etc.)

### Integration
- NATS event bus
- PS-SHA∞ memory system
- Trinity compliance system
- BlackRoad Codex

---

## 🌟 Philosophy

> "We don't just track tasks. We share understanding."  
> — The GreenLight Principle

GreenLight isn't a task manager. It's:
- **Collective intelligence** (everyone knows what everyone is doing)
- **Async coordination** (work together without meetings)
- **Learning system** (patterns and learnings preserved)
- **Memory layer** (immutable record of all work)

---

## 🔗 Resources

- **Main Trinity Docs**: `..​/README.md`
- **System Overview**: `..​/system/THE_LIGHT_TRINITY.md`
- **Enforcement Rules**: `..​/system/LIGHT_TRINITY_ENFORCEMENT.md`
- **YellowLight**: `..​/yellowlight/README.md`
- **RedLight**: `..​/redlight/README.md`
- **Codex Integration**: `../../CODEX.md`

---

**Built with:** 💚 Collaborative intelligence  
**For:** All BlackRoad developers and agents  
**Status:** Active and evolving

💚 **GreenLight illuminates the path. Follow it.** ✨
