# 💛 YELLOWLIGHT: Infrastructure & Deployment System
## The Foundation Layer of BlackRoad OS

**Version:** 1.0.0  
**Status:** 🎯 Active  
**Part of:** [Light Trinity System](../README.md)

---

## What is YellowLight?

**YellowLight** is BlackRoad OS's unified infrastructure management, deployment automation, and operations system. It's the foundation layer that handles **how we deploy** and **where we run**.

### Key Capabilities
- 🚀 **Deployment Automation** - Streamlined deployments across platforms
- ☁️ **Multi-Platform Support** - Cloudflare, Railway, DigitalOcean, Pi
- 🔌 **Integration Management** - APIs, webhooks, connectors
- 💚 **Health Monitoring** - Uptime, alerts, recovery
- 🔐 **Secrets Management** - Secure credential handling
- 🛣️ **Memory Integration** - All operations logged to PS-SHA∞

---

## 🎯 Core Concepts

### 1. Approved Platforms

```
☁️ Cloudflare
   - Pages (static sites)
   - Workers (serverless functions)
   - D1 (databases)
   - KV (key-value store)
   - R2 (object storage)
   - Tunnel (secure access)

🚂 Railway
   - Web services
   - PostgreSQL databases
   - Redis caches
   - Automated deployments

🌊 DigitalOcean
   - Droplets (VPS)
   - Long-running services
   - High-memory workloads
   - Custom infrastructure

🥧 Raspberry Pi
   - Edge agents
   - Local development
   - Network services
   - IoT integration

▲ Vercel
   - Next.js applications
   - Serverless functions
   - Edge functions
```

### 2. Infrastructure Components

```
📦 Repositories
   - GitHub organizations
   - Repository management
   - Branch strategies
   - PR workflows

🔌 Connectors
   - API integrations
   - Webhook handlers
   - Event subscribers
   - Data pipelines

🚀 Deployments
   - Service deployments
   - Version management
   - Rollback capability
   - Environment management

🔧 CI/CD
   - GitHub Actions
   - Automated testing
   - Build pipelines
   - Deploy automation

💚 Health Monitoring
   - Endpoint checks
   - Response time tracking
   - Uptime monitoring
   - Alert management

🔐 Secrets
   - API keys
   - Credentials
   - Certificates
   - Environment variables
```

### 3. Deployment Environments

```
🔬 Development (dev)
   - Local development
   - Rapid iteration
   - Full debug access

🧪 Staging (staging)
   - Pre-production testing
   - Integration testing
   - Performance validation

🚀 Production (production)
   - Live services
   - Real users
   - Maximum stability
   - Full monitoring

🔥 Emergency (hotfix)
   - Critical bug fixes
   - Security patches
   - Fast-track deployment
```

---

## 📚 Documentation Files

Located in `docs/` directory:

- **YELLOWLIGHT_INFRASTRUCTURE_SYSTEM.md** - Complete infrastructure guide

---

## 🚀 Quick Start

### 1. Load the Templates

```bash
# Source YellowLight memory templates
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Verify it loaded
type yl_deployment_succeeded
```

### 2. Deploy a Service

```bash
# Deploy to Cloudflare Pages
yl_pages_deploy \
    "my-site" \
    "https://my-site.pages.dev" \
    "abc123"

# Deploy to Railway
yl_deployment_succeeded \
    "my-api" \
    "railway" \
    "https://my-api.railway.app" \
    "1.0.0" \
    "production"

# Configure health monitoring
yl_health_check \
    "my-api" \
    "https://my-api.railway.app/health" \
    "120"
```

### 3. Manage Infrastructure

```bash
# Configure integration
yl_integration_configured \
    "stripe" \
    "my-api" \
    "webhook" \
    "Payment events → /webhooks/stripe"

# Store secret
yl_secret_stored \
    "STRIPE_API_KEY" \
    "github"

# Log workflow completion
yl_workflow_done \
    "my-repo" \
    "passed" \
    "3m45s"
```

---

## 📋 Common Templates

### Deployment Templates

