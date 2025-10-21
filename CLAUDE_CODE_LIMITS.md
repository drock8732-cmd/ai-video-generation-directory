# Claude Code Usage Limits & Tips

**Last Updated:** October 21, 2025

---

## 📊 Understanding Your Limits

### What Counts as "Usage"?
Claude Code measures usage in **tokens** (roughly 1 token = 4 characters or 0.75 words).

**Things that count toward your limit:**
- ✅ Your messages to Claude
- ✅ Claude's responses
- ✅ File contents read by Claude
- ✅ Tool outputs (bash commands, search results, etc.)
- ✅ Context from previous messages in the conversation

**Things that DON'T count:**
- ❌ Files on your computer that Claude hasn't read
- ❌ Previous conversations (each session starts fresh)

---

## 🔢 Your Current Plan Limits

Based on the session you just had, it appears you're on a plan with:
- **200,000 tokens per conversation** (approximately)
- **Resets at 5am** (based on the message you saw)

### How Much Is 200,000 Tokens?
- **Approximately 150,000 words** of text
- **About 300-500 pages** of documentation
- **50-100 file reads** of medium-sized files (500-1000 lines)
- **10-20 comprehensive code reviews** with detailed responses

---

## ⏰ When You're Running Out

### Signs You're Near the Limit:
1. You'll see a warning: `Session limit reached ∙ resets 5am`
2. Claude may give shorter responses
3. You might see messages like "Token usage: 198000/200000"

