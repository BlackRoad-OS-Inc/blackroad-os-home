# 🔴 REDLIGHT: Template & Brand System
## The Visual Layer of BlackRoad OS

**Version:** 1.0.0  
**Status:** 🎯 Active  
**Part of:** [Light Trinity System](../README.md)

---

## What is RedLight?

**RedLight** is BlackRoad OS's unified template, brand, and visual design system. It's the presentation layer that defines **what users see** and **how they experience** BlackRoad OS.

### Key Capabilities
- 🎨 **Brand Consistency** - Unified visual identity across all properties
- 🌍 **3D World Templates** - Interactive Three.js environments
- ✨ **Animation System** - Motion graphics and visual effects
- 🎯 **Design Patterns** - Reusable UI/UX components
- 📐 **Golden Ratio Design** - φ (1.618) based layouts
- 🚀 **Deploy-Ready** - Self-contained, production-ready templates

---

## 🎯 Core Concepts

### 1. Brand Colors (The BlackRoad Gradient)

```css
/* Primary Gradient: Amber → Blue */
#FF9D00  /* Amber  🟠 Start */
#FF6B00  /* Orange 🟠 */
#FF0066  /* Pink   🟥 */
#FF006B  /* Magenta 🟥 */
#D600AA  /* Purple 🟣 */
#7700FF  /* Violet 🟣 */
#0066FF  /* Blue   🔵 End */

/* Usage */
background: linear-gradient(135deg, #FF9D00 0%, #FF0066 50%, #0066FF 100%);
```

### 2. Typography Stack

```css
/* Primary Font Stack */
font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Monospace Stack */
font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code',
             'Droid Sans Mono', 'Source Code Pro', monospace;

/* Font Weights */
100  /* Ultra Light */
300  /* Light */
400  /* Regular */
500  /* Medium */
600  /* Semibold */
700  /* Bold */
800  /* Heavy */
900  /* Black */
```

### 3. Design System (Golden Ratio - φ)

```css
/* Spacing Scale (based on φ = 1.618) */
--space-xs:   0.25rem;  /* 4px */
--space-sm:   0.618rem; /* ~10px */
--space-md:   1rem;     /* 16px */
--space-lg:   1.618rem; /* ~26px */
--space-xl:   2.618rem; /* ~42px */
--space-2xl:  4.236rem; /* ~68px */

/* Font Size Scale */
--text-xs:   0.618rem;  /* ~10px */
--text-sm:   0.809rem;  /* ~13px */
--text-base: 1rem;      /* 16px */
--text-lg:   1.618rem;  /* ~26px */
--text-xl:   2.618rem;  /* ~42px */
--text-2xl:  4.236rem;  /* ~68px */

/* Border Radius */
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  16px;
--radius-xl:  24px;
```

### 4. Template Categories

```
🌍 Worlds (13 templates)
   - Interactive 3D environments
   - Three.js powered
   - Real-time rendering
   - Deploy-ready HTML

✨ Animations (4 templates)
   - Motion graphics
   - Particle systems
   - Shader effects
   - Visual transitions

🌐 Websites (6 templates)
   - Landing pages
   - Marketing sites
   - Product showcases
   - Design systems
```

---

## 📚 Documentation Files

Located in `docs/` directory:

- **REDLIGHT_TEMPLATE_SYSTEM.md** - Complete template system guide

---

## 🚀 Quick Start

### 1. Load the Templates

```bash
# Source RedLight memory templates
source .trinity/redlight/scripts/memory-redlight-templates.sh

# Verify it loaded
type rl_template_create
```

### 2. Copy a Template

```bash
# List available templates
ls .trinity/redlight/templates/

# Copy a template
cp .trinity/redlight/templates/blackroad-earth.html ./my-world.html

# Edit the template
# Replace title, content, customize features
# Template is self-contained!
```

### 3. Deploy the Template

```bash
# Deploy to Cloudflare Pages
wrangler pages deploy my-world.html --project-name=my-world

# Log to RedLight
rl_template_deploy \
    "my-world" \
    "https://my-world.pages.dev" \
    "cloudflare"

# Test performance
rl_performance_metrics \
    "my-world" \
    "60" \
    "1.2" \
    "180"
```