```bash
# Start deployment
yl_deployment_started \
    "service-name" \
    "platform" \
    "version" \
    "environment"

# Successful deployment
yl_deployment_succeeded \
    "service-name" \
    "platform" \
    "url" \
    "version" \
    "environment"

# Failed deployment
yl_deployment_failed \
    "service-name" \
    "platform" \
    "error-message"

# Rollback deployment
yl_deployment_rollback \
    "service-name" \
    "from-version" \
    "to-version" \
    "reason"
```

### Platform-Specific Templates

#### Cloudflare Pages

```bash
# Deploy to Pages
yl_pages_deploy \
    "project-name" \
    "url" \
    "deployment-id"

# Configure custom domain
yl_domain_configured \
    "custom.domain.com" \
    "project.pages.dev" \
    "CNAME"

# Deploy Worker
yl_worker_deployed \
    "worker-name" \
    "url" \
    "version"

# Update KV namespace
yl_kv_updated \
    "namespace-name" \
    "key" \
    "operation"
```

#### Railway

```bash
# Deploy service
yl_railway_deploy \
    "service-name" \
    "url" \
    "version"

# Database operation
yl_database_operation \
    "database-name" \
    "operation" \
    "details"

# Configure environment
yl_env_configured \
    "service-name" \
    "variable-name" \
    "source"
```

#### DigitalOcean

```bash
# Provision droplet
yl_droplet_created \
    "droplet-name" \
    "ip-address" \
    "size" \
    "region"

# Configure server
yl_server_configured \
    "server-name" \
    "configuration" \
    "details"

# Monitor droplet
yl_droplet_health \
    "droplet-name" \
    "status" \
    "metrics"
```

#### Raspberry Pi

```bash
# Deploy to Pi
yl_pi_deploy \
    "pi-name" \
    "service-name" \
    "version"

# Pi health check
yl_pi_health \
    "pi-name" \
    "cpu-temp" \
    "memory-used" \
    "uptime"

# Update Pi
yl_pi_updated \
    "pi-name" \
    "component" \
    "version"
```

### Integration Templates

```bash
# Configure integration
yl_integration_configured \
    "service-a" \
    "service-b" \
    "type" \
    "details"

# Webhook configured
yl_webhook_configured \
    "service" \
    "endpoint" \
    "events"

# API connected
yl_api_connected \
    "service" \
    "api-name" \
    "version"

# Test integration
yl_integration_tested \
    "integration-name" \
    "result" \
    "details"
```

### Health & Monitoring

```bash
# Health check
yl_health_check \
    "service-name" \
    "endpoint-url" \
    "response-time-ms"

# Alert triggered
yl_alert_triggered \
    "service-name" \
    "alert-type" \
    "severity" \
    "details"

# Alert resolved
yl_alert_resolved \
    "service-name" \
    "alert-type" \
    "resolution"

# Uptime recorded
yl_uptime_recorded \
    "service-name" \
    "percentage" \
    "period"
```

### CI/CD Templates

```bash
# Workflow triggered
yl_workflow_trigger \
    "repo-name" \
    "trigger-type" \
    "details"

# Workflow completed
yl_workflow_done \
    "repo-name" \
    "result" \
    "duration"

# Test suite run
yl_tests_run \
    "repo-name" \
    "passed" \
    "failed" \
    "duration"

# Build completed
yl_build_completed \
    "repo-name" \
    "result" \
    "artifacts"
```

### Secrets Management

```bash
# Secret stored
yl_secret_stored \
    "secret-name" \
    "vault"

# Secret rotated
yl_secret_rotated \
    "secret-name" \
    "reason"

# API key rotated
yl_api_key_rotated \
    "service" \
    "reason"

# Certificate updated
yl_certificate_updated \
    "domain" \
    "expiry-date"
```

---

## 🔧 Memory Template Functions

### Function Categories

The script provides these function groups:

#### Deployment Functions
- `yl_deployment_started` - Log deployment start
- `yl_deployment_succeeded` - Log successful deployment
- `yl_deployment_failed` - Log failed deployment
- `yl_deployment_rollback` - Log rollback operation

#### Platform Functions
- `yl_pages_deploy` - Cloudflare Pages deployment
- `yl_worker_deployed` - Cloudflare Worker deployment
- `yl_railway_deploy` - Railway deployment
- `yl_droplet_created` - DigitalOcean droplet
- `yl_pi_deploy` - Raspberry Pi deployment

