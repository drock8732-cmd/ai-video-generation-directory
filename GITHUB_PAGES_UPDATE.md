# How to Update Your GitHub Pages Site

**Your GitHub Pages site is currently showing old code because the `gh-pages` branch hasn't been updated with the latest changes.**

---

## 🌐 Your GitHub Pages Setup

**Live Site URL:** `https://[your-username].github.io/ai-video-generation-directory/`

**Current Status:**
- ✅ `gh-pages` branch exists
- ⚠️ `gh-pages` branch is **outdated** (doesn't have v1.0.3 changes)
- ✅ Your working branch (`claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy`) has all latest changes

---

## 🔧 Method 1: Merge via GitHub Web Interface (Easiest)

### Step 1: Go to GitHub
1. Open browser to: `https://github.com/[your-username]/ai-video-generation-directory`
2. Make sure you're logged in

### Step 2: Create a Pull Request
1. Click **"Pull requests"** tab
2. Click green **"New pull request"** button
3. Set:
   - **Base:** `gh-pages` (the branch to update)
   - **Compare:** `claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy` (your latest work)
4. Click **"Create pull request"**
5. Add title: `Update GitHub Pages with v1.0.3`
6. Click **"Create pull request"** again

### Step 3: Merge the PR
1. Review the changes (should show pagination, bug fixes, etc.)
2. Click **"Merge pull request"**
3. Click **"Confirm merge"**
4. Done! ✅

### Step 4: Wait for Deployment
- GitHub Pages automatically rebuilds (takes 1-3 minutes)
- Refresh your site: `https://[your-username].github.io/ai-video-generation-directory/`
- You should now see pagination, fixed bugs, updated styles!

---

## 🖥️ Method 2: Using Git Commands Locally

### Why the direct push failed:
Claude Code has security restrictions - it can only push to branches starting with `claude/` and ending with the session ID. This prevents accidental overwrites.

### Manual Update Steps:

#### Step 1: Switch to gh-pages branch
```bash
git checkout gh-pages
```

#### Step 2: Merge your work
```bash
git merge claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy
```

#### Step 3: Push manually (outside Claude Code)
You'll need to push this from your regular terminal (not in Claude Code):

**On your Surface laptop:**
1. Open PowerShell or Git Bash
2. Navigate to your project:
   ```bash
   cd path/to/ai-video-generation-directory
   ```
3. Push:
   ```bash
   git push origin gh-pages
   ```

#### Step 4: Verify
- Wait 1-3 minutes for GitHub Pages to rebuild
- Visit your site and refresh (Ctrl+F5 to force refresh)

---

## 🔄 Method 3: Using GitHub Desktop (If Installed)

### Step 1: Open GitHub Desktop
1. Open GitHub Desktop app
2. Make sure you have your repository selected

### Step 2: Switch to gh-pages branch
1. Click **"Current branch"** dropdown (top left)
2. Select **"gh-pages"**

### Step 3: Merge from your working branch
1. Click **"Branch"** menu → **"Merge into current branch"**
2. Select `claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy`
3. Click **"Merge"**

### Step 4: Push to GitHub
1. Click **"Push origin"** button (top right)
2. Wait for completion
3. Visit your GitHub Pages site in 1-3 minutes

---

## 🎯 Recommended Approach: Web Interface

**I recommend Method 1 (GitHub Web Interface) because:**
- ✅ No command line needed
- ✅ Easy to review changes before merging
- ✅ Visual diff of what's changing
- ✅ Can't accidentally mess up git history
- ✅ Works from any device (phone, tablet, laptop)

---

## 📋 What Changes Will Be Deployed

When you update `gh-pages`, your live site will get:

### ✅ Bug Fixes (v1.0.1)
- Comparison feature now works
- Table headers display correctly
- Freemium badges styled properly

### ✅ Validation & Error Handling (v1.0.2)
- Newsletter form validates emails
- Search is sanitized
- No crashes from invalid input

### ✅ Pagination (v1.0.3)
- Previous/Next navigation
- Page info display
- Results counter
- Mobile responsive

### ✅ New Documentation
- LOCAL_TESTING.md
- SESSION_SUMMARY.md
- CLAUDE_CODE_LIMITS.md
- Updated CHANGELOG.md
- Updated TODO.md

---

## 🐛 Troubleshooting

### Issue: "Nothing changed on my live site"

**Solution 1: Hard refresh**
```
Windows: Ctrl + F5
Mac: Cmd + Shift + R
```

**Solution 2: Clear browser cache**
1. Open DevTools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"

**Solution 3: Wait longer**
- GitHub Pages can take 5-10 minutes sometimes
- Check status: `https://github.com/[username]/[repo]/deployments`

---

### Issue: "I see a 404 error"

**Check:**
1. Is GitHub Pages enabled?
   - Go to: Settings → Pages
   - Source should be: `gh-pages` branch
   - Should show: "Your site is published at..."

2. Is the URL correct?
   - Should be: `https://[username].github.io/[repo-name]/`
   - NOT: `https://github.com/[username]/[repo-name]/`

---

### Issue: "CSS/JS not loading"

**Check file paths in index.html:**
```html
<!-- Should be relative paths (no leading /) -->
✅ <link rel="stylesheet" href="styles.css">
✅ <script src="script.js"></script>

<!-- NOT absolute paths -->
❌ <link rel="stylesheet" href="/styles.css">
❌ <script src="/script.js"></script>
```

**If using absolute paths, prepend repo name:**
```html
<link rel="stylesheet" href="/ai-video-generation-directory/styles.css">
```

---

## 🔮 Future GitHub Pages Updates

### Automatic Updates (Advanced)

**Set up GitHub Action to auto-deploy:**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]  # or your default branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

**Benefits:**
- ✅ Every push to main auto-deploys to GitHub Pages
- ✅ No manual merging needed
- ✅ Always up to date

---

## 📝 Quick Reference

```bash
# Manual update from command line:
git checkout gh-pages
git merge claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy
git push origin gh-pages

# Check deployment status:
# Visit: https://github.com/[user]/[repo]/deployments

# Your live site:
# https://[user].github.io/[repo]/
```

---

## ✅ Verification Checklist

After updating GitHub Pages:

- [ ] Site loads without errors
- [ ] Pagination buttons appear at bottom
- [ ] "Compare" button works (check browser console - F12)
- [ ] Freemium badges have green-orange gradient
- [ ] Newsletter form validates email
- [ ] Search works properly
- [ ] Mobile view looks good
- [ ] No console errors (F12 → Console tab)

---

## 🆘 Still Having Issues?

1. **Check the GitHub Pages build log:**
   - Repo → Settings → Pages
   - Look for error messages

2. **Verify gh-pages branch has latest code:**
   - Go to: `https://github.com/[user]/[repo]/tree/gh-pages`
   - Check file dates and content

3. **Try deploying from different branch:**
   - Settings → Pages → Source
   - Try selecting `main` branch instead
   - (You'll need index.html in main branch)

---

**Pro Tip:** After successfully merging to `gh-pages`, you can delete old feature branches to keep your repo clean:

```bash
git branch -d claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy
git push origin --delete claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy
```

(Only do this AFTER confirming everything works on GitHub Pages!)
