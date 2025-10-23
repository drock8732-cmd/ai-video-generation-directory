# Vanilla JS Best Practices - AI Intelligence Hub

**Last Updated:** October 23, 2025
**For:** Claude Code + Bolt.new workflow
**Architecture:** Pure Vanilla JS (NO npm, NO build tools)

---

## 🎯 Core Principles

### 1. **Keep It Vanilla**
```javascript
// ✅ GOOD - Pure vanilla JS
const tools = await fetch('/data/tools.json').then(r => r.json());

// ❌ BAD - Requires npm/build step
import tools from './data/tools.json';
```

### 2. **Separation of Concerns**
```
data/          → JSON data files
script.js      → Application logic
styles.css     → All styling
index.html     → Structure only
```

### 3. **Works Everywhere**
- ✅ Open `index.html` → Works immediately
- ✅ Double-click → Opens in browser
- ✅ Bolt.new → Import and run
- ✅ Live Server → Instant preview

---

## 📝 Code Style Guide

### JavaScript

**Variables:**
```javascript
// ✅ GOOD - Descriptive, consistent naming
const aiToolsDatabase = [];
const MAX_TOOLS_PER_PAGE = 12;
let currentPage = 1;

// ❌ BAD - Unclear, inconsistent
const arr = [];
const max = 12;
var p = 1;
```

**Functions:**
```javascript
// ✅ GOOD - Clear purpose, JSDoc comments
/**
 * Load tools from external JSON file
 * @returns {Promise<Array>} Array of validated tools
 */
async function loadToolsData() {
    // Implementation
}

// ❌ BAD - Unclear, no documentation
function load() {
    // What does this load?
}
```

**Async/Await:**
```javascript
// ✅ GOOD - Modern, readable
async function initializeApplication() {
    const tools = await loadToolsData();
    displayTools(tools);
}

// ❌ BAD - Callback hell
function initializeApplication() {
    loadToolsData().then(tools => {
        displayTools(tools);
    });
}
```

**Error Handling:**
```javascript
// ✅ GOOD - Graceful degradation
async function loadToolsData() {
    try {
        const response = await fetch('/data/tools.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('❌ Failed to load tools:', error);
        return []; // Safe fallback
    }
}

// ❌ BAD - No error handling
async function loadToolsData() {
    const response = await fetch('/data/tools.json');
    return await response.json(); // Crashes if fetch fails!
}
```

---

### HTML

**Semantic Markup:**
```html
<!-- ✅ GOOD - Semantic, accessible -->
<header class="site-header">
    <nav aria-label="Main navigation">
        <a href="#tools">Tools</a>
    </nav>
</header>
<main>
    <section id="tools">...</section>
</main>

<!-- ❌ BAD - Divitis, no semantics -->
<div class="header">
    <div class="nav">
        <div class="link">Tools</div>
    </div>
</div>
```

**Data Attributes:**
```html
<!-- ✅ GOOD - Store data in attributes -->
<div class="tool-card" data-tool-id="chatgpt" data-category="text-generation">

<!-- ❌ BAD - Inline JavaScript -->
<div class="tool-card" onclick="viewTool('chatgpt')">
```

---

### CSS

**BEM Naming:**
```css
/* ✅ GOOD - BEM methodology */
.tool-card { }
.tool-card__header { }
.tool-card__title { }
.tool-card--featured { }

/* ❌ BAD - Unclear hierarchy */
.card { }
.header { }
.title { }
.featured { }
```

**CSS Variables:**
```css
/* ✅ GOOD - Centralized, reusable */
:root {
    --primary-color: #6366f1;
    --spacing-md: 1.5rem;
}

.button {
    background: var(--primary-color);
    padding: var(--spacing-md);
}

/* ❌ BAD - Magic numbers everywhere */
.button {
    background: #6366f1;
    padding: 1.5rem;
}
```

---

## 🗂️ File Organization

### Data Files (`/data/`)
```javascript
// ✅ GOOD - Valid JSON (no comments, no trailing commas)
[
    {
        "id": "chatgpt",
        "name": "ChatGPT",
        "pricing": {
            "model": "freemium",
            "monthlyCost": 20
        }
    }
]

// ❌ BAD - Invalid JSON
[
    {
        id: 'chatgpt',  // No quotes on keys
        name: 'ChatGPT',  // Single quotes
        pricing: {
            model: 'freemium',
            monthlyCost: 20,  // Trailing comma
        },  // Trailing comma
    }
]
```

### JavaScript Files
```javascript
// File structure template:

/**
 * [File description]
 */

// 1. Global variables/constants
const CONFIG = { ... };

// 2. Data loading functions
async function loadData() { ... }

// 3. Initialization
async function initializeApplication() { ... }

// 4. Core features (grouped by function)
// 4a. Tool management
function createToolCard(tool) { ... }
function viewTool(toolId) { ... }

// 4b. Workflow management
function showWorkflowModal(workflow) { ... }

// 5. Utility functions
function showNotification(message) { ... }

// 6. Event listeners
document.addEventListener('DOMContentLoaded', init);
```

---

## 🔄 Git Workflow