---

## 📋 Available Templates

### 🌍 World Templates

#### blackroad-earth.html
- **Description**: Interactive Earth globe with city networks
- **Features**: Real-time rotation, city connections, atmospheric glow
- **Performance**: 60 FPS, <2s load time
- **Use Case**: Global network visualization, world maps

#### blackroad-earth-biomes.html
- **Description**: Living Earth with climate zones
- **Features**: Biome layers, seasonal changes, temperature zones
- **Performance**: 60 FPS, <2.5s load time
- **Use Case**: Climate visualization, environmental data

#### blackroad-earth-game.html
- **Description**: Interactive Earth game
- **Features**: Click interactions, missions, achievements
- **Performance**: 60 FPS, <3s load time
- **Use Case**: Educational games, interactive experiences

#### blackroad-earth-real.html
- **Description**: Photo-realistic Earth
- **Features**: High-res textures, realistic lighting, clouds
- **Performance**: 45-60 FPS, <4s load time
- **Use Case**: High-quality visualizations, presentations

#### blackroad-living-planet.html
- **Description**: Animated living planet
- **Features**: Pulsing glow, dynamic atmosphere, orbital mechanics
- **Performance**: 60 FPS, <2s load time
- **Use Case**: Sci-fi environments, dynamic worlds

#### blackroad-metaverse.html
- **Description**: Metaverse environment
- **Features**: Multiple spaces, portals, navigation
- **Performance**: 50-60 FPS, <3s load time
- **Use Case**: Virtual worlds, metaverse projects

#### blackroad-world-template.html
- **Description**: Base world starter template
- **Features**: Minimal setup, easy customization
- **Performance**: 60 FPS, <1s load time
- **Use Case**: Starting point for new worlds

#### blackroad-3d-world.html
- **Description**: General 3D environment
- **Features**: Customizable objects, lighting, camera
- **Performance**: 60 FPS, <2s load time
- **Use Case**: Custom 3D experiences

#### earth-replica.html
- **Description**: Earth replica with realistic physics
- **Features**: Accurate geography, physics simulation
- **Performance**: 55-60 FPS, <3s load time
- **Use Case**: Educational, scientific visualization

### ✨ Animation Templates

#### blackroad-animation.html
- **Description**: Core animation system
- **Features**: Tweening, easing, keyframes
- **Performance**: 60 FPS, <1s load time
- **Use Case**: Motion graphics, transitions

#### blackroad-motion.html
- **Description**: Advanced motion graphics
- **Features**: Particle systems, trails, effects
- **Performance**: 60 FPS, <2s load time
- **Use Case**: Visual effects, intros, presentations

#### schematiq-animation.html
- **Description**: Schematiq design system animations
- **Features**: Brand-specific animations, component transitions
- **Performance**: 60 FPS, <1.5s load time
- **Use Case**: Schematiq brand assets

### 🌐 Website Templates

#### blackroad-ultimate.html
- **Description**: Ultimate landing page
- **Features**: Hero, features, CTA, responsive
- **Performance**: 60 FPS, <1.5s load time
- **Use Case**: Product launches, marketing

#### black-road-os-ultimate (2).html
- **Description**: BlackRoad OS showcase
- **Features**: Platform features, tech stack, demos
- **Performance**: 60 FPS, <2s load time
- **Use Case**: BlackRoad OS marketing

#### blackroad-architecture-visual.html
- **Description**: Architecture diagram visualization
- **Features**: Interactive diagrams, system maps
- **Performance**: 60 FPS, <2s load time
- **Use Case**: Technical documentation, presentations

#### schematiq-page.html
- **Description**: Schematiq design system page
- **Features**: Component library, design tokens, examples
- **Performance**: 60 FPS, <2s load time
- **Use Case**: Design system documentation

#### blackroad-game.html
- **Description**: Game template
- **Features**: Game loop, physics, controls
- **Performance**: 60 FPS, <2.5s load time
- **Use Case**: Web games, interactive experiences

