# Quick Reference Guide

**For developers using Claude Code and Bolt.ai**

## 🚀 Quick Start

```bash
# Clone and setup
git clone <repo-url>
cd ai-video-generation-directory
npm install  # Optional - for dev tools
npm run dev  # Start development server
```

## 📋 Essential Commands

### Development
```bash
npm run dev          # Start dev server (localhost:8000)
npm run dev:py       # Use Python server instead
```

### Code Quality
```bash
npm run lint         # Check code for errors
npm run lint:fix     # Auto-fix errors
npm run format       # Format all code
npm run format:check # Check formatting
npm run validate     # Run all checks
```

### Git
```bash
git status           # What changed?
git diff             # See changes
git add .            # Stage all
git commit -m ""     # Commit
git push             # Push to GitHub
```

## 🎯 Common Tasks

### Add a Tool
1. Open `script.js`
2. Find `aiToolsDatabase` (line 7)
3. Copy an existing tool object
4. Modify for your new tool
5. Test in browser
6. Commit: `git commit -m "feat(tools): add ToolName"`

### Add a Workflow
1. Open `script.js`
2. Find `workflowTemplates` (line 791)
3. Find the category array
4. Add your workflow object
5. Test in browser
6. Commit: `git commit -m "feat(workflows): add WorkflowName"`

### Fix a Bug
1. Create branch: `git checkout -b fix/bug-name`
2. Reproduce the bug
3. Fix it
4. Test thoroughly
5. Commit: `git commit -m "fix: description"`
6. Push: `git push origin fix/bug-name`

## 🔍 File Locations

| Task | File | Line |
|------|------|------|
| Add tool | script.js | 7-788 |
| Add workflow | script.js | 791-1135 |
| Edit styles | styles.css | Any |
| Edit HTML | index.html | Any |
| Constants | constants.js | Any |

## 🐛 Debugging

### Browser Console (F12)
```javascript
// Test functions
filterTools(aiToolsDatabase, 'text-generation');

// Check state
console.log(appState);

// Inspect DOM
document.querySelectorAll('.tool-card');
```

### Common Issues

**Tools not displaying?**
- Check browser console (F12) for errors
- Verify tool object structure
- Check if filters are too restrictive

**Styles not applying?**
- Hard refresh: Ctrl+Shift+R
- Check CSS selector specificity
- Check for typos in class names

**Function not found?**
- Check function is defined before use
- Check spelling (case-sensitive)
- Check browser console for errors

## 📚 Documentation

| Guide | Purpose |
|-------|---------|
| README.md | Project overview |
| BEST_PRACTICES.md | Coding standards (650+ lines) |
| DEVELOPMENT.md | Setup & workflow |
| CONTRIBUTING.md | How to contribute |
| CODE_REVIEW.md | Code analysis |
| TODO.md | Current tasks |

## 🎨 Code Style

```javascript
// ✅ Good
const tools = aiToolsDatabase.filter(tool => tool.category === 'text');
const message = `Found ${tools.length} tools`;

// ❌ Bad
var tools = aiToolsDatabase.filter(function(tool) { 
  return tool.category == 'text'; 
});
var message = 'Found ' + tools.length + ' tools';
```

## 🔑 Keyboard Shortcuts

### VS Code
- `Ctrl+Shift+P` - Command palette
- `Ctrl+P` - Quick file open
- `Ctrl+/` - Toggle comment
- `Alt+Shift+F` - Format document
- `F12` - Go to definition

### Browser DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+C` - Inspect element
- `Ctrl+Shift+M` - Toggle device mode
- `Ctrl+R` - Refresh
- `Ctrl+Shift+R` - Hard refresh

## 📦 Project Structure

```
project/
├── index.html           # HTML structure
├── script.js            # All JavaScript (1,753 lines)
├── styles.css           # All CSS (1,646 lines)
├── constants.js         # Configuration
├── package.json         # Dependencies & scripts
├── .eslintrc.json       # Code quality rules
├── .prettierrc.json     # Code formatting rules
└── .editorconfig        # Editor consistency
```

## 🧪 Testing Checklist

Before committing:
- [ ] Page loads without errors
- [ ] Search works
- [ ] Filters work
- [ ] Tool cards display
- [ ] Modals open/close
- [ ] Mobile responsive (F12 → Device Mode)
- [ ] No console errors
- [ ] Code formatted: `npm run format`
- [ ] No lint errors: `npm run lint`

## 💬 Commit Message Format

```
<type>(<scope>): <subject>

Examples:
feat(tools): add Google Gemini
fix(search): resolve filter bug
docs(readme): update setup instructions
style(css): improve button hover effect
refactor(db): extract tool validation
```

## 🚦 Git Workflow

```bash
# Daily workflow
git pull origin main                    # Get latest
git checkout -b feature/my-feature      # New branch
# ... make changes ...
git add .                               # Stage
git commit -m "feat: description"       # Commit
git push origin feature/my-feature      # Push
```

## 🎯 Best Practices (Quick Tips)

1. **Use const/let** - Never use `var`
2. **Validate inputs** - Check for null/undefined
3. **Handle errors** - Use try/catch
4. **Test frequently** - Every change
5. **Small commits** - One logical change per commit
6. **Comment wisely** - Explain why, not what
7. **Check console** - Before committing (F12)
8. **Mobile first** - Test responsive design

## 🆘 Getting Help

1. **Check documentation** (see above)
2. **Browser console** (F12)
3. **GitHub issues**
4. **Ask Claude Code** - Be specific!

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS Tricks](https://css-tricks.com/)
- BEST_PRACTICES.md (in this repo)
- DEVELOPMENT.md (in this repo)

---

## 📱 Contact

Found an issue? Open a GitHub issue!

Want to contribute? See CONTRIBUTING.md!

---

**Remember**: Good code is not just code that works, it's code that others can understand!

Happy coding! 🚀
