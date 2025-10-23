# Best Practices Guide for AI Intelligence Hub

**Last Updated:** October 23, 2025  
**Target Audience:** New developers working with Claude Code and Bolt.ai  
**Project Type:** Vanilla JavaScript Web Application

---

## Table of Contents

1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Code Quality](#code-quality)
4. [JavaScript Best Practices](#javascript-best-practices)
5. [HTML Best Practices](#html-best-practices)
6. [CSS Best Practices](#css-best-practices)
7. [Git Workflow](#git-workflow)
8. [Development Workflow](#development-workflow)
9. [Working with AI Tools](#working-with-ai-tools)
10. [Common Pitfalls](#common-pitfalls)
11. [Performance](#performance)
12. [Accessibility](#accessibility)
13. [Security](#security)

---

## Introduction

This guide provides comprehensive best practices for working on the AI Intelligence Hub project, especially when using AI assistants like Claude Code and Bolt.ai. Following these practices will help you write cleaner, more maintainable code and avoid common pitfalls.

### Why This Matters

- **Consistency**: Makes code easier to understand across the team
- **Maintainability**: Reduces technical debt and bugs
- **Collaboration**: Smoother handoffs between Claude Code and Bolt.ai
- **Quality**: Professional-grade code that scales

---

## Project Setup

### Initial Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-video-generation-directory

# Install development dependencies (if package.json exists)
npm install

# Start development server
npm run dev
# OR use Python's built-in server
python -m http.server 8000
```

### Required Tools

1. **Code Editor**: VS Code (recommended)
2. **Browser**: Chrome/Edge with DevTools
3. **Version Control**: Git
4. **Node.js**: v18+ (for development tools, optional)

### VS Code Extensions (Recommended)

Create `.vscode/extensions.json`:
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ritwickdey.liveserver",
    "formulahendry.auto-rename-tag",
    "bradlc.vscode-tailwindcss",
    "wayou.vscode-todo-highlight"
  ]
}
```

---

## Code Quality

### Linting with ESLint

ESLint helps catch errors and enforce code standards.

**Install ESLint:**
```bash
npm install --save-dev eslint
npx eslint --init
```

**Basic .eslintrc.json:**
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "prefer-const": "warn",
    "no-var": "error"
  }
}
```

**Run linting:**
```bash
npm run lint
```

### Code Formatting with Prettier

Prettier ensures consistent code formatting.

**Install Prettier:**
```bash
npm install --save-dev prettier
```

**.prettierrc.json:**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

**Format code:**
```bash
npm run format
```

### EditorConfig

Create `.editorconfig` for consistent editor settings:
```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

---

## JavaScript Best Practices

### 1. Use Modern JavaScript (ES6+)

✅ **DO:**
```javascript
// Use const/let instead of var
const API_URL = 'https://api.example.com';
let currentPage = 1;

// Use arrow functions
const filterTools = (tools, category) => tools.filter(tool => tool.category === category);

// Use template literals
const message = `Found ${tools.length} tools`;

// Use destructuring
const { name, company, pricing } = tool;

// Use spread operator
const newTools = [...existingTools, newTool];
```

❌ **DON'T:**
```javascript
// Avoid var
var tool = 'ChatGPT'; // ❌

// Avoid old function syntax for callbacks
tools.filter(function(tool) { return tool.category === 'text'; }); // ❌

// Avoid string concatenation
var message = 'Found ' + tools.length + ' tools'; // ❌
```

### 2. Function Organization

✅ **DO:**
```javascript
/**
 * Filters AI tools by category and pricing model
 * @param {Array} tools - Array of tool objects
 * @param {string} category - Category to filter by
 * @param {string} pricing - Pricing model (free, paid, freemium)
 * @returns {Array} Filtered tools
 */
function filterTools(tools, category, pricing) {
  if (!tools || !Array.isArray(tools)) {
    console.warn('filterTools: Invalid tools array');
    return [];
  }

  return tools.filter(tool => {
    const matchesCategory = !category || category === 'all' || 
                           tool.primaryCategory === category;
    const matchesPricing = !pricing || pricing === 'all' || 
                          tool.pricing?.model === pricing;
    return matchesCategory && matchesPricing;
  });
}
```

**Key Points:**
- Add JSDoc comments for documentation
- Validate input parameters
- Return early for edge cases
- Use descriptive names
- Keep functions small and focused

### 3. Error Handling

✅ **DO:**
```javascript
function loadToolData(toolId) {
  try {
    const tool = findToolById(toolId);
    
    if (!tool) {
      console.warn(`Tool not found: ${toolId}`);
      showNotification('Tool not found');
      return null;
    }
    
    return tool;
  } catch (error) {
    console.error('Error loading tool:', error);
    showNotification('Failed to load tool data');
    return null;
  }
}
```

❌ **DON'T:**
```javascript
function loadToolData(toolId) {
  const tool = aiToolsDatabase.find(t => t.id === toolId); // Might fail
  displayTool(tool); // Will crash if tool is undefined
}
```

### 4. Constants and Magic Numbers

✅ **DO:**
```javascript
// Create a constants file: constants.js
export const PAGINATION = {
  ITEMS_PER_PAGE: 12,
  MAX_COMPARISON_TOOLS: 3,
  MAX_CALCULATOR_TOOLS: 10,
};

export const CATEGORIES = {
  TEXT: 'text-generation',
  IMAGE: 'image-generation',
  VIDEO: 'video-generation',
  AUDIO: 'audio-generation',
  CODE: 'code-generation',
};

export const PRICING_MODELS = {
  FREE: 'free',
  FREEMIUM: 'freemium',
  PAID: 'paid',
  ENTERPRISE: 'enterprise',
};

// Use in your code
if (appState.comparisonTools.length >= PAGINATION.MAX_COMPARISON_TOOLS) {
  showNotification('Maximum 3 tools can be compared at once');
  return;
}
```

❌ **DON'T:**
```javascript
// Magic numbers scattered throughout code
if (appState.comparisonTools.length >= 3) { // What is 3?
  return;
}

if (tools.length > 12) { // What is 12?
  paginate();
}
```

### 5. Array Methods

✅ **DO:**
```javascript
// Use filter, map, reduce instead of loops
const freeTools = tools.filter(tool => tool.pricing.model === 'free');
const toolNames = tools.map(tool => tool.name);
const totalCost = tools.reduce((sum, tool) => sum + tool.pricing.monthlyCost, 0);

// Use find instead of filter[0]
const tool = tools.find(t => t.id === toolId);

// Use some/every for boolean checks
const hasFreeTool = tools.some(tool => tool.pricing.model === 'free');
const allPaidTools = tools.every(tool => tool.pricing.monthlyCost > 0);
```

### 6. Async/Await (for future API calls)

✅ **DO:**
```javascript
async function fetchToolData(toolId) {
  try {
    const response = await fetch(`/api/tools/${toolId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const tool = await response.json();
    return tool;
  } catch (error) {
    console.error('Failed to fetch tool:', error);
    showNotification('Failed to load tool data');
    return null;
  }
}
```

### 7. DOM Manipulation

✅ **DO:**
```javascript
// Cache DOM queries
const modelsGrid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');

// Use document fragments for multiple elements
function renderTools(tools) {
  const fragment = document.createDocumentFragment();
  
  tools.forEach(tool => {
    const card = createToolCard(tool);
    fragment.appendChild(card);
  });
  
  modelsGrid.innerHTML = '';
  modelsGrid.appendChild(fragment);
}
```

❌ **DON'T:**
```javascript
// Don't query the same element repeatedly
document.getElementById('modelsGrid').innerHTML = '';
document.getElementById('modelsGrid').appendChild(card1);
document.getElementById('modelsGrid').appendChild(card2);
```

### 8. Event Listeners

✅ **DO:**
```javascript
// Event delegation for dynamic content
modelsGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.model-card');
  if (!card) return;
  
  const toolId = card.dataset.toolId;
  viewTool(toolId);
});

// Remove event listeners when needed
function cleanup() {
  searchInput.removeEventListener('input', handleSearch);
}
```

---

## HTML Best Practices

### 1. Semantic HTML

✅ **DO:**
```html
<!-- Use semantic elements -->
<header class="header">
  <nav class="navbar">...</nav>
</header>

<main class="main-content">
  <section id="tools" class="tools-section">
    <h2>Featured AI Tools</h2>
    <article class="tool-card">...</article>
  </section>
</main>

<footer class="footer">...</footer>
```

❌ **DON'T:**
```html
<!-- Avoid generic divs for everything -->
<div class="header">
  <div class="navbar">...</div>
</div>
```

### 2. Accessibility

✅ **DO:**
```html
<!-- Always include alt text -->
<img src="logo.png" alt="AI Intelligence Hub Logo">

<!-- Use proper ARIA labels -->
<button aria-label="Close modal" class="close-btn">×</button>

<!-- Use proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Add labels to form inputs -->
<label for="searchInput">Search AI Tools</label>
<input type="text" id="searchInput" name="search">
```

### 3. Form Best Practices

✅ **DO:**
```html
<form class="newsletter-form" id="newsletterForm" novalidate>
  <label for="email" class="sr-only">Email Address</label>
  <input 
    type="email" 
    id="email"
    name="email"
    placeholder="Enter your email"
    required
    aria-required="true"
    autocomplete="email"
  >
  <button type="submit">Subscribe</button>
</form>
```

---

## CSS Best Practices

### 1. CSS Organization

Organize CSS in this order:
```css
/* 1. CSS Reset/Normalize */
/* 2. CSS Custom Properties */
/* 3. Base Styles */
/* 4. Layout Components */
/* 5. UI Components */
/* 6. Utilities */
/* 7. Media Queries */
```

### 2. Use CSS Custom Properties

✅ **DO:**
```css
:root {
  /* Colors */
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);
}
```

### 3. BEM Naming Convention

✅ **DO:**
```css
/* Block */
.tool-card { }

/* Element */
.tool-card__header { }
.tool-card__body { }
.tool-card__footer { }

/* Modifier */
.tool-card--featured { }
.tool-card--disabled { }
```

### 4. Mobile-First Responsive Design

✅ **DO:**
```css
/* Base styles for mobile */
.tool-card {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .tool-card {
    width: 50%;
    padding: 1.5rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .tool-card {
    width: 33.333%;
    padding: 2rem;
  }
}
```

---

## Git Workflow

### Commit Message Format

Follow the Conventional Commits standard:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(tools): add Google Gemini to database"
git commit -m "fix(search): resolve undefined variable in filter"
git commit -m "docs(readme): update installation instructions"
git commit -m "refactor(comparison): extract table logic to separate function"
```

### Branch Naming

```bash
feature/add-tool-pagination
fix/search-filter-bug
docs/update-contributing-guide
refactor/modularize-database
```

### Git Best Practices

```bash
# Pull before starting work
git pull origin main

# Create feature branch
git checkout -b feature/my-new-feature

# Make small, focused commits
git add specific-file.js
git commit -m "feat: add specific feature"

# Push regularly
git push origin feature/my-new-feature

# Keep commits atomic (one logical change per commit)
```

---

## Development Workflow

### Daily Workflow

1. **Start of Day**
   ```bash
   git pull origin main
   git checkout -b feature/today-task
   npm run dev
   ```

2. **During Development**
   - Write code in small chunks
   - Test in browser frequently (F5)
   - Check browser console (F12) for errors
   - Commit regularly (every 30-60 minutes)

3. **Before Committing**
   ```bash
   # Check what changed
   git status
   git diff
   
   # Run quality checks
   npm run lint
   npm run format
   
   # Test in browser
   # Commit
   git add .
   git commit -m "feat: description"
   ```

4. **End of Day**
   ```bash
   git push origin feature/today-task
   # Create PR or continue tomorrow
   ```

### Testing Checklist

Before committing, manually test:
- [ ] Page loads without errors (F12 Console)
- [ ] Search functionality works
- [ ] Filters apply correctly
- [ ] Tool cards display properly
- [ ] Modals open and close
- [ ] Mobile responsive (F12 → Toggle Device)
- [ ] No console errors or warnings

### Browser DevTools Tips

**Console (F12):**
```javascript
// Test functions directly
filterTools(aiToolsDatabase, 'text-generation', 'free');

// Inspect state
console.log(appState);

// Test DOM queries
document.querySelectorAll('.tool-card');
```

**Network Tab:**
- Check for 404 errors
- Monitor load times
- Inspect API calls (future)

**Elements Tab:**
- Inspect CSS
- Test responsive layouts
- Debug layout issues

---

## Working with AI Tools

### Claude Code Best Practices

1. **Be Specific**
   - ✅ "Add a pagination feature that displays 12 tools per page with prev/next buttons"
   - ❌ "Make the page better"

2. **Provide Context**
   ```
   I'm working on script.js, lines 500-600. The filterTools function
   needs to handle edge cases when tools array is empty.
   ```

3. **Break Down Large Tasks**
   ```
   Phase 1: Add database schema validation
   Phase 2: Update existing tools to new schema
   Phase 3: Add migration script
   ```

4. **Review AI-Generated Code**
   - Always test the code
   - Check for unused variables
   - Verify error handling
   - Ensure consistency with existing code

### Bolt.ai Best Practices

1. **Prepare Your Environment**
   - Commit all changes before handoff
   - Document current state in comments
   - Create clear TODO list

2. **Handoff Documentation**
   ```markdown
   ## Status
   - Database: 33 tools complete
   - Features: Search, filter, comparison working
   - Bugs: None known
   
   ## Next Tasks
   1. Add pagination (Priority 1)
   2. Add 5 more tools (Priority 2)
   3. Improve mobile UX (Priority 3)
   ```

3. **Testing After Bolt.ai Changes**
   - Pull changes from Bolt
   - Test all core features
   - Check for regressions
   - Verify Bolt's additions work

---

## Common Pitfalls

### 1. Global Variables

❌ **PROBLEM:**
```javascript
// Global variables everywhere
var currentPage = 1;
var selectedTools = [];
var userPreferences = {};
```

✅ **SOLUTION:**
```javascript
// Encapsulate in app state
const appState = {
  currentPage: 1,
  selectedTools: [],
  userPreferences: {},
};
```

### 2. Direct DOM Manipulation

❌ **PROBLEM:**
```javascript
document.getElementById('count').innerHTML = count; // XSS risk
```

✅ **SOLUTION:**
```javascript
document.getElementById('count').textContent = count; // Safe
```

### 3. Not Handling Edge Cases

❌ **PROBLEM:**
```javascript
function getToolPrice(tool) {
  return tool.pricing.monthlyCost; // Crashes if pricing is undefined
}
```

✅ **SOLUTION:**
```javascript
function getToolPrice(tool) {
  if (!tool || !tool.pricing) {
    console.warn('getToolPrice: Invalid tool object');
    return 0;
  }
  return tool.pricing.monthlyCost || 0;
}
```

### 4. Memory Leaks

❌ **PROBLEM:**
```javascript
// Adding event listeners without cleanup
window.addEventListener('scroll', handleScroll);
// Never removed!
```

✅ **SOLUTION:**
```javascript
// Store reference for cleanup
const handleScroll = () => { /* ... */ };
window.addEventListener('scroll', handleScroll);

// Clean up when needed
function cleanup() {
  window.removeEventListener('scroll', handleScroll);
}
```

---

## Performance

### 1. Lazy Loading

```javascript
// Load images only when needed
<img data-src="image.jpg" alt="Tool" class="lazy">

// JavaScript
const lazyImages = document.querySelectorAll('.lazy');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));
```

### 2. Debouncing Search

```javascript
// Debounce search to reduce function calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
```

### 3. Pagination

```javascript
// Don't render all 200 tools at once
const ITEMS_PER_PAGE = 12;

function paginateTools(tools, page) {
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return tools.slice(start, end);
}
```

---

## Accessibility

### 1. Keyboard Navigation

```javascript
// Support keyboard navigation
card.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    viewTool(toolId);
  }
});
```

### 2. Focus Management

```javascript
// Manage focus for modals
function openModal(modal) {
  modal.style.display = 'block';
  modal.querySelector('.close-btn').focus(); // Focus close button
}

function closeModal(modal) {
  modal.style.display = 'none';
  document.querySelector('.tool-card').focus(); // Return focus
}
```

### 3. ARIA Attributes

```html
<!-- Loading state -->
<div role="status" aria-live="polite" aria-atomic="true">
  Loading tools...
</div>

<!-- Tab panel -->
<div role="tabpanel" aria-labelledby="tab-1" id="panel-1">
  Content
</div>
```

---

## Security

### 1. Input Sanitization

```javascript
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .slice(0, 100) // Limit length
    .replace(/[<>]/g, ''); // Remove dangerous chars
}

searchInput.addEventListener('input', (e) => {
  const sanitized = sanitizeInput(e.target.value);
  performSearch(sanitized);
});
```

### 2. XSS Prevention

```javascript
// Use textContent instead of innerHTML for user input
element.textContent = userInput; // Safe
// element.innerHTML = userInput; // Dangerous!

// If HTML is needed, sanitize first
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);
```

### 3. Content Security Policy

Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline' fonts.googleapis.com;
               font-src fonts.gstatic.com;">
```

---

## Quick Reference

### Must-Have Files

```
project/
├── .editorconfig          # Editor consistency
├── .eslintrc.json        # Code linting
├── .prettierrc.json      # Code formatting
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies & scripts
├── README.md             # Project documentation
├── BEST_PRACTICES.md     # This file
└── CONTRIBUTING.md       # Contribution guide
```

### Essential Commands

```bash
# Development
npm run dev          # Start dev server
npm run lint         # Check code quality
npm run format       # Format code
npm run test         # Run tests (future)

# Git
git status           # Check changes
git diff             # See what changed
git add .            # Stage all changes
git commit -m ""     # Commit with message
git push             # Push to remote
```

### Key Shortcuts

**VS Code:**
- `Ctrl+Shift+P`: Command palette
- `Ctrl+P`: Quick file open
- `Ctrl+/`: Toggle comment
- `Alt+Shift+F`: Format document
- `F12`: Go to definition
- `Ctrl+Space`: Trigger autocomplete

**Browser DevTools:**
- `F12`: Open DevTools
- `Ctrl+Shift+C`: Inspect element
- `Ctrl+Shift+M`: Toggle device mode
- `Ctrl+R`: Refresh page
- `Ctrl+Shift+R`: Hard refresh

---

## Resources

### Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web standards
- [JavaScript.info](https://javascript.info/) - Modern JS tutorial
- [CSS Tricks](https://css-tricks.com/) - CSS techniques
- [Web.dev](https://web.dev/) - Best practices from Google

### Tools

- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Regex101](https://regex101.com/) - Test regular expressions
- [JSON Formatter](https://jsonformatter.org/) - Format/validate JSON
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit

### VS Code Extensions

- ESLint - Code linting
- Prettier - Code formatting
- Live Server - Local development server
- GitLens - Enhanced Git features
- TODO Highlight - Track TODOs
- Auto Rename Tag - HTML tag pairs

---

## Conclusion

Following these best practices will help you:
- Write cleaner, more maintainable code
- Avoid common bugs and pitfalls
- Collaborate effectively with AI tools
- Build professional-grade applications

Remember: **Good code is not just code that works, it's code that others (including your future self) can understand and maintain.**

---

## Next Steps

1. ✅ Read this guide thoroughly
2. ⬜ Set up your development environment
3. ⬜ Install recommended VS Code extensions
4. ⬜ Add ESLint and Prettier to the project
5. ⬜ Create a feature branch and start coding!

Happy coding! 🚀

---

**Questions or suggestions?** Open an issue or submit a PR to improve this guide!
