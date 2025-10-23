# Handoff Document for Bolt.new

**Project:** AI Intelligence Hub
**Version:** v1.1.0 (in progress - 60% complete)
**Last Updated:** October 23, 2025
**Current Status:** Ready for handoff - all changes committed and pushed

---

## 🎯 QUICK START FOR BOLT

### Tell Bolt This Exactly:

```
I'm working on the AI Intelligence Hub project. Here are the complete technical specifications:

FRAMEWORK & TECH STACK:
- Frontend: Vanilla HTML5, CSS3, JavaScript ES6+
- No framework (no React, Vue, Angular)
- No build tools (no Webpack, Vite, Parcel)
- No package manager (no npm, yarn)
- Pure static site (can run by opening index.html)

DEPENDENCIES (CDN only):
- Font Awesome 6.0.0 (icons)
- Google Fonts: Inter (font family, weights: 300-700)

DATABASE:
- No backend or database
- All data stored in JavaScript objects/arrays in script.js
- Main databases: aiToolsDatabase (33 tools), workflowTemplates (15 workflows)

FILE STRUCTURE:
- index.html (main HTML - 21KB)
- script.js (JavaScript logic - 116KB with 33 tools, 15 workflows)
- styles.css (CSS styling)
- All documentation files (*.md)

CURRENT PROGRESS:
- 33 AI tools in database (target: 45-60)
- 15 workflows across 6 categories (target: 15-20) ✅
- Features: Pricing calculator, tool alternatives, workflow filtering
- Next task: Phase 2 Step 2B - Add 5 more tools

IMPORTANT:
- Read SESSION_SUMMARY.md for complete session history
- Read IMPLEMENTATION_PLAN_V2.md for roadmap
- All code must be vanilla JS (no framework dependencies)
- Continue using same patterns and structure
```

---

## 📋 COMPLETE TECHNICAL SPECIFICATIONS

### Technology Stack

| Component | Technology | Version | Source |
|-----------|------------|---------|--------|
| **HTML** | HTML5 | Latest | Native |
| **CSS** | CSS3 | Latest | Native |
| **JavaScript** | ES6+ (ES2015+) | Latest | Native |
| **Icons** | Font Awesome | 6.0.0 | CDN |
| **Fonts** | Google Fonts (Inter) | Latest | CDN |
| **Build Tool** | None | - | Static site |
| **Package Manager** | None | - | No dependencies |
| **Framework** | None (Vanilla JS) | - | Pure JavaScript |
| **Backend** | None | - | Frontend only |
| **Database** | In-memory JS objects | - | Client-side only |

### CDN Links (Required)

