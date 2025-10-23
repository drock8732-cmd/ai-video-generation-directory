# Quick Start Guide - AI Intelligence Hub

**Get coding in 5 minutes!** ⚡

---

## 🚀 First Time Setup

### 1. Clone the Repository
```bash
git clone https://github.com/drock8732-cmd/ai-video-generation-directory.git
cd ai-video-generation-directory
```

### 2. Open in VS Code
```bash
code .
```

### 3. Install Recommended Extensions
When VS Code opens, it will prompt you to install recommended extensions. Click **"Install All"**.

### 4. Open the Site
**Option A:** Right-click `index.html` → "Open with Live Server"
**Option B:** Double-click `index.html` (opens in default browser)

**That's it!** No `npm install` needed! 🎉

---

## 📁 Project Structure

```
ai-video-generation-directory/
├── index.html          ← Main page (start here)
├── script.js           ← All JavaScript logic
├── styles.css          ← All styling
├── data/
│   └── tools.json      ← AI tools database (33 tools)
├── .vscode/            ← VS Code settings
├── .editorconfig       ← Editor consistency
└── docs/               ← All documentation
```

---

## 🛠️ Daily Workflow

### Adding a New Tool

1. **Edit** `data/tools.json`
```json
{
    "id": "new-tool",
    "name": "New Tool",
    "company": "Company Name",
    "description": "What it does",
    "primaryCategory": "text-generation",
    "pricing": { "model": "freemium", "monthlyCost": 20, "freeTier": true },
    "website": "https://tool.com"
}
```

2. **Save** → Live Server auto-refreshes
3. **Test** → Check browser console for errors
4. **Commit**
```bash
git add data/tools.json
git commit -m "feat: add New Tool to database"
git push
```

### Adding a New Workflow

1. **Edit** `script.js` → Find `workflowTemplates`
2. **Add** new workflow object
3. **Save** → Test in browser
4. **Commit**

### Fixing a Bug

1. **Open** browser DevTools (F12)
2. **Check** Console tab for errors
3. **Fix** the issue
4. **Test** → Reload page
5. **Commit**

---

## 🔍 Common Commands

### Git
```bash
# See what changed
git status

# Stage changes
git add .

# Commit with message
git commit -m "type: description"

# Push to GitHub
git push -u origin claude/branch-name

# Pull latest changes
git pull origin branch-name

# Create new branch
git checkout -b claude/feature-name-sessionid
```

### VS Code
```
Ctrl/Cmd + P       → Quick file open
Ctrl/Cmd + Shift + F → Search entire project
Ctrl/Cmd + /       → Comment/uncomment
Ctrl/Cmd + D       → Select next occurrence
Alt + Up/Down      → Move line up/down
Shift + Alt + F    → Format document
```

### Live Server
```
Right-click index.html → "Open with Live Server"
Bottom right → Port 5500 → Click to open
Changes auto-refresh (no manual reload needed!)
```

---

## 🐛 Troubleshooting

### "Tools not loading"
- ✅ Check browser console for errors
- ✅ Verify `data/tools.json` is valid JSON (use JSONLint.com)
- ✅ Check file path is `/data/tools.json` (absolute)

### "Changes not showing"
- ✅ Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
- ✅ Clear browser cache
- ✅ Check Live Server is running

### "Git push failed"
- ✅ Branch must start with `claude/` and end with session ID
- ✅ Commit all changes first
- ✅ Pull latest changes before pushing

---

## 📚 Where to Find Help

- **Best Practices** → `VANILLA_BEST_PRACTICES.md`
- **Full Docs** → `DEVELOPMENT.md`, `CODE_REVIEW.md`
- **Handoff to Bolt** → `HANDOFF_TO_BOLT.md`
- **Session History** → `SESSION_SUMMARY.md`
- **What's Next** → `TODO.md`

---

## 💡 Pro Tips

1. **Keep browser DevTools open** while coding
2. **Save often** - Live Server updates automatically
3. **Test in different browsers** - Chrome, Firefox, Safari
4. **Commit frequently** - Small commits are better
5. **Read error messages** - They usually tell you exactly what's wrong
6. **Use Live Server** - Don't manually reload the page
7. **Check TODO.md** before starting work

---

## 🎯 Quick Testing Checklist

Before committing:
- [ ] No errors in browser console
- [ ] All features work as expected
- [ ] Page loads without issues
- [ ] Responsive on mobile (DevTools → Toggle device)
- [ ] Git status is clean (`git status`)

---

## 🆘 Need Help?

1. **Check console** - F12 → Console tab
2. **Search docs** - Use Ctrl+F in markdown files
3. **Check SESSION_SUMMARY.md** - See what was done before
4. **Ask Claude Code** - "Read [file].md and help me with [task]"

---

**Happy coding!** 🚀
