# Git Reference Guide
## Quick Rollback & Version Control

This guide helps you navigate commits and rollback changes if needed.

---

## 📊 Current Commit History

### Latest Commits (Newest First)

| Commit | Type | Description | Can Rollback To |
|--------|------|-------------|-----------------|
| `c08a809` | docs | Update README with v1.0.1 status | ✅ Yes |
| `daf952f` | docs | Add CONTRIBUTING.md guidelines | ✅ Yes |
| `0fb26b4` | docs | Add CHANGELOG.md history | ✅ Yes |
| `569879d` | docs | Mark Priority 1 complete in TODO | ✅ Yes |
| `6922ac4` | **fix** | **Fix all Priority 1 bugs** | ⚠️ Careful |
| `5a200ba` | docs | Add documentation suite | ✅ Yes |

**Legend:**
- ✅ Safe to rollback - documentation only
- ⚠️ Careful - contains code fixes
- ❌ Don't rollback - breaks functionality

---

## 🔄 Quick Rollback Commands

### View What Changed in a Commit

```bash
# See what changed in a specific commit
git show COMMIT_HASH

# Examples:
git show c08a809    # See README changes
git show 6922ac4    # See bug fixes
```

### Rollback Options

#### Option 1: Soft Rollback (Keep Changes)
```bash
# Go back but keep your changes as uncommitted
git reset --soft COMMIT_HASH

# Example: Undo last commit but keep changes
git reset --soft HEAD~1
```

#### Option 2: Hard Rollback (Discard Changes)
```bash
# Go back and DISCARD all changes (CAREFUL!)
git reset --hard COMMIT_HASH

# Example: Go back to before bug fixes
git reset --hard 5a200ba
```

#### Option 3: Rollback Single File
```bash
# Restore a single file from a specific commit
git checkout COMMIT_HASH -- path/to/file

# Example: Restore old README
git checkout 569879d -- README.md
```

---

## 📁 What Each Commit Changed

### `c08a809` - docs: update README.md to reflect v1.0.1 bug fixes
**Files:** `README.md`
**What:** Updated status to show bugs are fixed
**Rollback Impact:** README shows old status (bugs not fixed)

### `daf952f` - docs: add CONTRIBUTING.md with development guidelines
**Files:** `CONTRIBUTING.md` (new file)
**What:** Added contribution guidelines
**Rollback Impact:** File is deleted

### `0fb26b4` - docs: add CHANGELOG.md with complete version history
**Files:** `CHANGELOG.md` (new file)
**What:** Added version history tracking
**Rollback Impact:** File is deleted

### `569879d` - docs: mark Priority 1 tasks as completed in TODO.md
**Files:** `TODO.md`
**What:** Checked off completed tasks
**Rollback Impact:** TODO shows tasks as incomplete

### `6922ac4` - fix: resolve all Priority 1 critical bugs ⚠️
**Files:** `script.js`, `styles.css`
**What:** Fixed 3 critical bugs
**Rollback Impact:** Bugs come back! (comparison breaks, badges unstyled)
**WARNING:** Don't rollback this unless you want bugs back!

### `5a200ba` - docs: Add comprehensive documentation suite
**Files:** `CODE_REVIEW.md`, `GETTING_STARTED.md`, `TODO.md`, `CLAUDE_CODE_TIPS.md`
**What:** Added all documentation files
**Rollback Impact:** All documentation deleted

---

## 🎯 Common Rollback Scenarios

### Scenario 1: "I want to undo the README update"
```bash
# Option A: Soft rollback (keep changes to edit)
git reset --soft daf952f

# Option B: Just restore old README
git checkout daf952f -- README.md
```

### Scenario 2: "I want to see the code before bug fixes"
```bash
# View only (doesn't change anything)
git show 5a200ba:script.js

# Or checkout old version to a new file
git show 5a200ba:script.js > script.js.old
```

### Scenario 3: "I accidentally broke something, go back completely"
```bash
# Nuclear option - go back to specific commit
git reset --hard COMMIT_HASH

# Then force push (if already pushed)
git push --force origin your-branch-name
```