#### Integration Functions
- `yl_integration_configured` - Configure service integration
- `yl_webhook_configured` - Setup webhook
- `yl_api_connected` - Connect to API
- `yl_integration_tested` - Test integration

#### Monitoring Functions
- `yl_health_check` - Record health check
- `yl_alert_triggered` - Log alert
- `yl_alert_resolved` - Resolve alert
- `yl_uptime_recorded` - Track uptime

#### CI/CD Functions
- `yl_workflow_trigger` - Trigger workflow
- `yl_workflow_done` - Complete workflow
- `yl_tests_run` - Run test suite
- `yl_build_completed` - Complete build

#### Security Functions
- `yl_secret_stored` - Store secret
- `yl_secret_rotated` - Rotate secret
- `yl_api_key_rotated` - Rotate API key
- `yl_certificate_updated` - Update certificate

---

## 🛣️ Memory Integration

All YellowLight actions are logged to PS-SHA∞:

```bash
# View memory
~/memory-system.sh summary | grep yellowlight

# Search for deployments
~/memory-system.sh search "yl_deployment_succeeded"

# Verify memory integrity
~/memory-system.sh verify
```

---

## 🎯 Use Cases

### Use Case 1: Deploy Static Site to Cloudflare Pages

```bash
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Build the site
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy ./dist --project-name=my-site

# Log to YellowLight
yl_pages_deploy \
    "my-site" \
    "https://my-site.pages.dev" \
    "$(wrangler pages deployment list --project-name=my-site --limit=1 --format=json | jq -r '.[0].id')"

# Configure custom domain
yl_domain_configured \
    "my-site.com" \
    "my-site.pages.dev" \
    "CNAME"

# Verify health
yl_health_check \
    "my-site" \
    "https://my-site.com" \
    "145"
```

### Use Case 2: Deploy API to Railway

```bash
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Announce deployment (GreenLight)
gl_deployment_started "my-api" "v2.0.0" "production" "New features"

# Deploy to Railway
railway up

# Get deployment URL
RAILWAY_URL=$(railway status --json | jq -r '.url')

# Log to YellowLight
yl_deployment_succeeded \
    "my-api" \
    "railway" \
    "$RAILWAY_URL" \
    "v2.0.0" \
    "production"

# Configure environment variables
yl_env_configured "my-api" "DATABASE_URL" "railway-secrets"
yl_env_configured "my-api" "REDIS_URL" "railway-secrets"

# Test health endpoint
yl_health_check \
    "my-api" \
    "$RAILWAY_URL/health" \
    "98"

# Complete deployment (GreenLight)
gl_deployed "my-api" "v2.0.0" "production" "All checks passing"
```

### Use Case 3: Rollback Failed Deployment

```bash
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Deployment fails
yl_deployment_failed \
    "my-service" \
    "cloudflare" \
    "Health check timeout after 5 minutes"

# Log error (GreenLight)
gl_error_detected \
    "my-service" \
    "deployment_failure" \
    "Service not responding to health checks" \
    "critical"

# Rollback to previous version
yl_deployment_rollback \
    "my-service" \
    "v1.2.5" \
    "v1.2.4" \
    "Health check failures in v1.2.5"

# Deploy previous version
wrangler pages deploy ./backup/v1.2.4 --project-name=my-service

# Verify rollback success
yl_deployment_succeeded \
    "my-service" \
    "cloudflare" \
    "https://my-service.pages.dev" \
    "v1.2.4" \
    "production"

# Confirm health
yl_health_check \
    "my-service" \
    "https://my-service.pages.dev/health" \
    "110"

# Update status (GreenLight)
gl_progress \
    "ops-team" \
    "Rolled back to v1.2.4" \
    "Investigating v1.2.5 issues" \
    "👉" \
    "🔧"
```

### Use Case 4: Multi-Platform Deployment