### What Happens When You Hit the Limit:
- ❌ Conversation ends immediately
- ✅ **Files you created persist** (they're saved to disk)
- ✅ **Git commits persist** (they're in your repo)
- ❌ **Conversation context is lost** (you'll need to start fresh)

---

## 🎯 How to Track Your Usage

### 1. **System Reminders** (Visible in Debug Mode)
If you enable debug output, you'll see:
```
Token usage: 69573/200000; 130427 remaining
```

### 2. **Manual Tracking**
Keep a rough count:
- **Starting a chat:** ~1,000 tokens
- **Reading a large file (1000+ lines):** ~5,000-10,000 tokens
- **Comprehensive response from Claude:** ~2,000-5,000 tokens
- **Code review session:** ~20,000-50,000 tokens

### 3. **Save Progress Frequently**
Commit to git every few tasks:
```bash
git add .
git commit -m "feat: description of what you just did"
git push
```

---

## 🛠️ Workarounds & Best Practices

### Strategy #1: Be Specific and Concise
**Instead of:**
```
"Can you look at my entire codebase and tell me everything
that could be improved and then fix all of it?"
```

**Try:**
```
"Review script.js lines 500-600 and fix the comparison bug"
```

**Why:** Reduces tokens by only reading what's needed.

---

### Strategy #2: Use Multiple Sessions
**Break large projects into sessions:**
- Session 1: Bug fixes (40k tokens used)
- Session 2: New features (60k tokens used)
- Session 3: Documentation (30k tokens used)

**Each session gets fresh 200k tokens!**

---

### Strategy #3: Create Documentation Files
**Why this helps:**
- Persists between sessions
- Lets you start new sessions quickly
- Reduces need to re-explain context

**Files we created for this:**
- `SESSION_SUMMARY.md` - What we accomplished
- `TODO.md` - What's left to do
- `CHANGELOG.md` - Version history
- `CODE_REVIEW.md` - Code analysis

**In next session, just say:**
```
"Read SESSION_SUMMARY.md and TODO.md, then help me
implement the next Priority 3 task"
```

This uses ~5k tokens vs. explaining everything (30k+ tokens).

---

### Strategy #4: Work in Increments
**Bad approach (uses lots of tokens):**
```
1. Read entire codebase
2. Implement 10 features
3. Write documentation
4. Fix all bugs
(All in one session = high token usage)
```

**Good approach:**
```
Session 1: Fix critical bugs only
Session 2: Add input validation
Session 3: Implement pagination
Session 4: Documentation updates
(Each session = manageable token usage)
```

---

### Strategy #5: Close and Restart Strategically
**When to start a new session:**
- ✅ After completing a major milestone (commit first!)
- ✅ When switching to a completely different task
- ✅ If you see you've used >150k tokens (50k remaining)
- ✅ When you realize the conversation is getting cluttered

**How to restart effectively:**
1. Commit your changes: `git add . && git commit -m "..."`
2. Update SESSION_SUMMARY.md or TODO.md
3. Close chat
4. Start new chat
5. Say: "Read SESSION_SUMMARY.md and help me with..."

---

## 🔄 Model Switching (Like Cursor)

### Can You Switch Models in Claude Code?
**Short answer:** Not directly like Cursor.

**However, you can:**

1. **Use Claude.ai Web Interface** (different quota)
   - Go to https://claude.ai
   - Separate usage limit
   - Good for planning/questions
   - Then implement in Claude Code

2. **Use API Directly** (if you have API access)
   - claude-3-opus (most capable, most expensive)
   - claude-3-sonnet (balanced, what Claude Code uses)
   - claude-3-haiku (faster, cheaper, less capable)

3. **Alternate Tools**
   - Cursor (has model switching: GPT-4, Claude, etc.)
   - GitHub Copilot (different pricing model)
   - Mix and match based on task

---

## 💰 Pricing & Limits Comparison

### Claude Code vs. Cursor vs. Copilot

| Tool          | Model Options | Usage Limits | Price |
|---------------|---------------|--------------|-------|
| **Claude Code** | Claude Sonnet 4.5 | 200k tokens/session, resets 5am | Free (beta) or Pro plan |
| **Cursor** | GPT-4, Claude, GPT-3.5 | 500 requests/month (Pro) | $20/month |
| **GitHub Copilot** | GPT-4 (Copilot Chat) | Unlimited completions | $10/month |

**Recommendation:**
- **Quick coding:** GitHub Copilot (autocomplete)
- **Complex refactoring:** Claude Code (deep understanding)
- **Flexibility:** Cursor (switch models based on task)
- **Best value:** Use all three for different purposes!

---

## 🎓 Advanced Tips

### Tip #1: Pre-read Files You'll Need
At the start of a session:
```
"I'm going to work on the pagination feature. Please read:
- script.js (lines 500-800)
- index.html (lines 100-200)
- styles.css (lines 400-500)
Then wait for my next instruction."
```

This loads context upfront, then you can ask questions without re-reading.

---

### Tip #2: Use `.claudeignore` (if available)
Create a `.claudeignore` file:
```
node_modules/
dist/
build/
*.min.js
*.log
```

Prevents Claude from wasting tokens on files you don't care about.

---

### Tip #3: Ask for Summaries Instead of Full Rewrites
**Expensive (uses lots of tokens):**
```
"Rewrite my entire 2000-line script.js file"
```

**Cheaper:**
```
"Tell me the 5 changes needed in script.js,
I'll make them myself"
```

**Even better:**
```
"Show me only the changed sections with before/after"
```

---

### Tip #4: Batch Related Tasks
**Instead of:**
```
Message 1: "Add email validation"
Message 2: "Add search sanitization"
Message 3: "Add error handling"
(Multiple back-and-forth = token waste)
```

**Do this:**
```
"Add email validation, search sanitization,
and error handling to the forms. Here's what I need..."
(One comprehensive request = more efficient)
```

---

## 📅 Daily Usage Strategy

### Example Daily Workflow:

**Morning Session (5am - 9am)** - Fresh 200k tokens
- Major feature implementation
- Complex refactoring
- Comprehensive code reviews

**Afternoon Session (After you hit limit)** - New 200k tokens
- Bug fixes
- Documentation updates
- Testing and QA

**Evening Session** - New 200k tokens
- Plan tomorrow's work
- Review changes
- Small enhancements

---

## 🚨 Emergency: Session Ending Mid-Task

If you get the "Session limit reached" message:

1. **DON'T PANIC** - Your work is saved if committed
2. **Check git status:** `git status`
3. **If uncommitted changes:**
   ```bash
   git add .
   git commit -m "WIP: saving before session limit"
   git push
   ```
4. **Update TODO.md** with where you left off
5. **Start new session** and reference TODO.md

---

## 🎯 Optimal Session Structure

### Template for Maximum Efficiency:

```markdown
**Start of Session:**
1. "Read SESSION_SUMMARY.md and TODO.md"
2. "Today I want to: [specific goal]"
3. Get confirmation from Claude on approach

**During Session:**
4. Work on tasks in logical chunks
5. Commit after each completed task
6. Update TODO.md as you go

**Before Limit:**
7. When ~150k tokens used, start wrapping up
8. Commit final changes
9. Update SESSION_SUMMARY.md
10. Close session cleanly

**Token usage:**
- Step 1-3: ~10k tokens
- Step 4-6: ~120k tokens (bulk of work)
- Step 7-10: ~20k tokens (cleanup)
- Buffer: ~50k tokens remaining
```

---

## 📞 Getting Help

### If You're Unsure About Limits:
1. Check Claude Code documentation: https://docs.claude.com/claude-code
2. Ask at start of session: "How many tokens do we have?"
3. Monitor progress: Ask "How much usage remaining?"

### If You Run Out Too Quickly:
- Are you reading very large files repeatedly?
- Are you asking Claude to review entire codebase each time?
- Consider breaking work into smaller sessions

---

## ✅ Quick Reference Card

```
📊 LIMITS
- 200k tokens per session
- Resets 5am daily
- ~150k words equivalent

💡 SAVE TOKENS
✅ Read only needed file sections
✅ Use SESSION_SUMMARY.md for context
✅ Commit frequently
✅ Ask for specific changes, not full rewrites
✅ Close session when switching tasks

⚠️ RUNNING OUT?
1. Commit your work
2. Update docs
3. Start new session
4. Reference summary files

🎯 BEST PRACTICES
- Morning: Big tasks (fresh limit)
- Afternoon: Bug fixes (new limit)
- Always: Document progress
```

---

**Remember:** The limit resets at 5am, so you get fresh 200k tokens every day!

**Pro Tip:** Treat each session like a focused work sprint. Commit often, document progress, and start fresh when needed. You'll accomplish more with less frustration.
