# Working Between Claude Code and Bolt.new

**Quick Reference Guide for Switching AI Tools**

---

## 🎯 TL;DR - Quick Start

### When You Run Out of Claude Code Usage:

1. **Commit everything** in Claude Code
2. **Push to GitHub**
3. **Open Bolt.new** and import your repo
4. **Tell Bolt:** "Read HANDOFF_TO_BOLT.md - continue from Phase 2 Step 2B"
5. **Work in Bolt** until done or stuck
6. **Commit in Bolt** before leaving
7. **Return to Claude Code** when resets, pull changes, continue

---

## 🔄 WORKFLOW DIAGRAM

```
┌─────────────────┐
│  Claude Code    │ ──commit/push──> GitHub
└─────────────────┘                     │
                                        │
                                   ┌────▼────┐
                                   │  GitHub │
                                   │   Repo  │
                                   └────┬────┘
                                        │
┌─────────────────┐                     │
│   Bolt.new      │ <──import/pull──────┘
└─────────────────┘
```

---

## 📝 DETAILED STEP-BY-STEP GUIDE

### Part 1: Leaving Claude Code for Bolt

#### Step 1: Clean Up Your Work in Claude Code

```bash
# Check what files have changed
git status

# Add all changes
git add .

# Create a descriptive commit
git commit -m "feat: [describe what you did]

[optional details]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
git push -u origin claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g
```

#### Step 2: Update Documentation

Before leaving, update these files:

**SESSION_SUMMARY.md:**
```markdown
## Last Work Done (before switching to Bolt):
- Added X feature
- Fixed Y bug
- Next: Continue with Phase 2 Step 2B
```

**TODO.md:**
Mark completed items with `[x]` and note where you stopped.

#### Step 3: Verify Everything is Pushed

```bash
# Make sure everything is committed
git status
# Should say: "nothing to commit, working tree clean"

# Verify it's pushed
git log -1
# Should show your latest commit
```

---

### Part 2: Starting in Bolt.new

#### Step 1: Import Your Repository

1. Go to **https://bolt.new**
2. Click **"Import from GitHub"** or start new project
3. Connect your GitHub account
4. Select repository: `ai-video-generation-directory`
5. Select branch: `claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g`
6. Click **"Import"**

#### Step 2: Tell Bolt About Your Project

**Copy and paste this to Bolt:**

```
I'm working on the AI Intelligence Hub project. This is a vanilla HTML/CSS/JavaScript project
(no framework, no build tools, no npm).

TECH STACK:
- Frontend: Vanilla HTML5, CSS3, JavaScript ES6+
- No framework (no React, Vue, Angular)
- No build tools
- Dependencies: Font Awesome 6.0.0 (CDN), Google Fonts (CDN)

CURRENT STATUS:
- 33 AI tools in database (target: 45-60)
- 15 workflows (target reached!)
- Version: 1.1.0 (60% complete)

PLEASE READ FIRST:
1. HANDOFF_TO_BOLT.md - Complete technical specifications
2. SESSION_SUMMARY.md - What's been done so far
3. TODO.md - What needs to be done next

NEXT TASK: Phase 2 Step 2B
Add 5 AI tools to the aiToolsDatabase array in script.js:
1. Synthesia (enterprise AI avatars)
2. Leonardo.AI (game assets)
3. Descript (AI video/audio editing)
4. Otter.ai (meeting transcription)
5. Ideogram (text-in-images)

Follow the existing tool schema pattern. Each tool needs:
- All required fields (id, name, logo, company, description, etc.)
- pricing object with model, monthlyCost, freeTier
- performance metrics (quality, speed, consistency, reliability)
- alternatives array (2-4 similar tool IDs)

Use realistic pricing from official websites.
```

#### Step 3: Verify Bolt Can See Your Files

Ask Bolt:
```
"Please list all files in this project and confirm you can see:
- index.html
- script.js
- styles.css
- HANDOFF_TO_BOLT.md
- SESSION_SUMMARY.md
- TODO.md"
```

#### Step 4: Start Working

Bolt should now:
1. Read your documentation
2. Understand the project structure
3. Add the 5 tools following existing patterns
4. Test the changes
5. Be ready to commit

---

### Part 3: Working in Bolt

#### What Bolt is Great At:
✅ Adding new tools to arrays
✅ Creating new workflows
✅ Building UI components
✅ CSS styling and animations
✅ Quick prototyping
✅ Live preview while coding

#### What to Avoid in Bolt:
❌ Don't add npm packages
❌ Don't change the tech stack
❌ Don't refactor everything
❌ Don't add build tools

#### How to Add a Tool in Bolt:

**Tell Bolt:**
```
"Add a new tool to the aiToolsDatabase array in script.js.

Tool: Synthesia
Company: Synthesia
Description: Enterprise AI video platform with professional avatars
Category: video-generation
Pricing: $29/month (paid plan)
Website: https://synthesia.io

Follow the exact schema from existing tools. Include:
- All required fields
- Performance metrics (use realistic 85-95 range)
- alternatives array: ['heygen', 'd-id', 'runway-gen2']
- All other fields from the schema

Insert it after the Jasper AI tool."
```

Bolt will:
1. Find the location in script.js
2. Copy the schema from an existing tool
3. Fill in all the fields
4. Add it to the array
5. Show you a preview

#### Testing in Bolt:

Bolt has **live preview**! You'll see changes immediately.

**Test checklist:**
- Tool appears in the grid
- Tool card shows correct info
- Clicking tool opens modal
- Pricing calculator works
- Search finds the tool
- No console errors

---

### Part 4: Committing Work in Bolt

When you're done in Bolt:

#### Step 1: Review Your Changes

Bolt will show you what files changed. Review them!

#### Step 2: Commit in Bolt

**Use this commit format:**

```
feat: add 5 AI tools - Phase 2 Step 2B

Added comprehensive tool profiles for:
- Synthesia (enterprise AI avatars)
- Leonardo.AI (game assets)
- Descript (AI video/audio editing)
- Otter.ai (meeting transcription)
- Ideogram (text-in-images)

All tools include complete pricing, performance, alternatives.

🤖 Generated with Bolt.new

Co-Authored-By: Bolt <noreply@stackblitz.com>
```

#### Step 3: Push to GitHub

Bolt should automatically push to your branch. Verify it pushed!

---

### Part 5: Returning to Claude Code

#### Step 1: Pull Changes from Bolt

When Claude Code resets and you return:

```bash
# Make sure you're on the right branch
git branch
# Should show: claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g

# Pull changes from Bolt
git pull origin claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g
```

#### Step 2: Tell Claude Code What Happened

**Start your message with:**

```
"Read SESSION_SUMMARY.md and the latest git commits. I used Bolt.new to
add 5 tools (Phase 2 Step 2B completed). Please review what was added
and continue with Phase 2 Step 2C."
```

Claude will:
1. Read the session summary
2. Check recent commits (`git log`)
3. Review what Bolt added
4. Continue from there

---

## 🎯 COMPARISON: Claude Code vs Bolt

### Claude Code Strengths:
✅ **Deep understanding** of your project
✅ **Explains decisions** and provides context
✅ **Reads documentation** thoroughly
✅ **Git workflow** management
✅ **Code review** and quality checks
✅ **Long-term planning** and strategy
✅ **Complex refactoring**
✅ **Testing and debugging** help

**Best for:**
- Strategic decisions
- Architecture planning
- Complex features
- Code review
- Documentation
- Multi-file changes

### Bolt.new Strengths:
✅ **Live preview** while coding
✅ **Fast execution** of simple tasks
✅ **Visual feedback** immediately
✅ **Quick prototyping**
✅ **UI/UX tweaks**
✅ **Browser-based** (works anywhere)
✅ **No token limits** (as far as we know)

**Best for:**
- Adding tools/workflows
- CSS styling
- Quick fixes
- Visual components
- Simple additions
- When Claude is out of tokens

---

## 🚨 IMPORTANT RULES

