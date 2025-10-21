# Claude Code Tips & Session Management

This guide will help you get the most out of Claude Code and manage your coding sessions effectively.

**Created:** 2025-10-21
**For:** AI Intelligence Hub Project

---

## Table of Contents

1. [Starting a New Session](#starting-a-new-session)
2. [Resuming Work Later](#resuming-work-later)
3. [What Persists Between Sessions](#what-persists-between-sessions)
4. [Best Practices for Working with Claude Code](#best-practices-for-working-with-claude-code)
5. [How to Ask Effective Questions](#how-to-ask-effective-questions)
6. [Common Commands & Workflows](#common-commands--workflows)
7. [Troubleshooting](#troubleshooting)

---

## Starting a New Session

### When You Open Claude Code for the First Time Today

Claude Code doesn't automatically know what you worked on yesterday. Here's how to get started:

#### Option 1: Quick Context (For Simple Tasks)
```
"I'm working on the AI Intelligence Hub project.
I need to fix the comparison feature bug from TODO.md"
```

#### Option 2: Full Context (For Complex Work)
```
"I'm continuing work on the AI Intelligence Hub project.
Please read:
1. CODE_REVIEW.md - to understand the codebase
2. TODO.md - to see what I'm working on
3. My current task is: [describe task]"
```

#### Option 3: Point to Files
```
"Check TODO.md Priority 1 tasks.
I want to fix bug #1 about the undefined variable."
```

**Why this helps:**
- Claude Code can read your files to understand context
- The documentation files (CODE_REVIEW.md, TODO.md) serve as "memory"
- Being specific helps Claude provide better assistance

---

## Resuming Work Later

### What You Said: "Can I come back to this later?"

**Short Answer:** Your code and git commits persist, but conversation history may not.

### What's Permanent:
✅ All your files (index.html, script.js, styles.css)
✅ Documentation (CODE_REVIEW.md, GETTING_STARTED.md, TODO.md, README.md)
✅ Git commits and branches
✅ Any code changes you saved

### What Might Not Persist:
❌ This conversation (depends on Claude Code settings)
❌ Claude's "memory" of what you discussed
❌ Uncommitted changes (if you don't save)

### How to Resume Effectively

When you come back later:

**Step 1: Check Your Documentation**
```bash
# These files tell you where you left off:
- TODO.md        # What needs to be done
- CODE_REVIEW.md # What issues exist
- git log        # What you committed
```

**Step 2: Tell Claude Where You Are**
```
"I'm back working on the AI Intelligence Hub.
Last time I was working on [X].
Check TODO.md to see my progress.
I want to continue with [next task]."
```

**Step 3: Reference the Documentation**
```
"Read CODE_REVIEW.md section on [topic] and help me fix it."
```

**Example Full Prompt:**
```
Hi! I'm continuing work on my AI Intelligence Hub project.

Context:
- Project: AI tool directory with vibe-based recommendations
- Current branch: claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy
- Last worked on: [date/task]

Please read:
1. TODO.md - shows my checklist and progress
2. CODE_REVIEW.md - explains the bugs and issues

I want to work on: Priority 1, Bug #2 (DOM manipulation fix)

Can you help me locate the code and fix it?
```

---

## What Persists Between Sessions

### Your Git Repository (100% Persistent)

Everything in git is permanent:

```bash
# See your history
git log --oneline

# See what branch you're on
git branch

# See what you changed
git diff

# See uncommitted changes
git status
```

**Pro Tip:** Commit frequently!
```bash
git add .
git commit -m "clear description of what you did"
git push
```

### Your Documentation Files (Your "Memory System")

These files act as persistent memory:

| File | What It Remembers |
|------|-------------------|
| `CODE_REVIEW.md` | All bugs, issues, and analysis |
| `TODO.md` | What needs to be done (checklist) |
| `GETTING_STARTED.md` | How the code works |
| `README.md` | Project overview |
| Git commits | History of changes |

**Using them as memory:**
```bash
# Update TODO.md as you complete tasks
# Check items off: - [ ] → - [x]

# Add notes to TODO.md about what you're working on
# Example: "Started bug #1, got stuck on line 990"

# Commit your documentation updates:
git add TODO.md
git commit -m "docs: updated TODO progress"
```

---

## Best Practices for Working with Claude Code

### 1. Start Each Session with Context

**Good:**
```
"Working on AI Intelligence Hub.
Need to fix comparison bug from CODE_REVIEW.md section 'Critical Bugs'.
Show me the relevant code."
```

**Not as helpful:**
```
"Fix the bug"  # Which bug? Which project?
```

### 2. Reference Files Explicitly

**Good:**
```
"Look at script.js line 990 and fix the aiVideoModels undefined error"
```

**Better:**
```
"Check CODE_REVIEW.md Bug #1, then fix script.js:990"
```

**Best:**
```
"I'm working on TODO.md Priority 1.
Read CODE_REVIEW.md Critical Bug #1 to understand the issue.
Then help me fix script.js:990."
```

### 3. Work in Small Chunks

**Good workflow:**
1. Pick ONE task from TODO.md
2. Ask Claude to help with that task
3. Test the change
4. Commit if it works
5. Move to next task

**Avoid:**
- Trying to fix everything at once
- Making many changes before testing
- Not committing working code

### 4. Commit Frequently

```bash
# After each working change:
git add .
git commit -m "fix: comparison feature undefined variable"
git push

# Not just at the end of the day!
```

**Why:**
- You can always go back
- You have backups
- Claude can see your progress in git log

### 5. Update Documentation

When you complete tasks:
```markdown
# In TODO.md, change:
- [ ] Fix Bug #1: Undefined variable

# To:
- [x] Fix Bug #1: Undefined variable
```

**Commit these updates too:**
```bash
git add TODO.md
git commit -m "docs: mark bug #1 as completed"
```

---

## How to Ask Effective Questions

### General Format

```
[Context] + [Specific Request] + [Desired Outcome]
```

### Examples

#### ✅ Effective Questions

**Example 1: Bug Fix**
```
Context: I'm working on the AI Intelligence Hub comparison feature.
Request: There's a bug at script.js:990 where aiVideoModels is undefined.
Outcome: Help me fix it so the comparison feature works.
```

**Example 2: Understanding Code**
```
Context: New to this codebase, working on AI Intelligence Hub.
Request: Explain how the search filter logic works in script.js lines 860-984.
Outcome: I need to understand it well enough to add a new filter option.
```

**Example 3: Adding a Feature**
```
Context: AI Intelligence Hub project, want to add dark mode.
Request: Show me where to add a dark mode toggle and what CSS to change.
Outcome: Users should be able to switch between light and dark themes.
```

#### ❌ Less Effective Questions

**Too Vague:**
```
"My code doesn't work"
# Missing: What code? What's not working? What error?
```

**No Context:**
```
"Add a new feature"
# Missing: What feature? To which project?
```

**Too Broad:**
```
"Explain everything in the codebase"
# Too large - start with specific parts
```

### Question Templates

#### For Bug Fixes:
```
I'm working on [project name].
I found a bug: [describe behavior].
The error is: [error message].
Location: [file:line or feature name].
Help me fix it so that [desired behavior].
```

#### For Understanding Code:
```
I'm trying to understand [specific feature/function].
It's in [file name] around lines [X-Y].
I need to know [specific aspect] because [reason/goal].
```

#### For Adding Features:
```
I want to add [feature description] to [project].
It should work like: [describe behavior].
Where in the code should this go?
What files need to be changed?
```

#### For Refactoring:
```
I want to improve [specific code section].
Current issue: [what's wrong with it].
Goal: [what you want to achieve].
Any recommendations?
```

---

## Common Commands & Workflows

### Starting Your Day

```bash
# 1. Check what branch you're on
git branch

# 2. See what you last committed
git log --oneline -5

# 3. Check for any uncommitted changes
git status

# 4. Pull latest changes (if working with remote)
git pull origin claude/review-codebase-011CUKQjzdpTfX3YpZeAQaoy
```

### Then tell Claude:
```
"I'm resuming work on AI Intelligence Hub.
Last commit was: [paste commit message]
Check TODO.md for my next task.
I want to work on: [task description]"
```

### During Development

```bash
# Test often
# - Open index.html in browser
# - Check console (F12) for errors
# - Try the feature you're working on

# Commit when something works
git add .
git commit -m "feat: added pagination to tools grid"
git push

# If you need to undo:
git checkout -- filename.js  # Undo one file
git reset --hard HEAD        # Undo all uncommitted changes (careful!)
```

### Ending Your Day

```bash
# 1. Commit any working code
git add .
git commit -m "wip: working on pagination, 80% done"
git push

# 2. Update TODO.md with progress notes
# Add notes about:
# - What you completed
# - What you're in the middle of
# - Any blockers or questions

# 3. Commit the updated TODO
git add TODO.md
git commit -m "docs: updated progress on pagination"
git push
```

**Example TODO.md note:**
```markdown
## Priority 3: Pagination (IN PROGRESS)

- [x] Added pagination state to appState
- [x] Created pagination controls in HTML
- [x] Added pagination styles
- [ ] Implement pagination logic (NEXT: working on displayToolsWithPagination)
  - NOTE: Need to decide how to reset page on filter change
  - QUESTION: Should we show "Showing 1-12 of 45 tools"?
```

---

## Troubleshooting

### Problem: Claude doesn't remember our previous conversation

**Why:** Each session might be independent
**Solution:** Use documentation files as "memory"

```
# Start new session with:
"Read CODE_REVIEW.md and TODO.md to understand the project.
I was working on [task]. Continue helping with that."
```

### Problem: I forgot what I was working on

**Solution 1: Check git log**
```bash
git log --oneline -10
# Your recent commits tell the story
```

**Solution 2: Check TODO.md**
```markdown
# Look for tasks marked:
- [x] Completed
- [ ] Not started
- [ ] Half done with notes
```

**Solution 3: Check git diff**
```bash
git diff  # See uncommitted changes
git status  # See which files changed
```

### Problem: I made a mistake and want to undo

**For uncommitted changes:**
```bash
# Undo changes to one file:
git checkout -- script.js

# Undo ALL uncommitted changes (CAREFUL!):
git reset --hard HEAD
```

**For committed changes:**
```bash
# See your commits:
git log --oneline

# Go back to a specific commit:
git reset --hard COMMIT_HASH

# Or undo just the last commit (keep changes):
git reset --soft HEAD~1
```

### Problem: Claude is confused about my codebase

**Solution:** Provide clear file paths and context

**Instead of:**
```
"Fix the function"
```

**Say:**
```
"Fix the addToComparison function in script.js starting at line 989.
The bug is: it references aiVideoModels which doesn't exist.
CODE_REVIEW.md Bug #1 has full details."
```

### Problem: I don't know which file to edit

**Ask Claude:**
```
"I want to add a dark mode toggle.
Which files need changes?
Where in each file should the code go?"
```

Or:
```
"I need to understand the codebase structure.
Read GETTING_STARTED.md and explain how [specific feature] works."
```

---

## Advanced Tips

### Using Branches Effectively

```bash
# Create a new branch for each feature:
git checkout -b fix-comparison-bug

# Work on the branch
# ... make changes ...
git add .
git commit -m "fix: comparison feature bug"

# When done, merge to main:
git checkout main
git merge fix-comparison-bug

# Or push branch for review:
git push origin fix-comparison-bug
```

### Keeping Documentation in Sync

**After fixing a bug:**
1. Update code
2. Update TODO.md (check off task)
3. Update CODE_REVIEW.md (add note that bug is fixed)
4. Commit all together:

```bash
git add script.js TODO.md CODE_REVIEW.md
git commit -m "fix: comparison bug + updated docs"
git push
```

### Creating Session Notes

Create a `SESSION_NOTES.md` file:

```markdown
# Session Notes

## 2025-10-21 Evening Session
**Goal:** Fix Priority 1 bugs
**Completed:**
- [x] Fixed Bug #1 (undefined variable)
- [x] Fixed Bug #2 (DOM manipulation)
**In Progress:**
- [ ] Bug #3 (duplicate functions) - 50% done
**Next Session:**
- Continue with Bug #3
- Then add freemium badge style
**Blockers:** None
**Questions:** Should we test on mobile?

## 2025-10-22 Morning Session
**Goal:** Complete Priority 1
...
```

### Asking Claude to Generate Templates

```
"Create a commit message template for this project"
"Generate a bug report template for this codebase"
"Make a pull request template with our testing checklist"
```

---

## Quick Reference Card

### Starting a New Session
```
1. git status                    # Check what you changed
2. git log --oneline -5          # See recent work
3. Open TODO.md                  # See your task list
4. Tell Claude: "Working on [project], task [X] from TODO.md"
```

### During the Session
```
1. Make one change at a time
2. Test immediately
3. Commit if it works: git add . && git commit -m "..."
4. Update TODO.md progress
5. Push regularly: git push
```

### Ending the Session
```
1. Commit working code
2. Update TODO.md with notes
3. git push
4. Optional: Add session notes
```

### Getting Help from Claude
```
Format: [Context] + [Request] + [Outcome]

Example:
"I'm on AI Intelligence Hub project.
Need to fix bug at script.js:990 (see CODE_REVIEW.md Bug #1).
Help me fix it so comparison works."
```

---

## Communication Best Practices

### Do's ✅

- **Do** reference specific files and line numbers
- **Do** mention what you already tried
- **Do** use documentation files for context
- **Do** commit frequently
- **Do** update TODO.md as you work
- **Do** test before committing
- **Do** ask for explanations when you don't understand

### Don'ts ❌

- **Don't** assume Claude remembers previous sessions
- **Don't** ask vague questions without context
- **Don't** make many changes without testing
- **Don't** forget to commit working code
- **Don't** be afraid to ask "why" or "how"

---

## Example Session Script

Here's a complete example of resuming work:

```
[Opening Claude Code]

ME: Hi! I'm back working on my AI Intelligence Hub project.

Context:
- Web app for discovering AI tools
- Using vanilla JavaScript, HTML, CSS
- Working on bug fixes from CODE_REVIEW.md

Please read:
1. TODO.md - to see my progress
2. CODE_REVIEW.md section "Critical Bugs"

I completed Bug #1 yesterday (git log shows that commit).

Today I want to fix Bug #2: DOM manipulation issue at script.js:1613

Can you:
1. Show me the problematic code
2. Explain what's wrong
3. Help me fix it
4. Guide me to test it

Ready?

---

[After getting help and fixing]

ME: That works! Let me commit this.

git add script.js
git commit -m "fix: DOM manipulation in comparison table headers"
git push

Now let me update TODO.md to check off Bug #2.

[Updates TODO.md]

git add TODO.md
git commit -m "docs: mark Bug #2 as completed"
git push

Great! What's next on the Priority 1 list?

---

[Later in the session]

ME: I'm getting an error when I test the comparison feature.
Console says: [paste error]

This is in the code we just fixed around line 1615.
What's happening?

[Get help, fix, test, commit, repeat]
```

---

## Conclusion

### Key Takeaways

1. **Documentation = Your Memory**
   - CODE_REVIEW.md = What's wrong
   - TODO.md = What to do
   - Git commits = What you did

2. **Context is King**
   - Always tell Claude what project
   - Reference specific files/lines
   - Explain what you're trying to do

3. **Commit Often**
   - After each working change
   - Push to backup your work
   - Update TODO.md too

4. **One Thing at a Time**
   - Fix one bug
   - Test it
   - Commit it
   - Next bug

5. **Ask Good Questions**
   - Give context
   - Be specific
   - Say what you want to achieve

### Your Documentation Files Are Your Friends

Every time you come back:
1. Check `TODO.md` for what to do
2. Check `CODE_REVIEW.md` for how to do it
3. Check `git log` for what you did
4. Tell Claude about it
5. Get to work!

---

**Happy coding!** 🚀

Remember: The files you created today (CODE_REVIEW.md, TODO.md, etc.) will always be here to help you pick up where you left off.

---

**Created:** 2025-10-21
**For:** AI Intelligence Hub Project
**Author:** Claude Code Assistant

**Pro Tip:** Bookmark this file! You'll refer to it often when resuming work.