#### blackroad_brand_take_2.html
- **Description**: Brand presentation
- **Features**: Brand colors, typography, guidelines
- **Performance**: 60 FPS, <1s load time
- **Use Case**: Brand guidelines, style guides

---

## 🔧 Memory Template Functions

### Template Management

```bash
# Create new template
rl_template_create \
    "template-name" \
    "category" \
    "description"

# Deploy template
rl_template_deploy \
    "template-name" \
    "url" \
    "platform"

# Copy template
rl_template_copy \
    "source-template" \
    "new-template" \
    "description"

# Archive template
rl_template_archive \
    "template-name" \
    "reason"
```

### Feature Tracking

```bash
# Add feature to template
rl_feature_add \
    "template-name" \
    "feature-name" \
    "description"

# Add biome/layer
rl_biome_add \
    "world-name" \
    "biome-name" \
    "properties"

# Add interaction
rl_interaction_add \
    "template-name" \
    "interaction-type" \
    "description"
```

### Testing & Validation

```bash
# Log test pass
rl_test_passed \
    "template-name" \
    "test-type" \
    "details"

# Log test failure
rl_test_failed \
    "template-name" \
    "test-type" \
    "error-message"

# Performance metrics
rl_performance_metrics \
    "template-name" \
    "fps" \
    "load-time-seconds" \
    "memory-mb"

# Accessibility test
rl_accessibility_test \
    "template-name" \
    "wcag-level" \
    "result"
```

### Analytics

```bash
# Record view
rl_view_recorded \
    "template-name" \
    "viewer-type" \
    "context"

# Record session
rl_session_tracked \
    "template-name" \
    "duration-seconds" \
    "interactions"

# A/B test result
rl_ab_test_result \
    "test-name" \
    "variant" \
    "metric" \
    "value"
```

---

## 🛣️ Memory Integration

All RedLight actions are logged to PS-SHA∞:

```bash
# View memory
~/memory-system.sh summary | grep redlight

# Search for templates
~/memory-system.sh search "rl_template_create"

# Verify memory integrity
~/memory-system.sh verify
```

---

## 🎯 Use Cases

### Use Case 1: Create New World from Template

```bash
source .trinity/redlight/scripts/memory-redlight-templates.sh
source .trinity/greenlight/scripts/memory-greenlight-templates.sh

# Announce work (GreenLight)
gl_announce "designer" "Mars World" "1) Design 2) Build 3) Deploy" "Interactive Mars experience"

# Copy Earth template
cp .trinity/redlight/templates/blackroad-earth.html ./mars-world.html

# Create RedLight entry
rl_template_create "mars-world" "world" "Interactive Mars globe with rover missions"

# Customize the template
# - Change textures to Mars
# - Update colors (red/orange theme)
# - Add Mars-specific features

# Add features
rl_biome_add "mars-world" "olympus-mons" "Tallest volcano in solar system"
rl_biome_add "mars-world" "valles-marineris" "Massive canyon system"
rl_biome_add "mars-world" "polar-ice-cap" "CO2 ice cap"

# Add interactions
rl_interaction_add "mars-world" "rover-missions" "Click to explore rover landing sites"

# Test brand compliance
rl_test_passed "mars-world" "visual" "Brand gradient applied to Mars atmosphere"

# Test performance
rl_performance_metrics "mars-world" "60" "1.8" "190"

# Test accessibility
rl_accessibility_test "mars-world" "WCAG 2.1 AA" "passed"

# Deploy
wrangler pages deploy mars-world.html --project-name=mars-world
rl_template_deploy "mars-world" "https://mars-world.pages.dev" "cloudflare"

# Complete (GreenLight)
gl_phase_done "deployment" "Mars World" "Live at mars-world.pages.dev" "🌌"
```

### Use Case 2: Create Landing Page