### Always Do This:
✅ **Commit before switching** between tools
✅ **Update SESSION_SUMMARY.md** with progress
✅ **Mark TODO.md** with completed items
✅ **Push to GitHub** before leaving either tool
✅ **Pull changes** when returning to Claude Code
✅ **Follow existing patterns** (don't change architecture)
✅ **Test in browser** before committing

### Never Do This:
❌ **Don't leave uncommitted changes**
❌ **Don't work on both at the same time** (causes merge conflicts)
❌ **Don't change the tech stack** in Bolt
❌ **Don't add npm packages** in Bolt
❌ **Don't skip git pull** when returning to Claude
❌ **Don't commit broken code**

---

## 🔥 TROUBLESHOOTING

### Problem: Merge Conflicts

**Cause:** You edited the same file in both tools without pulling.

**Solution:**
```bash
# See what conflicts exist
git status

# Option 1: Keep Bolt's version
git checkout --theirs script.js
git add script.js

# Option 2: Keep Claude's version
git checkout --ours script.js
git add script.js

# Option 3: Manually fix conflicts
# Edit the file, remove <<<< ==== >>>> markers
git add script.js

# Finish the merge
git commit -m "fix: resolve merge conflicts"
```

**Prevention:** Always commit and push before switching!

---

### Problem: Bolt Changed Too Much

**Cause:** Bolt got creative and refactored things.

**Solution:**
```bash
# Rollback to before Bolt's changes
git log --oneline
# Find the commit hash before Bolt's work

git reset --hard <commit-hash>
git push --force origin claude/enhance-workflow-system-011CUMi2jukiHQnSLVdc7M5g
```

**Prevention:** Give Bolt very specific, limited instructions.

---

### Problem: Lost Track of Progress

**Cause:** Didn't update SESSION_SUMMARY.md or TODO.md.

**Solution:**
```bash
# Check recent commits
git log --oneline -10

# Read the commits to see what was done
git show <commit-hash>

# Update SESSION_SUMMARY.md with findings
```

**Prevention:** Always update docs before switching!

---

## 📋 CHECKLIST

### Before Leaving Claude Code:
- [ ] `git status` shows clean working tree
- [ ] All changes committed with good messages
- [ ] Changes pushed to GitHub
- [ ] SESSION_SUMMARY.md updated
- [ ] TODO.md shows current status
- [ ] Next task clearly noted

### Before Starting in Bolt:
- [ ] Repository imported successfully
- [ ] Bolt can see all files
- [ ] Told Bolt to read HANDOFF_TO_BOLT.md
- [ ] Bolt understands it's vanilla JS (no framework)
- [ ] Gave Bolt specific next task
- [ ] Bolt confirms it understands

### Before Leaving Bolt:
- [ ] Changes tested in live preview
- [ ] No console errors
- [ ] Tool/workflow works correctly
- [ ] Changes committed
- [ ] Changes pushed to GitHub
- [ ] SESSION_SUMMARY.md updated (if possible)

### Before Returning to Claude Code:
- [ ] Bolt's changes pushed to GitHub
- [ ] Ready to pull changes
- [ ] Know what Bolt did
- [ ] Know what to do next

---

## 🎓 EXAMPLE CONVERSATION FLOW

### In Claude Code (running out of tokens):

**You:**
```
"I'm at 90% token usage. Let me switch to Bolt for adding the next 5 tools.
Please commit everything and prepare handoff docs."
```

**Claude:**
```
[Commits all changes]
[Updates SESSION_SUMMARY.md]
[Updates TODO.md]
"Everything committed and pushed. Use HANDOFF_TO_BOLT.md to brief Bolt.
Next task: Phase 2 Step 2B - add Synthesia, Leonardo.AI, Descript,
Otter.ai, Ideogram."
```

---

### In Bolt.new:

**You:**
```
[Paste the technical specs from HANDOFF_TO_BOLT.md]

"Continue from Phase 2 Step 2B: Add these 5 tools to script.js following
the existing schema..."
```

**Bolt:**
```
[Reads the handoff doc]
[Adds 5 tools]
[Shows live preview]
"I've added all 5 tools. They're now visible in the grid.
Would you like me to commit these changes?"
```

**You:**
```
"Yes, commit with the message format from HANDOFF_TO_BOLT.md"
```

**Bolt:**
```
[Commits and pushes]
"Committed and pushed! The tools are now live."
```

---

### Back in Claude Code (next day):

**You:**
```
"Read SESSION_SUMMARY.md and recent commits. I used Bolt to add 5 tools.
Review what was added and continue with Phase 2 Step 2C."
```

**Claude:**
```
[Pulls changes]
[Reviews commits]
[Checks tool quality]
"Great work in Bolt! I see Synthesia, Leonardo.AI, Descript, Otter.ai,
and Ideogram were added successfully. All follow the correct schema.
Ready to continue with Step 2C?"
```

---

## 🏆 BEST PRACTICES

1. **Use Claude Code for:**
   - Planning and strategy
   - Complex features
   - Code review
   - Documentation
   - Architecture decisions

2. **Use Bolt for:**
   - Adding tools/workflows (simple, repetitive)
   - CSS tweaks
   - Quick fixes
   - When Claude is out of tokens

3. **Always:**
   - Commit before switching
   - Update documentation
   - Test before committing
   - Pull before working

4. **Communication:**
   - Be specific with both tools
   - Reference documentation files
   - State the tech stack clearly
   - Give context about what's been done

---

## 🎯 SUCCESS METRICS

You're doing it right if:
✅ No merge conflicts
✅ Clear commit history
✅ Documentation always up to date
✅ Both tools understand the project
✅ Smooth handoffs between tools
✅ Code quality stays consistent

---

**You're all set! Happy coding with both Claude Code and Bolt.new! 🚀**