### Commit Messages
```bash
# ✅ GOOD - Conventional Commits format
git commit -m "feat: add pricing calculator feature"
git commit -m "fix: resolve tool loading error"
git commit -m "docs: update README with setup instructions"
git commit -m "refactor: extract data to JSON files"

# ❌ BAD - Unclear messages
git commit -m "updates"
git commit -m "fixed stuff"
git commit -m "WIP"
```

### Branch Naming
```bash
# ✅ GOOD - Descriptive, follows convention
claude/add-pricing-calculator-011CUMi2jukiHQnSLVdc7M5g
claude/extract-data-json-011CUMi2jukiHQnSLVdc7M5g

# ❌ BAD - Generic, unclear
feature/updates
fix-bug
test
```

---

## 🤖 Working with Claude Code & Bolt.new

### Before Switching to Bolt
```bash
# 1. Commit everything
git add .
git commit -m "feat: your changes"

# 2. Push to GitHub
git push -u origin claude/your-branch-name

# 3. Update docs
# - SESSION_SUMMARY.md
# - TODO.md
```

### In Bolt.new
```
Tell Bolt:
"This is a VANILLA JavaScript project (NO npm, NO frameworks).
Read HANDOFF_TO_BOLT.md for specs.
Continue from: [task description]"
```

### Returning to Claude Code
```bash
# 1. Pull latest changes
git pull origin claude/your-branch-name

# 2. Tell Claude:
"Read SESSION_SUMMARY.md and recent commits.
I used Bolt to [what was done].
Continue with: [next task]"
```

---

## ✅ Code Quality Checklist

Before committing, verify:

**JavaScript:**
- [ ] No console errors in browser
- [ ] All async functions have error handling
- [ ] Functions have JSDoc comments
- [ ] Variables use `const` or `let` (no `var`)
- [ ] Functions are small and single-purpose

**HTML:**
- [ ] Semantic tags (`<header>`, `<main>`, `<section>`)
- [ ] ARIA labels where needed
- [ ] No inline styles or scripts
- [ ] Valid HTML (check with W3C validator)

**CSS:**
- [ ] No duplicate selectors
- [ ] CSS variables for repeated values
- [ ] Mobile-responsive (test on small screens)
- [ ] BEM naming convention

**Data:**
- [ ] Valid JSON (use JSONLint.com)
- [ ] Required fields present
- [ ] Consistent schema

**Git:**
- [ ] Conventional commit message
- [ ] Branch name follows convention
- [ ] No untracked files (`git status`)
- [ ] Changes pushed to GitHub

---

## 🚨 Common Pitfalls

### 1. **Forgetting `await`**
```javascript
// ❌ BAD - Returns Promise, not data
const tools = loadToolsData();

// ✅ GOOD - Waits for data
const tools = await loadToolsData();
```

### 2. **Hardcoding Paths**
```javascript
// ❌ BAD - Breaks if file moves
fetch('../../data/tools.json')

// ✅ GOOD - Absolute from root
fetch('/data/tools.json')
```

### 3. **Not Validating Data**
```javascript
// ❌ BAD - Assumes data is valid
tools.forEach(tool => {
    const card = createToolCard(tool);
});

// ✅ GOOD - Validates first
const validTools = validateTools(tools);
validTools.forEach(tool => {
    const card = createToolCard(tool);
});
```

### 4. **Memory Leaks**
```javascript
// ❌ BAD - Event listeners not removed
function showModal() {
    const modal = document.createElement('div');
    modal.addEventListener('click', closeModal); // Never removed!
}

// ✅ GOOD - Clean up
function showModal() {
    const modal = document.createElement('div');
    const closeHandler = () => {
        closeModal();
        modal.removeEventListener('click', closeHandler);
    };
    modal.addEventListener('click', closeHandler);
}
```

---

## 📚 Quick Reference

### Essential DOM Methods
```javascript
// Selection
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('.class')

// Creation
document.createElement('div')
element.appendChild(child)
element.innerHTML = '<p>HTML</p>'

// Events
element.addEventListener('click', handler)
element.removeEventListener('click', handler)

// Attributes
element.getAttribute('data-id')
element.setAttribute('data-id', 'value')
element.dataset.id // Read/write data-* attributes
```

### Essential Array Methods
```javascript
// Transform
const names = tools.map(t => t.name)
const filtered = tools.filter(t => t.pricing.freeTier)
const found = tools.find(t => t.id === 'chatgpt')

// Combine
const all = [...array1, ...array2]
const combined = array.reduce((acc, item) => acc + item, 0)

// Check
const exists = tools.some(t => t.id === 'chatgpt')
const allValid = tools.every(t => t.id)
```

---

## 🎓 Learning Resources

- **MDN Web Docs** - https://developer.mozilla.org
- **JavaScript.info** - https://javascript.info
- **Can I Use** - https://caniuse.com (browser support)
- **W3C Validator** - https://validator.w3.org

---

## 💡 Pro Tips

1. **Use browser DevTools** - Console, Network, Elements tabs are your best friends
2. **Test in multiple browsers** - Chrome, Firefox, Safari
3. **Mobile first** - Design for small screens, scale up
4. **Keep functions small** - Max 20-30 lines each
5. **Comment the "why"** - Not the "what"
6. **Git commit often** - Small, atomic commits
7. **Read the handoff docs** - HANDOFF_TO_BOLT.md has everything Bolt needs

---

**Remember:** If it requires `npm install`, it doesn't belong in this project! 🚫📦