```bash
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Deploy frontend to Cloudflare Pages
yl_pages_deploy \
    "frontend" \
    "https://app.example.com" \
    "deploy-abc123"

# Deploy API to Railway
yl_deployment_succeeded \
    "api" \
    "railway" \
    "https://api.example.com" \
    "v1.0.0" \
    "production"

# Deploy background workers to DigitalOcean
yl_deployment_succeeded \
    "workers" \
    "digitalocean" \
    "159.65.43.12:8080" \
    "v1.0.0" \
    "production"

# Configure integrations
yl_integration_configured \
    "frontend" \
    "api" \
    "rest-api" \
    "Frontend → API communication"

yl_integration_configured \
    "api" \
    "workers" \
    "message-queue" \
    "API → Workers task queue"

# Setup monitoring
yl_health_check "frontend" "https://app.example.com" "85"
yl_health_check "api" "https://api.example.com/health" "120"
yl_health_check "workers" "http://159.65.43.12:8080/health" "150"
```

### Use Case 5: Secrets Rotation

```bash
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Rotate Stripe API key
yl_api_key_rotated "stripe" "90-day scheduled rotation"

# Store new secret
yl_secret_stored "STRIPE_API_KEY_NEW" "github"

# Update services
yl_env_configured "billing-api" "STRIPE_API_KEY" "rotated"
yl_env_configured "payment-worker" "STRIPE_API_KEY" "rotated"

# Test integrations
yl_integration_tested "stripe-billing" "passed" "New key validated"

# Deploy with new secrets
yl_deployment_succeeded \
    "billing-api" \
    "railway" \
    "https://billing.api.com" \
    "v1.2.6" \
    "production"
```

---

## 🔍 Advanced Features

### Health Monitoring Strategies

```bash
# Simple health check
yl_health_check "service" "url" "response-time"

# Monitor multiple endpoints
yl_health_check "api" "https://api.com/health" "100"
yl_health_check "api" "https://api.com/db-health" "250"
yl_health_check "api" "https://api.com/cache-health" "50"

# Track uptime
yl_uptime_recorded "api" "99.95" "last-30-days"

# Alert on issues
yl_alert_triggered "api" "high-latency" "warning" "Response time >500ms"
yl_alert_triggered "api" "database-error" "critical" "Connection timeout"

# Resolve alerts
yl_alert_resolved "api" "high-latency" "Scaled up to 3 instances"
```

### CI/CD Automation

```bash
# Automated workflow
yl_workflow_trigger "my-repo" "push" "main branch"

# Run tests
yl_tests_run "my-repo" "45" "0" "2m15s"

# Build application
yl_build_completed "my-repo" "success" "dist.tar.gz"

# Deploy to staging
yl_deployment_succeeded \
    "my-app" \
    "cloudflare" \
    "https://staging.my-app.com" \
    "v1.2.3-staging.456" \
    "staging"

# Test in staging
yl_integration_tested "my-app-staging" "passed" "All integration tests OK"

# Deploy to production
yl_deployment_succeeded \
    "my-app" \
    "cloudflare" \
    "https://my-app.com" \
    "v1.2.3" \
    "production"

# Mark workflow complete
yl_workflow_done "my-repo" "passed" "8m30s"
```

### Multi-Environment Management

```bash
# Development
yl_deployment_succeeded "app" "local" "http://localhost:3000" "dev" "development"

# Staging
yl_deployment_succeeded "app" "cloudflare" "https://staging.app.com" "v1.0.0-rc.1" "staging"

# Production
yl_deployment_succeeded "app" "cloudflare" "https://app.com" "v1.0.0" "production"

# Track health across environments
yl_health_check "app-dev" "http://localhost:3000/health" "50"
yl_health_check "app-staging" "https://staging.app.com/health" "120"
yl_health_check "app-prod" "https://app.com/health" "95"
```

---

## 🔗 Integration with Other Lights

### With GreenLight (Project Management)

```bash
# GreenLight announces deployment
source .trinity/greenlight/scripts/memory-greenlight-templates.sh
gl_deployment_started "service" "v1.0.0" "production" "New release"

# YellowLight handles infrastructure
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
yl_deployment_succeeded "service" "railway" "url" "v1.0.0" "production"
yl_health_check "service" "url/health" "100"

# GreenLight confirms success
gl_deployed "service" "v1.0.0" "production" "All systems operational"
```

### With RedLight (Templates)

