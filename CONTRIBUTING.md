# Contributing to AI Intelligence Hub

Thank you for your interest in contributing! This guide will help you understand our development workflow and standards.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Commit Guidelines](#commit-guidelines)
4. [Code Standards](#code-standards)
5. [Testing Requirements](#testing-requirements)
6. [Documentation Requirements](#documentation-requirements)
7. [Pull Request Process](#pull-request-process)

---

## Getting Started

### Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Git installed on your machine
- A text editor (VS Code recommended)
- A modern web browser

### First Time Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/ai-video-generation-directory.git
   cd ai-video-generation-directory
   ```

2. **Create a new branch:**
   ```bash
   git checkout -b your-feature-name
   ```

3. **Read the documentation:**
   - `README.md` - Project overview
   - `GETTING_STARTED.md` - Code structure
   - `CODE_REVIEW.md` - Known issues
   - `TODO.md` - Current priorities

---

## Development Workflow

### 1. Choose a Task

Check `TODO.md` for available tasks, prioritized as:
- **Priority 1:** CRITICAL (fix immediately)
- **Priority 2:** HIGH (fix this week)
- **Priority 3:** MEDIUM (next sprint)
- **Priority 4:** LOW (future)

### 2. Create a Branch

**Branch naming convention:**
```
type/short-description

Examples:
fix/comparison-bug
feat/dark-mode
docs/update-readme
refactor/split-modules
```

**Types:**
- `fix/` - Bug fixes
- `feat/` - New features
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - CSS/styling changes
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 3. Make Changes

**Follow these rules:**
- ✅ Make ONE logical change per commit
- ✅ Test your changes before committing
- ✅ Update documentation if needed
- ✅ Follow existing code style
- ✅ Add comments for complex logic

**Don't:**
- ❌ Mix multiple unrelated changes in one commit
- ❌ Commit broken code
- ❌ Commit without testing
- ❌ Leave console.log() statements
- ❌ Commit sensitive information

### 4. Commit Your Changes

See [Commit Guidelines](#commit-guidelines) below.

### 5. Push and Create PR

```bash
git push origin your-branch-name
```

Then create a Pull Request on GitHub.

---

## Commit Guidelines

### Conventional Commits Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short description>

[optional body]

[optional footer]
```

### Commit Types

| Type | When to Use | Example |
|------|-------------|---------|
| `fix:` | Bug fixes | `fix: resolve comparison feature crash` |
| `feat:` | New features | `feat: add dark mode toggle` |
| `docs:` | Documentation only | `docs: update README installation steps` |
| `style:` | Code style (no logic change) | `style: format code with prettier` |
| `refactor:` | Code refactoring | `refactor: extract search logic to module` |
| `perf:` | Performance improvements | `perf: optimize tool filtering algorithm` |
| `test:` | Adding/updating tests | `test: add comparison feature tests` |
| `chore:` | Maintenance | `chore: update dependencies` |

### Commit Message Examples

**Good commits:**
```bash
fix: change aiVideoModels to aiToolsDatabase in comparison

The comparison feature was referencing an undefined variable
'aiVideoModels' which should be 'aiToolsDatabase'. This was
causing the comparison feature to crash.

Fixes #1

---

feat: add pagination to tools grid

- Shows 12 tools per page
- Add previous/next buttons
- Updates URL with page number
- Improves performance on mobile

---

docs: mark Priority 1 tasks as completed in TODO.md
```

**Bad commits:**
```bash
# Too vague:
fix: bug fixes

# Not descriptive:
update stuff

# Multiple changes:
fix: comparison bug and add dark mode and update readme
```

### Writing Good Commit Messages

**Short description (first line):**
- Start with lowercase
- No period at the end
- Maximum 72 characters
- Use imperative mood ("add" not "added")

**Body (optional):**
- Explain WHAT and WHY, not HOW
- Separate from subject with blank line
- Wrap at 72 characters

**Footer (optional):**
- Reference issues: `Fixes #123`
- Breaking changes: `BREAKING CHANGE: ...`

---

## Code Standards

### JavaScript

**Naming Conventions:**
```javascript
// Variables: camelCase
const toolsDatabase = [];
const searchTerm = '';

// Functions: camelCase
function filterTools() { }
function updateComparisonTable() { }

// Constants: UPPER_SNAKE_CASE
const MAX_COMPARISON_TOOLS = 3;
const DEFAULT_ITEMS_PER_PAGE = 12;

// Classes: PascalCase (if we add them)
class ToolCard { }
```

**Code Style:**
```javascript
// Use const/let, not var
const tools = [];
let selectedVibe = null;

// Use template literals
const message = `Added ${tool.name} to comparison`;

// Use arrow functions for callbacks
tools.filter(t => t.pricing.model === 'free');

// Add comments for complex logic
// Calculate weighted score based on vibe alignment
const score = (vibe.creative * 0.3) + (vibe.productive * 0.7);
```

**Avoid:**
```javascript
// Don't use var
var x = 5;  // ❌

// Don't use string concatenation
const message = 'Added ' + tool.name + ' to comparison';  // ❌

// Don't leave console.log in production code
console.log('debug this');  // ❌

// Don't use single-letter variables (except in loops)
const t = tools[0];  // ❌
```

### CSS

**Naming Conventions:**
```css
/* Use kebab-case for class names */
.tool-card { }
.comparison-table { }
.vibe-selector { }

/* Use BEM for complex components (optional) */
.tool-card__header { }
.tool-card__body { }
.tool-card--featured { }
```

**Code Style:**
```css
/* Group related properties */
.tool-card {
    /* Layout */
    display: flex;
    flex-direction: column;

    /* Box model */
    padding: 2rem;
    margin: 1rem;

    /* Visual */
    background: white;
    border-radius: 12px;
    box-shadow: var(--shadow-md);

    /* Animation */
    transition: transform 0.3s ease;
}

/* Use CSS variables */
:root {
    --primary-color: #667eea;
    --spacing-md: 2rem;
}
```

### HTML

**Structure:**
```html
<!-- Use semantic HTML -->
<header>
<nav>
<main>
<section>
<article>
<footer>

<!-- Add accessibility attributes -->
<button aria-label="Add to favorites">
    <i class="fas fa-heart" aria-hidden="true"></i>
</button>

<!-- Use meaningful IDs and classes -->
<div class="tool-card" data-tool-id="chatgpt">
```

---

## Testing Requirements

### Manual Testing Checklist

Before committing, test:

**For Bug Fixes:**
- [ ] The bug is actually fixed
- [ ] No new bugs introduced
- [ ] Related features still work
- [ ] No console errors

**For New Features:**
- [ ] Feature works as expected
- [ ] Works on mobile (responsive)
- [ ] Works in different browsers
- [ ] No console errors
- [ ] Doesn't break existing features

**For Refactoring:**
- [ ] All features still work the same
- [ ] No performance regression
- [ ] No console errors

### Browser Testing

Test in at least 2 browsers:
- Chrome/Edge
- Firefox
- Safari (if available)

### Responsive Testing

Test on different screen sizes:
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

---

## Documentation Requirements

### When to Update Documentation

**Always update when:**
- Adding new features → Update README.md
- Fixing bugs → Update CHANGELOG.md
- Completing tasks → Update TODO.md
- Changing API/usage → Update GETTING_STARTED.md

### Documentation Files

| File | Update When |
|------|-------------|
| `README.md` | Adding features, changing setup |
| `CHANGELOG.md` | Every commit (feature/fix) |
| `TODO.md` | Completing tasks, adding new tasks |
| `GETTING_STARTED.md` | Changing code structure |
| `CODE_REVIEW.md` | Fixing identified issues |
| `CONTRIBUTING.md` | Changing dev workflow |

### Code Comments

**When to add comments:**
```javascript
// ✅ Good - Explains WHY
// Using setTimeout to debounce search input
// Prevents excessive API calls on every keystroke
setTimeout(() => search(), 300);

// ✅ Good - Explains complex logic
// Calculate weighted vibe score (creative: 30%, productive: 70%)
const score = (tool.vibeAlignment.creative * 0.3) +
              (tool.vibeAlignment.productive * 0.7);
```

**When NOT to add comments:**
```javascript
// ❌ Bad - States the obvious
// Increment i by 1
i++;

// ❌ Bad - Redundant
// Get the tool name
const name = tool.name;
```

---

## Pull Request Process

### 1. Before Creating PR

**Checklist:**
- [ ] All tests pass (manual testing done)
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] TODO.md updated (if applicable)
- [ ] No console.log() statements left
- [ ] Commits follow conventional commits format
- [ ] Branch is up to date with main

### 2. Creating the PR

**Title format:**
```
<type>: <short description>

Examples:
fix: resolve comparison feature crash
feat: add dark mode toggle
docs: update README with new setup instructions
```

**Description template:**
```markdown
## What Changed
- Brief bullet points of changes

## Why
- Reason for the change
- Problem it solves

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on mobile
- [ ] No console errors
- [ ] All features still work

## Related Issues
Fixes #123
Closes #456

## Screenshots (if UI changes)
[Add screenshots here]
```

### 3. PR Review Process

**Reviewers will check:**
- Code quality and style
- Test coverage
- Documentation updates
- Commit message format
- Breaking changes

**If changes are requested:**
1. Make the changes
2. Commit with descriptive message
3. Push to the same branch
4. PR updates automatically

### 4. After PR is Merged

```bash
# Switch to main branch
git checkout main

# Pull the latest changes
git pull origin main

# Delete your feature branch
git branch -d your-feature-name
```

---

## Quick Reference

### Common Commands

```bash
# Start new feature
git checkout -b feat/my-feature

# See what changed
git status
git diff

# Commit changes
git add .
git commit -m "feat: add my feature"

# Push to remote
git push origin feat/my-feature

# Update your branch with main
git checkout main
git pull origin main
git checkout feat/my-feature
git merge main

# Undo uncommitted changes
git checkout -- filename.js

# See commit history
git log --oneline
```

### Need Help?

1. Check existing documentation
2. Look at `CODE_REVIEW.md` for known issues
3. Check `TODO.md` for task details
4. Ask in GitHub issues
5. Review existing commits for examples

---

## Code of Conduct

### Be Respectful
- Respectful of differing viewpoints
- Gracefully accept constructive criticism
- Focus on what's best for the project

### Be Professional
- Use welcoming and inclusive language
- Be patient with newcomers
- Provide constructive feedback

### Be Collaborative
- Help others when you can
- Share knowledge
- Work together toward common goals

---

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- CHANGELOG.md (for significant contributions)
- README.md acknowledgments section

---

## Questions?

- Open an issue on GitHub
- Check existing documentation
- Review this guide again

---

**Thank you for contributing to AI Intelligence Hub!** 🚀

**Last Updated:** 2025-10-21
