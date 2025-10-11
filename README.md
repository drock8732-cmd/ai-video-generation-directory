# Workspace setup and health check

This workspace was prepared with a minimal set of files to help you verify your environment and debug GitHub Copilot access.

What I added:

- `.vscode/extensions.json` — recommended extensions (Copilot)
- `.vscode/settings.json` — minimal settings
- `.vscode/tasks.json` — task to run the workspace health-check
- `workspace-check.ps1` — PowerShell script that checks Git, Node, Python, and whether the Copilot extension is installed (via `code --list-extensions`)
- `.gitignore` — sensible defaults

How to run the health check (PowerShell / pwsh):

```powershell
pwsh ./workspace-check.ps1
```

If you want me to also initialize a project (Node/Python/.NET etc.), tell me which language and I'll initialize `package.json` or `pyproject.toml` and install common dev tools.

Copilot troubleshooting quick steps:

1. In VS Code, make sure you're signed in to the same GitHub account that has Copilot Pro (Accounts menu).
2. Open Command Palette and run: `GitHub Copilot: Sign in` (or `> Copilot: Sign in`).
3. Reload VS Code after sign-in and check the Copilot icon in the status bar.
4. If models still don't appear, run the health-check above and share the output.