```html
<!-- Font Awesome Icons -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 📁 PROJECT STRUCTURE

```
ai-video-generation-directory/
├── index.html              # Main HTML (21KB)
├── script.js               # JavaScript (116KB) - Contains all data & logic
├── styles.css              # CSS styling
│
├── SESSION_SUMMARY.md      # Complete session history - READ THIS FIRST!
├── IMPLEMENTATION_PLAN_V2.md # Roadmap and next steps
├── TODO.md                 # Task checklist
├── HANDOFF_TO_BOLT.md      # This file
│
├── README.md               # Project overview
├── CODE_REVIEW.md          # Code analysis
├── CHANGELOG.md            # Version history
├── CONTRIBUTING.md         # Development guidelines
├── GETTING_STARTED.md      # Quick start guide
├── GIT_REFERENCE.md        # Git history
├── CLAUDE_CODE_TIPS.md     # Claude Code usage tips
└── LOCAL_TESTING.md        # Testing instructions
```

---

## 💾 DATA STRUCTURE

### 1. AI Tools Database (33 tools)

**Location:** `script.js` lines 7-788

**Schema:**
```javascript
{
    id: 'tool-slug',                    // Unique identifier (string)
    name: 'Tool Name',                  // Display name
    logo: '🤖',                         // Emoji logo
    company: 'Company Name',            // Creator/company
    description: 'Tool description',    // 1-2 sentence description
    primaryCategory: 'category-name',   // Main category
    subcategories: ['sub1', 'sub2'],   // Array of subcategories

    pricing: {
        model: 'freemium',              // 'free', 'freemium', 'paid'
        monthlyCost: 20,                // Number (0 for free)
        freeTier: true                  // Boolean
    },

    performance: {
        quality: 90,                    // 0-100
        speed: 85,                      // 0-100
        consistency: 88,                // 0-100
        reliability: 92                 // 0-100
    },

    userExperience: {
        learningCurve: 'beginner',      // 'beginner', 'intermediate', 'advanced'
        interfaceQuality: 92,           // 0-100
        documentation: 'excellent'      // 'poor', 'good', 'excellent'
    },

    features: ['Feature 1', 'Feature 2'],           // Array of strings
    useCases: ['Use case 1', 'Use case 2'],         // Array of strings
    integrations: ['Integration 1', 'Integration 2'], // Array of strings
    limitations: ['Limitation 1', 'Limitation 2'],  // Array of strings

    vibeAlignment: {
        creative: 8,                    // 0-10
        productive: 9,                  // 0-10
        explorative: 10,                // 0-10
        relaxed: 7                      // 0-10
    },

    analytics: {
        popularity: 85,                 // 0-100
        growth: 'rapid',                // 'slow', 'steady', 'rapid', 'explosive'
        userSatisfaction: 92            // 0-100
    },

    community: {
        rating: 4.7,                    // 0-5
        reviewCount: 8500,              // Number
        activeUsers: '2M+'              // String
    },

    roiScore: 2850,                     // Calculated score
    website: 'https://tool.com',        // Official website URL
    alternatives: ['tool-id-1', 'tool-id-2']  // Array of alternative tool IDs
}
```

**Current Tools (33):**
1. ChatGPT, Claude, Runway Gen-2, Pika Labs, Stable Video Diffusion
2. Midjourney, DALL-E 3, Stable Diffusion, Canva Magic Studio
3. ElevenLabs, Murf.ai, Perplexity, GitHub Copilot, Cursor
4. Grammarly, Notion AI, Tableau AI
5. NotebookLM, Replit Agent, Framer AI, Opus Clip, Claude Artifacts
6. CapCut, Gemini, HeyGen, v0.dev, Bolt.new, Jasper AI
7. (Plus 6 more - see script.js for complete list)

### 2. Workflow Templates (15 workflows)

**Location:** `script.js` lines 790-1022

**Schema:**
```javascript
{
    id: 'workflow-slug',
    name: 'Workflow Name',
    description: 'Workflow description',
    category: 'category-name',          // Must match one of 6 categories
    difficulty: 'intermediate',         // 'beginner', 'intermediate', 'advanced'
    estimatedTime: 360,                 // Minutes
    tools: ['tool-id-1', 'tool-id-2'], // Array of tool IDs from database

    steps: [
        'Step 1 description',
        'Step 2 description',
        'Step 3 description'
        // Array of strings (3-5 steps recommended)
    ],

    benefits: {
        timeSaved: '25 hours/week',     // String
        costSavings: 1000,              // Number (USD/month)
        outputQuality: 'Professional',  // String
        consistency: 'Very High'        // String
    }
}
```

**Categories (6):**
1. `content-creation` - 5 workflows
2. `marketing` - 3 workflows
3. `business` - 2 workflows
4. `research` - 2 workflows
5. `creative` - 1 workflow
6. `development` - 2 workflows

**Current Workflows:**
1. Professional Blog Writing
2. Social Media Campaign
3. YouTube Video Production
4. Podcast Creation
5. Newsletter Writing
6. Landing Page Creation
7. Social Media Ad Campaign
8. Email Marketing Sequence
9. Build a SaaS MVP
10. API Documentation
11. AI Employee Onboarding
12. Startup Launch Kit
13. Technical Documentation Suite
14. Research to Revenue
15. Personal Brand Builder

### 3. Application State

**Location:** `script.js` line 860

```javascript
const appState = {
    currentView: 'discover',            // Current section
    selectedVibe: null,                 // Selected vibe filter
    selectedTools: [],                  // Tools selected for comparison
    comparisonTools: [],                // Tools in comparison view
    pricingCalculator: [],              // Tools in pricing calculator
    searchTerm: '',                     // Current search query

    filters: {
        category: 'all',                // Tool category filter
        useCase: 'all',                 // Use case filter
        pricing: 'all',                 // Pricing model filter
        sortBy: 'popularity'            // Sort option
    },

    pagination: {
        currentPage: 1,                 // Current page number
        itemsPerPage: 12,               // Tools per page
        totalPages: 0                   // Total pages
    }
};
```

---

## 🎨 CSS ARCHITECTURE

### CSS Custom Properties (Variables)

```css
:root {
    /* Colors */
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --background-color: #0f172a;
    --surface-color: #1e293b;
    --text-color: #f1f5f9;
    --text-secondary: #cbd5e1;
    --border-color: #334155;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --error-color: #ef4444;

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;

    /* Typography */
    --font-family: 'Inter', sans-serif;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.5rem;
    --font-size-2xl: 2rem;

    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

### Main CSS Sections

1. **Layout & Grid** - Flexbox and Grid systems
2. **Components** - Tool cards, workflow cards, modals
3. **Navigation** - Header, navbar, calculator button
4. **Pricing Calculator** - Slide-in panel styling
5. **Workflow Modals** - Enhanced modals with interactive elements
6. **Tool Detail Modals** - Individual tool displays
7. **Responsive Design** - Media queries for mobile/tablet

---

## 🔧 KEY FUNCTIONS (JavaScript)

### Core Functions to Know

```javascript
// Tool Management
findToolById(toolId)                    // Find tool by ID
createToolCard(tool)                    // Create tool card HTML
viewTool(toolId)                        // Show tool detail modal
addToComparison(toolId)                 // Add tool to comparison
addToCalculator(toolId)                 // Add tool to pricing calculator

// Workflow Management
showWorkflowModal(workflow)             // Show workflow details
populateWorkflows(category)             // Display workflows
filterWorkflows()                       // Filter workflows by category
createWorkflowCard(workflow)            // Create workflow card HTML

// Pricing Calculator
togglePricingCalculator()               // Show/hide calculator panel
updateCalculator()                      // Recalculate costs
removeFromCalculator(toolId)            // Remove tool from calculator
clearCalculator()                       // Clear all tools

// Search & Filter
performSearch()                         // Search tools
applyFilters()                          // Apply category/price filters
displayToolsWithPagination()            // Paginate tool display

// UI Helpers
showNotification(message)               // Show toast notification
closeModal()                            // Close any open modal
```

---

## 📝 NAMING CONVENTIONS

### IDs and Classes
- **Tool IDs:** kebab-case (e.g., `chatgpt`, `claude-artifacts`, `v0-dev`)
- **Workflow IDs:** kebab-case + `-workflow` suffix (e.g., `blog-writing-workflow`)
- **CSS Classes:** kebab-case (e.g., `.tool-card`, `.workflow-modal`)
- **JavaScript Functions:** camelCase (e.g., `showWorkflowModal`, `addToCalculator`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `const API_KEY`)

### Categories
- **Primary Categories:** `text-generation`, `video-generation`, `image-generation`, `code-generation`, `audio-generation`, `data-analysis`, `productivity`, `design`
- **Workflow Categories:** `content-creation`, `marketing`, `business`, `research`, `creative`, `development`

---

## 🚀 CURRENT PROGRESS & NEXT TASKS

### Completed (60% of v1.1.0)

✅ **PRIORITY 1:** Enhanced workflow modal system
- Interactive step-by-step checklists
- Tool cards with pricing
- Dynamic cost calculation

✅ **PRIORITY 2:** Added 10 critical 2025 tools
- NotebookLM, Replit Agent, Framer AI, Opus Clip, Claude Artifacts (first 5)
- Gemini, HeyGen, v0.dev, Bolt.new, Jasper AI (Phase 2 Step 2A)

✅ **PRIORITY 3:** Added 5 high-value workflows
- AI Employee Onboarding, Startup Launch Kit, etc.

✅ **PRIORITY 4:** Pricing calculator feature
- Slide-in panel, cost tracking, free tier counting

✅ **PHASE 1:** Added 15 workflows (target reached!)

✅ **PHASE 2 Step 2A:** Added 5 major tools

### Next Tasks (40% remaining)

⏳ **PHASE 2 Step 2B:** Add 5 tools (NEXT PRIORITY)
- Synthesia (AI avatar videos)
- Leonardo.AI (game assets, character consistency)
- Descript (AI video/audio editing)
- Otter.ai (meeting transcription)
- Ideogram (text-in-images specialist)

⏳ **PHASE 2 Step 2C:** Add 5 tools
- Fireflies.ai, Microsoft Copilot, Pictory, Adobe Firefly, DeepL

⏳ **PHASE 2 Step 2D:** Add 2 tools
- Gamma (AI presentations), Codeium (coding assistant)

⏳ **PRIORITY 5:** Standout features
- Tool Compatibility Matrix
- Stack Builder (drag-and-drop)

### Important Notes for Continuation

1. **Tool Schema:** All tools MUST include `alternatives` field (array of tool IDs)
2. **Pricing:** Use actual pricing from official websites
3. **Performance Metrics:** Use realistic 0-100 scores
4. **Tool IDs:** Must be unique, kebab-case, no special characters
5. **Workflow Tools:** All tool IDs in workflows must exist in aiToolsDatabase

---

## 🔄 WORKING BETWEEN CLAUDE CODE & BOLT

### Before Switching to Bolt

1. **Commit all changes in Claude Code**
   ```bash
   git add .
   git commit -m "feat: your changes"
   git push -u origin claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g
   ```

2. **Update SESSION_SUMMARY.md** with what you did

3. **Note your exact stopping point** in TODO.md

### Starting in Bolt

1. **Import the repository** from GitHub
2. **Read these files first:**
   - SESSION_SUMMARY.md (understand history)
   - IMPLEMENTATION_PLAN_V2.md (understand plan)
   - TODO.md (see what's next)
   - HANDOFF_TO_BOLT.md (this file)

3. **Tell Bolt:**
   ```
   "This is a vanilla HTML/CSS/JS project (no framework).
   Read SESSION_SUMMARY.md to understand progress.
   Next task: [copy from TODO.md]
   Follow existing patterns in script.js for adding tools/workflows."
   ```

### Returning to Claude Code

1. **Commit in Bolt** before leaving
2. **Pull changes in Claude Code:**
   ```bash
   git pull origin claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g
   ```
3. **Tell Claude Code:**
   ```
   "Read SESSION_SUMMARY.md and the latest git commits to see
   what Bolt.new implemented. Continue from there."
   ```

---

## 📊 GIT WORKFLOW

### Current Branch
```
claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g
```

### Commit Message Format
```
<type>: <description>

<optional body>

🤖 Generated with [Claude Code](https://claude.com/claude-code) OR [Bolt.new]

Co-Authored-By: Claude <noreply@anthropic.com> OR Bolt <noreply@stackblitz.com>
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `chore`

### Recent Commits (Last 10)
```
5c2ae12 - docs: update session summary and implementation plan
734c260 - feat: add 5 major AI tools - PHASE 2 Step 2A
283dec2 - feat: add 2 development workflows - PHASE 1 COMPLETE!
ab94f18 - feat: add 3 marketing workflows + new category
b6e560f - feat: add 3 content creation workflows
2fdcf15 - fix: add CapCut tool and implement alternatives + filtering
21d47a7 - feat: add pricing calculator feature
fdab5c2 - feat: add 5 high-value workflows across 4 categories
9ce6c88 - feat: add 5 critical 2025 AI tools
6c71fe7 - feat: enhance workflow modal with interactive features
```

---

## 🎯 BOLT-SPECIFIC INSTRUCTIONS

### What Bolt Is Good At
- Adding new tools to `aiToolsDatabase` array
- Creating new workflows in `workflowTemplates`
- Building new UI components
- Implementing new features
- CSS styling and animations

### What to Avoid in Bolt
- Don't change the tech stack (keep it vanilla)
- Don't add npm packages or dependencies
- Don't refactor the entire codebase
- Don't change existing working features unless fixing bugs

### How to Add a Tool in Bolt

1. **Find insertion point** in script.js (inside `aiToolsDatabase` array)
2. **Copy an existing tool object** as template
3. **Update all fields** with new tool data
4. **Add `alternatives` field** (array of 2-4 similar tool IDs)
5. **Verify tool ID is unique** (search for ID in file)
6. **Test** by opening index.html in browser

### How to Add a Workflow in Bolt

1. **Find category** in `workflowTemplates` object
2. **Copy an existing workflow** as template
3. **Update all fields** with new workflow data
4. **Verify tool IDs exist** in aiToolsDatabase
5. **Add to appropriate category** array
6. **Test** by clicking workflow card in UI

---

## 🧪 TESTING

### How to Test Locally

**In Browser:**
1. Open `index.html` directly in Chrome/Firefox
2. All features should work (no server needed)

**Common Test Cases:**
- Search for tools by name
- Filter by category
- Add tool to comparison
- Add tool to calculator
- Click workflow card → modal opens
- Click tool in workflow → tool modal opens
- Check pricing calculator total

### Browser Console Commands

```javascript
// View all tools
console.log(aiToolsDatabase);

// View all workflows
console.log(workflowTemplates);

// Find specific tool
findToolById('gemini');

// View current state
console.log(appState);
```

---

## 📚 IMPORTANT FILES TO READ

**Priority 1 (Must Read):**
1. `SESSION_SUMMARY.md` - Complete session history and context
2. `IMPLEMENTATION_PLAN_V2.md` - Roadmap and next steps
3. `TODO.md` - Current task list

**Priority 2 (Should Read):**
4. `HANDOFF_TO_BOLT.md` - This file (technical specs)
5. `CODE_REVIEW.md` - Code analysis and patterns

**Priority 3 (Nice to Read):**
6. `README.md` - Project overview
7. `CONTRIBUTING.md` - Development guidelines
8. `CHANGELOG.md` - Version history

---

## 💡 TIPS FOR BOLT

1. **Always read SESSION_SUMMARY.md first** to understand what's been done
2. **Follow existing patterns** - don't invent new structures
3. **Test in browser after changes** - open index.html
4. **Commit frequently** with descriptive messages
5. **Add alternatives field** to every new tool you create
6. **Use realistic pricing** from official websites
7. **Keep tool descriptions to 1-2 sentences**
8. **Workflow steps should be 3-5 items**
9. **All tool IDs must be lowercase kebab-case**
10. **Update SESSION_SUMMARY.md when you complete tasks**

---

## 🆘 COMMON ISSUES & SOLUTIONS

### Issue: Tool not showing up
**Solution:** Check tool ID is unique and added to `aiToolsDatabase` array

### Issue: Workflow modal shows "🔧 tool-id"
**Solution:** Tool ID in workflow doesn't exist in database - add the tool first

### Issue: Calculator not updating
**Solution:** Check `pricing.monthlyCost` is a number, not a string

### Issue: Alternatives not clickable
**Solution:** Alternative tool IDs must exist in database

### Issue: Changes not visible
**Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📞 HANDOFF CHECKLIST

Before switching to Bolt, ensure:

- [ ] All changes committed and pushed to GitHub
- [ ] SESSION_SUMMARY.md updated with latest work
- [ ] TODO.md updated with current status
- [ ] No uncommitted changes (`git status` is clean)
- [ ] Current task clearly documented
- [ ] Any bugs or issues noted in TODO.md

Before switching back to Claude Code:

- [ ] All Bolt changes committed
- [ ] SESSION_SUMMARY.md updated with Bolt's work
- [ ] Tested changes in browser
- [ ] No syntax errors in console
- [ ] Ready for Claude to continue

---

## 🎉 READY TO GO!

You're all set to use Bolt.new! Just:

1. Open Bolt.new in browser
2. Import this repository from GitHub
3. Tell Bolt: "Read HANDOFF_TO_BOLT.md and SESSION_SUMMARY.md"
4. Copy the technical specs from the top of this file
5. Tell Bolt your next task from TODO.md
6. Start coding!

**Good luck! 🚀**