```bash
# RedLight creates template
source .trinity/redlight/scripts/memory-redlight-templates.sh
rl_template_create "my-world" "world" "3D environment"

# YellowLight deploys it
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
yl_pages_deploy "my-world" "https://my-world.pages.dev" "deploy-123"

# RedLight tracks deployment
rl_template_deploy "my-world" "https://my-world.pages.dev" "cloudflare"
```

---

## 📊 Best Practices

### DO ✅
- Log all deployments (success and failure)
- Test health endpoints after deployment
- Have rollback capability ready
- Store secrets securely (never in code)
- Monitor services continuously
- Document infrastructure changes
- Use appropriate platforms for workloads
- Automate repetitive tasks

### DON'T ❌
- Deploy without logging
- Skip health checks
- Hard-code secrets in code
- Deploy to unapproved platforms
- Ignore monitoring alerts
- Forget about rollback plans
- Over-engineer simple deployments
- Skip CI/CD workflows

---

## 🔐 Security Guidelines

### Secrets Management

```bash
# ✅ GOOD: Store in secure vault
yl_secret_stored "API_KEY" "github-secrets"
yl_secret_stored "DATABASE_URL" "railway-env"

# ❌ BAD: Hard-coded in code
# const API_KEY = "sk_live_123abc456def"

# ✅ GOOD: Rotate regularly
yl_api_key_rotated "stripe" "90-day rotation policy"

# ✅ GOOD: Use environment variables
yl_env_configured "service" "API_KEY" "from-vault"
```

### Access Control

- Use principle of least privilege
- Rotate credentials every 90 days
- Monitor access logs
- Use separate keys per environment
- Never share production credentials

### Network Security

- Use HTTPS everywhere
- Configure proper CORS
- Enable WAF rules (Cloudflare)
- Monitor for suspicious traffic
- Regular security audits

---

## 🛠️ Troubleshooting

### Script Won't Load

```bash
# Check file exists
ls -la .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Check permissions
chmod +x .trinity/yellowlight/scripts/memory-yellowlight-templates.sh

# Load with full path
source /full/path/to/memory-yellowlight-templates.sh
```

### Deployment Fails

```bash
# Check platform status
# Cloudflare: https://www.cloudflarestatus.com/
# Railway: https://status.railway.app/

# Verify credentials
# Check API keys, tokens, access rights

# Review logs
yl_deployment_failed "service" "platform" "error-message"

# Attempt rollback
yl_deployment_rollback "service" "new-version" "old-version" "reason"
```

### Health Check Issues

```bash
# Verify endpoint exists
curl https://your-service.com/health

# Check response time
time curl https://your-service.com/health

# Review error logs
yl_alert_triggered "service" "health-check-fail" "critical" "details"

# Fix and verify
yl_health_check "service" "url/health" "response-time"
```

---

## 📦 What's Included

### Scripts
- `memory-yellowlight-templates.sh` - Infrastructure template functions
- `trinity-codex-integration.sh` - Codex integration script

### Documentation
- `YELLOWLIGHT_INFRASTRUCTURE_SYSTEM.md` - Complete guide

### Integration
- PS-SHA∞ memory system
- Trinity compliance system
- BlackRoad Codex
- Multi-platform support

---

## 🌟 Philosophy

> "Infrastructure should be invisible when it works,  
> and obvious when it doesn't."  
> — The YellowLight Principle

YellowLight isn't just DevOps. It's:
- **Foundation** (reliable infrastructure for everything)
- **Automation** (deploy once, run everywhere)
- **Observability** (know what's happening always)
- **Recovery** (quick fixes when things break)

---

## 🔗 Resources

- **Main Trinity Docs**: `../README.md`
- **System Overview**: `../system/THE_LIGHT_TRINITY.md`
- **Enforcement Rules**: `../system/LIGHT_TRINITY_ENFORCEMENT.md`
- **GreenLight**: `../greenlight/README.md`
- **RedLight**: `../redlight/README.md`
- **Codex Integration**: `../../CODEX.md`

### Platform Documentation
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Railway](https://docs.railway.app/)
- [DigitalOcean](https://docs.digitalocean.com/)

---

**Built with:** 💛 Infrastructure excellence  
**For:** All BlackRoad services and deployments  
**Status:** Active and reliable

💛 **YellowLight provides the foundation. Build on it.** ✨