### Scenario 4: "I want to undo just the last commit"
```bash
# Keep changes, undo commit
git reset --soft HEAD~1

# Discard changes, undo commit
git reset --hard HEAD~1
```

---

## 📋 File History Quick Reference

### Where Each File Was Changed

**README.md:**
- `c08a809` - Updated to v1.0.1 status (latest)
- `5a200ba` - Replaced workspace template

**TODO.md:**
- `569879d` - Marked Priority 1 complete (latest)
- `5a200ba` - Created with task list

**script.js:**
- `6922ac4` - Fixed 3 critical bugs (latest)
- (Earlier commits have older versions)

**styles.css:**
- `6922ac4` - Added freemium badge style (latest)
- (Earlier commits have older versions)

**CHANGELOG.md:**
- `0fb26b4` - Created (only version)

**CONTRIBUTING.md:**
- `daf952f` - Created (only version)

---

## 🔍 Useful Git Commands

### View History
```bash
# See commit history
git log --oneline

# See detailed history
git log --oneline --graph --all

# See what changed in each commit
git log --stat

# See commits for specific file
git log --oneline -- filename.js
```

### Compare Versions
```bash
# Compare current to specific commit
git diff COMMIT_HASH

# Compare two commits
git diff COMMIT1 COMMIT2

# Compare specific file between commits
git diff COMMIT1 COMMIT2 -- filename.js
```

### Check File at Specific Commit
```bash
# View file content from a commit
git show COMMIT_HASH:path/to/file

# Example: See old script.js
git show 5a200ba:script.js
```

---

## ⚠️ Rollback Safety Checklist

Before rolling back, ask yourself:

- [ ] Do I know which commit I want to go back to?
- [ ] Have I checked what that commit changed?
- [ ] Will rolling back break working features?
- [ ] Have I committed any current work I want to keep?
- [ ] Am I using `--soft` (safer) or `--hard` (dangerous)?
- [ ] If already pushed, do I understand force push consequences?

**Golden Rule:** Always commit your current work before rolling back!

---

## 🆘 "Oh No, I Messed Up" Recovery

### If you rolled back too far:
```bash
# See all actions (including rollbacks)
git reflog

# Find the commit you want to return to
# Look for the commit hash before your rollback

# Return to it
git reset --hard COMMIT_HASH
```

### If you deleted uncommitted work:
```bash
# Unfortunately, if you used --hard and didn't commit,
# the changes are gone.
#
# Lesson: Always commit before experimenting!
```

### If you force pushed by mistake:
```bash
# Contact your team immediately
# Check GitHub to see if old commit still exists
# Restore from reflog if available
git reflog
git reset --hard COMMIT_HASH
git push --force
```

---

## 📚 Learn More

- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)

---

## 💡 Pro Tips

**Tip 1:** Create a tag for important versions
```bash
git tag -a v1.0.1 -m "Version 1.0.1 - Bug fixes"
git push origin v1.0.1
```

**Tip 2:** Create a backup branch before risky operations
```bash
git branch backup-$(date +%Y%m%d)
# Now you can always go back to this branch
```

**Tip 3:** Use aliases for common commands
```bash
git config --global alias.undo 'reset --soft HEAD~1'
git config --global alias.last 'log -1 HEAD'

# Now you can use:
git undo   # Undo last commit
git last   # Show last commit
```

---

## 🎓 Understanding Commit Hashes

Each commit has a unique hash (like `c08a809`). This hash:
- Is generated from the commit content
- Uniquely identifies that exact state of the code
- Can be shortened (first 7 characters) for convenience
- Never changes - `c08a809` will always be the same commit

**Using hashes:**
- Full: `c08a809fc7f4c3c9f9d8e8f8f8f8f8f8f8f8f8f8`
- Short: `c08a809` (easier to type)
- Relative: `HEAD~1` (one commit before current)
- Relative: `HEAD~5` (five commits before current)

---

**Created:** 2025-10-21
**Last Updated:** 2025-10-21
**For Project:** AI Intelligence Hub

**Keep this file handy for emergency rollbacks!** 🚨