```bash
source .trinity/redlight/scripts/memory-redlight-templates.sh

# Copy ultimate template
cp .trinity/redlight/templates/blackroad-ultimate.html ./product-launch.html

# Create entry
rl_template_create "product-launch" "website" "Product launch landing page"

# Customize content
# - Update hero section
# - Add product features
# - Include CTAs
# - Add testimonials

# Test
rl_test_passed "product-launch" "visual" "Brand colors validated"
rl_test_passed "product-launch" "responsive" "Mobile, tablet, desktop tested"
rl_performance_metrics "product-launch" "60" "0.9" "85"
rl_accessibility_test "product-launch" "WCAG 2.1 AA" "passed"

# Deploy
rl_template_deploy "product-launch" "https://product.com" "cloudflare"
```

### Use Case 3: A/B Test Different Designs

```bash
source .trinity/redlight/scripts/memory-redlight-templates.sh

# Create variant A
rl_template_create "landing-a" "website" "Hero with video"
rl_template_deploy "landing-a" "https://test-a.pages.dev" "cloudflare"

# Create variant B
rl_template_create "landing-b" "website" "Hero with animation"
rl_template_deploy "landing-b" "https://test-b.pages.dev" "cloudflare"

# Run test
rl_ab_test_result "landing-hero" "variant-a" "conversion-rate" "3.2"
rl_ab_test_result "landing-hero" "variant-b" "conversion-rate" "4.7"

# Winner: variant-b
rl_template_archive "landing-a" "Lost A/B test to variant-b"
```

### Use Case 4: Performance Optimization

```bash
source .trinity/redlight/scripts/memory-redlight-templates.sh

# Initial metrics
rl_performance_metrics "my-world" "45" "3.5" "450"
# 45 FPS, 3.5s load, 450MB memory - needs optimization

# Optimize
# - Reduce texture sizes
# - Optimize geometry
# - Improve shaders
# - Lazy load assets

# Test again
rl_performance_metrics "my-world" "60" "1.2" "180"
# 60 FPS, 1.2s load, 180MB memory - much better!

rl_test_passed "my-world" "performance" "Optimized to 60 FPS, <2s load"
```

---

## 🔍 Advanced Features

### Biome System (for World Templates)

World templates support biomes/layers:

```bash
# Add different biomes to Earth
rl_biome_add "earth" "tropical-rainforest" "High rainfall, biodiversity"
rl_biome_add "earth" "desert" "Arid, extreme temperatures"
rl_biome_add "earth" "tundra" "Cold, permafrost"
rl_biome_add "earth" "ocean" "70% of surface, coral reefs"
rl_biome_add "earth" "mountain" "High elevation, snow caps"
```

### Interaction Patterns

```bash
# Click interactions
rl_interaction_add "world" "click-city" "Click cities to see info"

# Hover effects
rl_interaction_add "world" "hover-highlight" "Hover to highlight regions"

# Keyboard controls
rl_interaction_add "world" "wasd-camera" "WASD keys control camera"

# Touch gestures
rl_interaction_add "world" "pinch-zoom" "Pinch to zoom on mobile"
```

### Animation System

```bash
# Particle effects
rl_feature_add "animation" "particles" "10k particle system"

# Tweening
rl_feature_add "animation" "tween" "Smooth easing animations"

# Physics
rl_feature_add "animation" "physics" "Gravity and collision"

# Shaders
rl_feature_add "animation" "shaders" "Custom GLSL shaders"
```

---

## 🔗 Integration with Other Lights

### With GreenLight (Project Management)

```bash
# GreenLight tracks work
source .trinity/greenlight/scripts/memory-greenlight-templates.sh
gl_announce "designer" "New Template" "1) Design 2) Build" "Create awesome template"

# RedLight creates template
source .trinity/redlight/scripts/memory-redlight-templates.sh
rl_template_create "new-template" "world" "Description"

# GreenLight marks done
gl_done "new-template" "Template complete" "🌸" "🎨"
```

### With YellowLight (Infrastructure)

```bash
# RedLight creates template
source .trinity/redlight/scripts/memory-redlight-templates.sh
rl_template_create "my-site" "website" "Landing page"

# YellowLight deploys it
source .trinity/yellowlight/scripts/memory-yellowlight-templates.sh
yl_pages_deploy "my-site" "https://my-site.pages.dev" "deploy-123"

# RedLight tracks deployment
rl_template_deploy "my-site" "https://my-site.pages.dev" "cloudflare"
```

