# Development Guide

Complete guide for setting up and working on the AI Intelligence Hub project.

## Table of Contents

- [Quick Start](#quick-start)
- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Debugging](#debugging)
- [Common Tasks](#common-tasks)

---

## Quick Start

### For Complete Beginners

1. **Install Required Software**
   - [Git](https://git-scm.com/downloads)
   - [Node.js](https://nodejs.org/) (v18 or newer)
   - [VS Code](https://code.visualstudio.com/)

2. **Clone the Repository**
   ```bash
   git clone https://github.com/drock8732-cmd/ai-video-generation-directory.git
   cd ai-video-generation-directory
   ```

3. **Install Dependencies** (Optional - for linting and formatting)
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   OR if you don't want to install Node.js:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open: http://localhost:8000
   ```

5. **Open in VS Code**
   ```bash
   code .
   ```

---

## Development Environment

### Required Tools

| Tool | Purpose | Version |
|------|---------|---------|
| Git | Version control | Latest |
| Node.js | Dev tools (optional) | v18+ |
| VS Code | Code editor | Latest |
| Modern Browser | Testing | Chrome/Firefox/Edge |

### Recommended VS Code Extensions

Install these extensions for the best experience:

```bash
# Install all at once
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension ritwickdey.liveserver
code --install-extension formulahendry.auto-rename-tag
code --install-extension editorconfig.editorconfig
```

Or just open the project and VS Code will prompt you to install recommended extensions!

### VS Code Settings

The project includes workspace settings that will:
- Format code on save
- Fix ESLint errors automatically
- Use consistent line endings
- Trim trailing whitespace

---

## Project Structure

```
ai-video-generation-directory/
│
├── 📁 Core Files
│   ├── index.html              # Main HTML structure
│   ├── script.js               # JavaScript logic (1,753 lines)
│   ├── styles.css              # All CSS styling (1,646 lines)
│   └── constants.js            # Configuration constants (NEW!)
│
├── 📁 Documentation
│   ├── README.md               # Project overview
│   ├── BEST_PRACTICES.md       # Coding standards (NEW!)
│   ├── DEVELOPMENT.md          # This file (NEW!)
│   ├── CONTRIBUTING.md         # How to contribute
│   ├── CODE_REVIEW.md          # Code analysis
│   ├── TODO.md                 # Task list
│   └── GETTING_STARTED.md      # For new developers
│
├── 📁 Configuration
│   ├── package.json            # Dependencies & scripts (NEW!)
│   ├── .eslintrc.json          # ESLint config (NEW!)
│   ├── .prettierrc.json        # Prettier config (NEW!)
│   ├── .editorconfig           # Editor config (NEW!)
│   └── .gitignore              # Git ignore rules (UPDATED!)
│
└── 📁 VS Code Settings
    └── .vscode/
        ├── extensions.json     # Recommended extensions (NEW!)
        └── settings.json       # Workspace settings (NEW!)
```

### Understanding script.js

The main JavaScript file is organized as follows:

```
script.js (1,753 lines)
│
├── Lines 1-788      AI Tools Database (33 tools)
├── Lines 789-1135   Workflow Templates (15 workflows)
├── Lines 1136-1167  Vibe Categories Configuration
├── Lines 1168-1189  Application State
├── Lines 1190-1218  DOM Element References
├── Lines 1202-1218  Initialization
├── Lines 1219-1488  Core Functions
├── Lines 1489-1670  Search & Filter Logic
├── Lines 1671-1817  Animation & Stats
├── Lines 1818-2003  Workflow System
├── Lines 2004-2280  Modal Management
├── Lines 2281-2536  Comparison System
├── Lines 2537-2620  Community Features
└── Lines 2621-2716  Export & Global Access
```

---

## Development Workflow

### Daily Workflow

```bash
# 1. Start your day
git pull origin main
git checkout -b feature/your-feature

# 2. Start development server
npm run dev

# 3. Make changes and test frequently
# (Use browser DevTools F12)

# 4. Before committing
npm run format      # Format code
npm run lint        # Check for errors
npm run validate    # Validate HTML/CSS

# 5. Commit your work
git add .
git commit -m "feat: description of what you did"
git push origin feature/your-feature
```

### Testing Your Changes

Always test these before committing:

1. **Visual Check**
   - Does it look right?
   - Is it responsive? (F12 → Toggle Device Toolbar)

2. **Functionality Check**
   - Search works
   - Filters apply
   - Tools display
   - Modals open/close
   - No console errors (F12)

3. **Browser Check**
   - Test in Chrome/Edge
   - Test in Firefox (if possible)

### Making Changes

#### Adding a New Tool

1. Open `script.js`
2. Find `aiToolsDatabase` array (line 7)
3. Add your tool object (copy existing tool for structure)
4. Test that it appears in the grid
5. Commit: `git commit -m "feat(tools): add [ToolName]"`

#### Modifying Styles

1. Open `styles.css`
2. Find the relevant section (use Ctrl+F)
3. Make your changes
4. Test in browser
5. Check responsiveness
6. Commit: `git commit -m "style: update [component] styling"`

#### Adding Features

1. Plan your feature
2. Update `TODO.md` with your plan
3. Make small, incremental commits
4. Test after each change
5. Document your code with comments

---

## Code Quality

### Running Quality Checks

```bash
# Check code style
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Format all code
npm run format

# Check formatting without changes
npm run format:check

# Validate HTML
npm run validate:html

# Run all checks
npm run validate
```

### Code Style Rules

The project uses:
- **ESLint** - Catches errors and enforces rules
- **Prettier** - Formats code consistently
- **EditorConfig** - Ensures editor consistency

Your code should:
- Use single quotes for strings
- Use 2-space indentation
- End statements with semicolons
- Use `const` and `let` (not `var`)
- Have no trailing whitespace

### Before Committing

Always run:
```bash
npm run format    # Format code
npm run lint      # Check for errors
```

Or configure your editor to do this automatically on save!

---

## Testing

### Manual Testing

Currently, the project uses manual testing. Test these features:

#### Core Features
- [ ] **Search**: Type in search box, tools filter correctly
- [ ] **Category Filter**: Select category, tools filter
- [ ] **Pricing Filter**: Select pricing, tools filter
- [ ] **Use Case Filter**: Select use case, tools filter
- [ ] **Sort**: Change sort order, tools reorder

#### Tool Features
- [ ] **Tool Cards**: Display correctly with logo, name, description
- [ ] **View Tool**: Click tool, modal opens with details
- [ ] **Comparison**: Add 3 tools, comparison table shows data
- [ ] **Calculator**: Add tools, cost calculates correctly

#### Workflow Features
- [ ] **Vibe Cards**: Click vibe, tools filter by vibe
- [ ] **Workflow Cards**: Click workflow, modal opens
- [ ] **Workflow Steps**: Checkboxes work in workflow modal

#### UI/UX
- [ ] **Responsive**: Works on mobile, tablet, desktop
- [ ] **Modals**: Open and close correctly
- [ ] **Buttons**: All buttons work
- [ ] **Forms**: Newsletter form validates email

### Browser Console

Check for errors:
```
1. Press F12
2. Click "Console" tab
3. Look for red errors
4. Fix any you find
```

### Performance Testing

Use Chrome DevTools Lighthouse:
```
1. Press F12
2. Click "Lighthouse" tab
3. Click "Analyze page load"
4. Review results
5. Fix issues if score < 90
```

---

## Debugging

### Common Issues

#### "Script.js not loading"
```bash
# Check file path in index.html
<script src="script.js"></script>

# Check browser console (F12)
# Look for 404 errors
```

#### "Styles not applying"
```bash
# Check file path in index.html
<link rel="stylesheet" href="styles.css">

# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

#### "Function not defined"
```bash
# Check if function is declared before being called
# Check spelling (case-sensitive!)
# Check browser console for errors
```

### Browser DevTools

#### Console Tab
```javascript
// Test functions directly
filterTools(aiToolsDatabase, 'text-generation');

// Inspect variables
console.log(appState);

// Check DOM elements
console.log(document.getElementById('modelsGrid'));
```

#### Elements Tab
- Inspect HTML structure
- Test CSS changes live
- Check computed styles
- Debug layout issues

#### Network Tab
- Check for 404 errors
- Monitor load times
- Inspect external resources

#### Sources Tab
- Set breakpoints
- Step through code
- Inspect variables during execution

### Debugging Tips

1. **Use console.log liberally**
   ```javascript
   console.log('filterTools called with:', category, pricing);
   ```

2. **Check function inputs**
   ```javascript
   function myFunction(param) {
     console.log('Input:', param);
     if (!param) {
       console.error('Invalid input!');
       return;
     }
     // ... rest of function
   }
   ```

3. **Add error handling**
   ```javascript
   try {
     // Your code
   } catch (error) {
     console.error('Error occurred:', error);
   }
   ```

---

## Common Tasks

### Adding a New AI Tool

```javascript
// 1. Open script.js
// 2. Find aiToolsDatabase array
// 3. Add new tool object:

{
  id: 'tool-name',
  name: 'Tool Name',
  company: 'Company',
  logo: '🤖',
  primaryCategory: 'text-generation',
  subcategories: ['writing', 'coding'],
  useCases: ['writing', 'coding'],
  pricing: { 
    model: 'freemium', 
    monthlyCost: 20, 
    freeTier: true 
  },
  performance: { 
    quality: 9.0, 
    speed: 8.5, 
    consistency: 9.0, 
    reliability: 9.2 
  },
  userExperience: { 
    learningCurve: 'beginner', 
    interface: 'intuitive', 
    documentation: 'excellent', 
    support: 'responsive' 
  },
  analytics: { 
    popularity: 85, 
    growth: '+15%', 
    lastUpdated: '2024-01-15', 
    launchDate: '2023-01-01' 
  },
  community: { 
    rating: 4.5, 
    reviewCount: 1000, 
    sentiment: 'positive' 
  },
  description: 'Description of the tool',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  capabilities: { 
    inputTypes: ['text'], 
    outputTypes: ['text'], 
    integrations: ['api'], 
    platforms: ['web', 'mobile'] 
  },
  vibeAlignment: { 
    creative: 8, 
    productive: 9, 
    explorative: 7, 
    relaxed: 8 
  },
  roiScore: 3500,
  website: 'https://tool-website.com'
}

// 4. Save and test
// 5. Commit: git commit -m "feat(tools): add [Tool Name]"
```

### Adding a New Workflow

```javascript
// 1. Open script.js
// 2. Find workflowTemplates object
// 3. Find or create category array
// 4. Add new workflow:

{
  id: 'workflow-id',
  name: 'Workflow Name',
  description: 'What this workflow accomplishes',
  category: 'content-creation',
  difficulty: 'beginner',
  estimatedTime: 120, // minutes
  totalCost: 45, // monthly USD
  tools: ['chatgpt', 'grammarly', 'notion-ai'],
  steps: [
    'Step 1 description',
    'Step 2 description',
    'Step 3 description'
  ],
  benefits: {
    timeSaved: '10 hours/week',
    costSavings: 500,
    outputQuality: 'Professional',
    consistency: 'High'
  }
}

// 5. Save and test
// 6. Commit: git commit -m "feat(workflows): add [Workflow Name]"
```

### Creating a New Feature

```bash
# 1. Create a branch
git checkout -b feature/my-feature

# 2. Update TODO.md with your plan

# 3. Break down into small tasks

# 4. Implement one task at a time

# 5. Test after each task

# 6. Commit frequently
git add .
git commit -m "feat: implement [specific part]"

# 7. Push when done
git push origin feature/my-feature

# 8. Create Pull Request on GitHub
```

### Fixing a Bug

```bash
# 1. Create a branch
git checkout -b fix/bug-description

# 2. Reproduce the bug
# 3. Add console.log to find the issue
# 4. Fix the bug
# 5. Test that it's fixed
# 6. Test that nothing else broke

# 7. Commit
git commit -m "fix: resolve [bug description]"

# 8. Push
git push origin fix/bug-description
```

---

## Getting Help

### Resources

- **README.md** - Project overview
- **BEST_PRACTICES.md** - Coding standards
- **CODE_REVIEW.md** - Code analysis
- **GETTING_STARTED.md** - New developer guide

### Community

- **GitHub Issues** - Report bugs or ask questions
- **Pull Requests** - Submit your contributions

### AI Assistants

When working with Claude Code or Bolt.ai:

1. **Be Specific**
   - "Add pagination that shows 12 tools per page"
   - Not "Make it better"

2. **Provide Context**
   - Share relevant file sections
   - Explain what you're trying to achieve
   - Mention what you've already tried

3. **Review AI Code**
   - Always test generated code
   - Check for errors
   - Ensure it follows project style

---

## Next Steps

1. ✅ Read this guide
2. ⬜ Set up your development environment
3. ⬜ Run the project locally
4. ⬜ Make a small change and test it
5. ⬜ Read BEST_PRACTICES.md
6. ⬜ Pick a task from TODO.md
7. ⬜ Start contributing!

---

**Happy coding!** 🚀

If you have questions or suggestions for improving this guide, please open an issue!
