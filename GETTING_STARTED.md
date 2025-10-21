# Getting Started Guide
## AI Intelligence Hub - Beginner's Guide

Welcome! This guide will help you understand and work with this codebase, even if you're new to web development or this project.

---

## Table of Contents

1. [What Is This Project?](#what-is-this-project)
2. [How to View It](#how-to-view-it)
3. [Project Structure](#project-structure)
4. [Understanding the Code](#understanding-the-code)
5. [Making Changes](#making-changes)
6. [Common Tasks](#common-tasks)
7. [Glossary](#glossary)

---

## What Is This Project?

**AI Intelligence Hub** is a website that helps people discover and compare AI tools. Think of it like a "shopping catalog" for AI software.

### Key Features:
- **Browse AI Tools:** See 40+ different AI tools (ChatGPT, DALL-E, etc.)
- **Filter & Search:** Find tools by category, price, or features
- **Compare Tools:** Put tools side-by-side to see which is better
- **Vibe Selection:** Choose your mood and get tool recommendations
- **Community Features:** Save favorites, write reviews, bookmark tools

### Technology Used:
- **HTML** - The structure (like the skeleton of a house)
- **CSS** - The styling (like paint and decoration)
- **JavaScript** - The functionality (like electricity that makes things work)

**No frameworks!** This project uses "vanilla" (plain) JavaScript, which makes it simpler to understand.

---

## How to View It

### Option 1: Simple Double-Click (Easiest)
1. Find the file called `index.html` in your folder
2. Double-click it
3. It opens in your web browser
4. Done! You're viewing the website

### Option 2: Using a Local Server (Better for Development)
If you have VS Code installed:

1. **Install "Live Server" Extension:**
   - Open VS Code
   - Click Extensions icon (4 squares on left sidebar)
   - Search for "Live Server"
   - Click Install

2. **Run the Server:**
   - Right-click on `index.html`
   - Choose "Open with Live Server"
   - Your browser opens automatically
   - Changes you make auto-refresh!

### Option 3: Using Python (If you have it)
```bash
# In your terminal/command prompt:
cd /path/to/ai-video-generation-directory
python -m http.server 8000

# Then open: http://localhost:8000
```

---

## Project Structure

Your project has these files:

```
ai-video-generation-directory/
│
├── index.html          ← The web page structure
├── styles.css          ← All the colors, fonts, layouts
├── script.js           ← All the interactive functionality
│
├── CODE_REVIEW.md      ← Detailed code analysis (this was just created!)
├── GETTING_STARTED.md  ← This file you're reading
├── TODO.md             ← List of fixes needed
├── README.md           ← Project overview
│
├── .git/               ← Git version control (hidden folder)
└── .gitignore          ← Files git should ignore
```

### Understanding Each File:

#### 📄 `index.html` (389 lines)
**What it is:** The skeleton of your website
**What it does:** Defines the structure - headers, sections, buttons, cards

**Think of it like:** A blueprint of a house showing where rooms go

**Key sections:**
- Lines 1-14: Setup (meta tags, links to CSS/JS)
- Lines 15-389: Page structure (header, hero, filters, tools grid, footer)

#### 🎨 `styles.css` (1,646 lines)
**What it is:** All visual styling
**What it does:** Makes things look pretty - colors, spacing, animations

**Think of it like:** Paint, wallpaper, and furniture in the house

**Key sections:**
- Lines 1-31: CSS Variables (color definitions you can reuse)
- Lines 32-500: Global styles (fonts, resets, base styles)
- Lines 501-1000: Component styles (cards, buttons, filters)
- Lines 1001-1646: Layout & responsive design

#### ⚙️ `script.js` (1,753 lines)
**What it is:** The brain of your website
**What it does:** Makes things interactive - clicking, filtering, searching

**Think of it like:** The electrical and plumbing systems that make the house work

**Key sections:**
```
Lines 7-527:    AI Tools Database (all the tool data)
Lines 529-609:  Workflow & Vibe Definitions
Lines 612-640:  App State (remembers what's selected/filtered)
Lines 642-746:  Initialization (sets everything up)
Lines 748-858:  Card Creation (builds tool cards)
Lines 860-984:  Search & Filter Logic
Lines 1005-1200: Comparison Feature
Lines 1201-1364: Workflow Recommendations
Lines 1365-1600: Modal Windows (popups)
Lines 1601-1753: Community Features (favorites, reviews)
```

---

## Understanding the Code

### How Everything Connects

```
┌─────────────────────────────────────┐
│  1. User Opens Browser              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  2. Browser Loads index.html        │
└──────────────┬──────────────────────┘
               │
               ├──→ Loads styles.css (makes it pretty)
               └──→ Loads script.js (makes it interactive)
                            │
                            ▼
┌─────────────────────────────────────┐
│  3. JavaScript Starts               │
│     - Loads AI tools database       │
│     - Sets up event listeners       │
│     - Displays initial tools        │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  4. User Interacts                  │
│     - Clicks filter                 │
│     - Types in search               │
│     - Selects vibe                  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  5. JavaScript Responds             │
│     - Filters tools                 │
│     - Updates display               │
│     - Shows results                 │
└─────────────────────────────────────┘
```

### Key Concepts Explained

#### 1. **The Database (Lines 7-527 in script.js)**

This is where all AI tool information lives:

```javascript
const aiToolsDatabase = [
    {
        id: 'chatgpt',              // Unique identifier
        name: 'ChatGPT',            // Display name
        company: 'OpenAI',          // Who makes it
        primaryCategory: 'text-generation',  // What it does
        pricing: {                  // How much it costs
            model: 'freemium',      // Free + paid options
            monthlyCost: 20,        // $20/month for premium
            freeTier: true          // Has free version
        },
        // ... lots more info
    },
    // ... 40+ more tools
];
```

**What you can do:**
- Add new tools by copying this format
- Edit existing tool information
- Remove outdated tools

#### 2. **App State (Lines 612-640 in script.js)**

This is the "memory" of what the user has selected:

```javascript
const appState = {
    selectedVibe: null,           // Which vibe is selected? (null = none)
    searchTerm: '',               // What did user search for?
    filters: {
        category: 'all',          // Which category filter?
        useCase: 'all',           // Which use case?
        pricing: 'all',           // Which pricing filter?
        sortBy: 'popularity'      // How to sort results?
    },
    comparisonTools: [],          // Which tools are being compared?
    favoriteTools: [],            // User's favorite tools
    bookmarkedWorkflows: []       // User's saved workflows
};
```

**Think of it like:** The app's short-term memory

**What happens:**
1. User clicks "Free Only" filter
2. `appState.filters.pricing` changes to `'free'`
3. Display updates to show only free tools

#### 3. **Event Listeners (Throughout script.js)**

These "listen" for user actions and respond:

```javascript
// When user clicks a vibe card
vibeCards.forEach(card => {
    card.addEventListener('click', () => {
        selectVibe(card.dataset.vibe);  // Run this function
    });
});
```

**Common events:**
- `click` - User clicks something
- `input` - User types in a field
- `change` - User selects from dropdown
- `submit` - User submits a form

#### 4. **DOM Manipulation**

"DOM" = Document Object Model = The web page structure

**Creating elements:**
```javascript
// JavaScript creates HTML elements:
const card = document.createElement('div');  // Make a <div>
card.className = 'tool-card';                // Add class
card.textContent = 'ChatGPT';                // Add text

// Add it to page:
document.body.appendChild(card);             // Now it's visible!
```

**Finding elements:**
```javascript
// Find one element:
const header = document.querySelector('header');

// Find all matching elements:
const allCards = document.querySelectorAll('.tool-card');
```

---

## Making Changes

### Before You Start

**ALWAYS:**
1. Save a backup (or use git - see below)
2. Test in browser after each change
3. Use browser DevTools (F12) to check for errors

### Safe Changes for Beginners

#### ✅ Change 1: Update a Tool's Information

**File:** `script.js`
**Lines:** 7-527 (in the database)

```javascript
// Find the tool (e.g., ChatGPT on line 9)
{
    id: 'chatgpt',
    name: 'ChatGPT',
    company: 'OpenAI',
    description: 'Advanced AI chatbot...',  // ← Change this text
    pricing: {
        monthlyCost: 20  // ← Change this number
    }
}
```

**What happens:** The tool card will show your new text/price.

---

#### ✅ Change 2: Update Colors

**File:** `styles.css`
**Lines:** 8-31 (CSS variables)

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /*                                   ↑ Start color  ↑ End color */

    --success-color: #10b981;  /* ← Change to any hex color */
}
```

**Color picker:** Use [Coolors.co](https://coolors.co) to find nice colors

**What happens:** The entire site's color scheme updates automatically!

---

#### ✅ Change 3: Add a New Tool to the Database

**File:** `script.js`
**Location:** After line 527 (end of database array)

**Steps:**
1. Copy an existing tool object (e.g., lines 9-33)
2. Paste it at the end before the closing `]`
3. Change all the values to your new tool
4. Make sure to add a comma after the previous tool

```javascript
const aiToolsDatabase = [
    // ... existing tools ...
    {
        id: 'runway-gen2',
        name: 'Runway Gen-2',
        // ... rest of tool
    },  // ← Don't forget this comma!
    {
        // Your new tool here!
        id: 'my-new-tool',        // Must be unique, lowercase, hyphens
        name: 'My New Tool',
        company: 'Cool Company',
        primaryCategory: 'text-generation',
        // ... copy the rest of the structure
    }
];
```

---

#### ⚠️ Medium Difficulty: Fix the Critical Bugs

See `TODO.md` for step-by-step instructions on the 3 critical bugs that need fixing.

---

### Using Git for Version Control

**Git** is like a "save game" system for your code. You can try changes and revert if something breaks!

#### Basic Git Commands:

```bash
# See what you changed:
git status

# See differences in detail:
git diff

# Save your changes:
git add .
git commit -m "describe what you changed"

# Upload to GitHub/remote:
git push

# Undo changes (careful!):
git checkout -- filename.js  # Undo changes to one file
git reset --hard             # Undo ALL changes (dangerous!)
```

#### Safe Workflow:

```bash
# 1. Create a new branch for your changes:
git checkout -b my-changes

# 2. Make your edits...

# 3. Test in browser

# 4. If it works, commit:
git add .
git commit -m "added new AI tool and fixed pricing display"

# 5. Push to remote:
git push -u origin my-changes

# 6. If you want to merge into main branch later:
git checkout main
git merge my-changes
```

---

## Common Tasks

### Task 1: Add a New AI Tool

**Difficulty:** ⭐⭐ (Easy-Medium)
**Time:** 10 minutes
**Files:** `script.js`

1. Open `script.js`
2. Find the `aiToolsDatabase` array (starts line 7)
3. Scroll to the end (around line 527)
4. Copy the last complete tool object
5. Paste it before the closing `]`
6. Update all fields with new tool info:
   - Change `id` (must be unique!)
   - Change `name`, `company`, `description`
   - Update `pricing`, `performance`, etc.
7. Save file
8. Refresh browser
9. Search for your tool name - should appear!

**Pro tip:** Use the complex schema format (like ChatGPT) for consistency.

---

### Task 2: Change the Color Scheme

**Difficulty:** ⭐ (Very Easy)
**Time:** 5 minutes
**Files:** `styles.css`

1. Open `styles.css`
2. Find the `:root` section (lines 8-31)
3. Change the color values:
   ```css
   --primary-gradient: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
   ```
4. Save and refresh browser

**Color resources:**
- [Coolors.co](https://coolors.co) - Color palette generator
- [ColorHunt.co](https://colorhunt.co) - Curated palettes
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Check readability

---

### Task 3: Fix the Comparison Bug

**Difficulty:** ⭐⭐ (Easy)
**Time:** 2 minutes
**Files:** `script.js`

See the detailed instructions in `CODE_REVIEW.md` under "Critical Bugs" section, or check `TODO.md` for step-by-step guide.

---

### Task 4: Add a New Category Filter

**Difficulty:** ⭐⭐⭐ (Medium)
**Time:** 15 minutes
**Files:** `index.html`, `script.js`

1. **Add filter option to HTML:**
   ```html
   <!-- Find the category dropdown (around line 85 in index.html) -->
   <select id="category-filter">
       <option value="all">All Categories</option>
       <!-- Add your new category: -->
       <option value="your-new-category">Your New Category</option>
   </select>
   ```

2. **Update tools with new category:**
   ```javascript
   // In script.js database, add to relevant tools:
   {
       id: 'some-tool',
       primaryCategory: 'your-new-category',  // or add to subcategories
       // ... rest of tool
   }
   ```

3. Save, refresh, and test the filter!

---

### Task 5: Change How Many Tools Show Per Row

**Difficulty:** ⭐⭐ (Easy)
**Time:** 2 minutes
**Files:** `styles.css`

1. Find `.tools-grid` class (search for "tools-grid" in styles.css)
2. Change the `minmax` value:
   ```css
   .tools-grid {
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
       /*                                              ↑ Change this */
       /*
          Smaller number = more cards per row (e.g., 250px)
          Larger number = fewer cards per row (e.g., 400px)
       */
   }
   ```

---

## Glossary

**Terms you'll see in the code:**

### HTML Terms

| Term | What It Means | Example |
|------|---------------|---------|
| **Element** | A building block of HTML | `<div>`, `<button>`, `<p>` |
| **Tag** | The angle brackets thing | `<div>` is an opening tag, `</div>` is closing |
| **Attribute** | Extra info on an element | `<div class="card" id="main">` |
| **Class** | Reusable style identifier | `class="tool-card"` |
| **ID** | Unique identifier | `id="search-input"` |

### CSS Terms

| Term | What It Means | Example |
|------|---------------|---------|
| **Selector** | What you're styling | `.tool-card` or `#header` |
| **Property** | What aspect to style | `color`, `font-size`, `margin` |
| **Value** | The setting for property | `red`, `16px`, `2rem` |
| **Class Selector** | Starts with `.` | `.tool-card` matches `class="tool-card"` |
| **ID Selector** | Starts with `#` | `#header` matches `id="header"` |

### JavaScript Terms

| Term | What It Means | Example |
|------|---------------|---------|
| **Variable** | A container for data | `const name = 'ChatGPT';` |
| **Function** | A reusable block of code | `function doSomething() { }` |
| **Array** | A list of items | `[1, 2, 3]` or `['a', 'b', 'c']` |
| **Object** | A collection of properties | `{ name: 'ChatGPT', price: 20 }` |
| **Event** | Something the user does | Click, type, scroll |
| **Event Listener** | Watches for events | `button.addEventListener('click', ...)` |
| **DOM** | The web page structure | Document Object Model |
| **Query Selector** | Find elements in DOM | `document.querySelector('.card')` |

### Git Terms

| Term | What It Means |
|------|---------------|
| **Repository (Repo)** | Your project folder tracked by git |
| **Commit** | A saved snapshot of your code |
| **Branch** | An alternate version of your code |
| **Push** | Upload commits to GitHub/remote |
| **Pull** | Download commits from GitHub/remote |
| **Merge** | Combine two branches |
| **Clone** | Download a repository |

### General Programming Terms

| Term | What It Means |
|------|---------------|
| **Comment** | Notes in code (ignored by browser) |
| **Bug** | An error in the code |
| **Debug** | Find and fix bugs |
| **Syntax** | The grammar rules of code |
| **Logic** | The thinking behind the code |
| **Frontend** | What users see (HTML/CSS/JS) |
| **Backend** | Server, database (not in this project) |
| **API** | Way for programs to talk to each other |

---

## Using Browser Developer Tools

**Press F12** (or right-click → Inspect) to open DevTools.

### Console Tab
See errors and log messages:
```javascript
console.log('Hello!');  // Prints "Hello!" in console
console.error('Oops!'); // Prints error message
```

### Elements Tab
- See HTML structure
- Edit HTML/CSS live
- See what styles apply to elements

### Network Tab
- See what files are loading
- Check for errors (red items)

### Sources Tab
- See your JavaScript files
- Add breakpoints to pause code
- Step through code line by line

---

## Learning Resources

### Beginner-Friendly:

1. **HTML/CSS:**
   - [MDN Web Docs - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
   - [MDN Web Docs - CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
   - [CSS-Tricks](https://css-tricks.com/)

2. **JavaScript:**
   - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
   - [JavaScript.info](https://javascript.info/)
   - [FreeCodeCamp](https://www.freecodecamp.org/)

3. **Git:**
   - [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
   - [GitHub Guides](https://guides.github.com/)

4. **This Project Specifically:**
   - Read `CODE_REVIEW.md` for detailed analysis
   - Check `TODO.md` for tasks to practice on

---

## Getting Help

### When You're Stuck:

1. **Check the Console (F12):**
   - Red text = errors
   - Read the error message
   - Note the line number

2. **Use Comments to Debug:**
   ```javascript
   console.log('Step 1 reached');
   console.log('Variable value:', myVariable);
   ```

3. **Search for Errors:**
   - Copy the error message
   - Google it
   - Check Stack Overflow

4. **Ask Claude Code:**
   - Describe the problem
   - Share the error message
   - Ask for explanation or fix

5. **Revert Your Changes:**
   ```bash
   git checkout -- filename.js  # Undo changes
   ```

---

## Next Steps

### As a Beginner:

**Week 1:**
1. ✅ Read this guide
2. ✅ Open the project in browser
3. ✅ Open F12 DevTools and explore
4. ✅ Try changing a color in CSS
5. ✅ Read `CODE_REVIEW.md` (at least Executive Summary)

**Week 2:**
6. Try editing a tool's description
7. Fix one of the critical bugs from `TODO.md`
8. Add a new tool to the database

**Week 3:**
9. Create a new branch with git
10. Make a bigger change (new feature or styling)
11. Commit and push your changes

**Month 2:**
12. Work through the TODO list
13. Add a new feature
14. Learn about JavaScript modules

---

## Tips for Success

### 💡 General Tips:

1. **Start Small:**
   - Don't try to rewrite everything
   - Make one small change at a time
   - Test after each change

2. **Read Before Writing:**
   - Understand existing code first
   - See how similar features work
   - Copy patterns that already exist

3. **Use Comments:**
   ```javascript
   // This function filters tools by category
   function filterByCategory(category) {
       // ...
   }
   ```

4. **Test Frequently:**
   - Save and refresh browser constantly
   - Check console for errors
   - Click around to make sure it works

5. **Don't Fear Breaking Things:**
   - You have git to undo
   - Breaking is how you learn
   - Backup before big changes

6. **Ask Questions:**
   - No question is too basic
   - Better to ask than guess wrong
   - Use Claude Code, forums, Discord servers

### 🎯 Project-Specific Tips:

1. **Understand the Data Flow:**
   - Database → Filter → Display
   - User clicks → Update state → Re-render

2. **Follow Existing Patterns:**
   - See how other tools are structured
   - Copy the working code format
   - Be consistent

3. **Work on TODO Items:**
   - Start with Priority 1 (critical bugs)
   - They're designed to be achievable
   - Each one teaches you something

4. **Read CODE_REVIEW.md:**
   - Lots of explanations
   - Shows you what's good and bad
   - Helps you understand "why"

---

## Congratulations!

You're now ready to start working with this codebase. Remember:
- **Take it slow**
- **Test often**
- **Ask for help**
- **Have fun learning!**

Happy coding! 🚀

---

**Document Version:** 1.0
**Last Updated:** 2025-10-21
**For Project:** AI Intelligence Hub