---

## 📊 Best Practices

### DO ✅
- Use BlackRoad brand colors
- Follow golden ratio spacing
- Test performance (target: 60 FPS)
- Ensure accessibility (WCAG 2.1 AA)
- Keep templates self-contained
- Test on mobile devices
- Optimize before deploying
- Document customizations

### DON'T ❌
- Use off-brand colors
- Skip performance testing
- Ignore accessibility
- Create heavy templates (>5MB)
- Hard-code environment-specific values
- Deploy without testing
- Break golden ratio principles
- Forget responsive design

---

## 🎨 Customization Guide

### Changing Colors

```javascript
// Find color definitions in template
const colors = {
    primary: '#FF9D00',   // Amber
    secondary: '#FF0066', // Pink
    accent: '#0066FF',    // Blue
};

// Update to your needs while keeping brand harmony
// Stay within BlackRoad gradient: #FF9D00 → #0066FF
```

### Adding Features

```javascript
// Add new interactive element
function addCustomFeature() {
    // Your code here
    // Follow existing patterns in template
}

// Log to RedLight
rl_feature_add "template-name" "custom-feature" "Description"
```

### Performance Tuning

```javascript
// Reduce triangle count
geometry.setDrawRange(0, reducedCount);

// Optimize textures
texture.minFilter = THREE.LinearMipMapLinearFilter;
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

// Frustum culling
object.frustumCulled = true;

// Level of Detail (LOD)
const lod = new THREE.LOD();
lod.addLevel(highDetail, 0);
lod.addLevel(mediumDetail, 50);
lod.addLevel(lowDetail, 100);
```

---

## 🛠️ Troubleshooting

### Template Won't Load

```bash
# Check file size
ls -lh template.html

# If >5MB, optimize:
# - Compress textures
# - Reduce geometry
# - Remove unused code

# Test locally
python3 -m http.server 8000
# Open http://localhost:8000/template.html
```

### Low FPS

```javascript
// Check FPS in console
console.log('FPS:', Math.round(1000 / deltaTime));

// Common fixes:
// 1. Reduce particle count
// 2. Simplify geometry
// 3. Optimize shaders
// 4. Use simpler materials
// 5. Enable frustum culling
```

### Accessibility Issues

```bash
# Run accessibility audit
# Use Lighthouse in Chrome DevTools
# Or axe DevTools extension

# Common fixes:
# - Add alt text to images
# - Ensure keyboard navigation
# - Add ARIA labels
# - Sufficient color contrast
# - Focus indicators visible
```

---

## 📦 What's Included

### Templates (23 files)
- 13 World templates
- 4 Animation templates
- 6 Website templates

### Scripts
- `memory-redlight-templates.sh` - Template management functions

### Documentation
- `REDLIGHT_TEMPLATE_SYSTEM.md` - Complete guide

### Integration
- PS-SHA∞ memory system
- Trinity compliance system
- BlackRoad Codex
- Deploy automation

---

## 🌟 Philosophy

> "Design is not just what it looks like and feels like.  
> Design is how it works."  
> — Steve Jobs

RedLight embodies this by:
- **Visual Excellence** (beautiful, on-brand design)
- **Performance** (smooth, fast, responsive)
- **Accessibility** (usable by everyone)
- **Reusability** (templates, not one-offs)

---

## 🔗 Resources

- **Main Trinity Docs**: `../README.md`
- **System Overview**: `../system/THE_LIGHT_TRINITY.md`
- **Enforcement Rules**: `../system/LIGHT_TRINITY_ENFORCEMENT.md`
- **GreenLight**: `../greenlight/README.md`
- **YellowLight**: `../yellowlight/README.md`
- **Codex Integration**: `../../CODEX.md`

### Design Resources
- [Three.js Documentation](https://threejs.org/docs/)
- [Golden Ratio Calculator](https://www.calculatorsoup.com/calculators/math/goldenratio.php)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

---

**Built with:** 🔴 Visual excellence  
**For:** All BlackRoad experiences and interfaces  
**Status:** Active and beautiful

🔴 **RedLight shows the way. Follow the glow.** ✨
