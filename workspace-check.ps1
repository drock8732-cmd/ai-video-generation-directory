# Workspace health check script
# Checks for git, node, python, and (if available) VS Code extensions that mention copilot

Write-Host "Workspace health check" -ForegroundColor Cyan

function Check-Command($name, $cmd, $args) {
    $exe = Get-Command $cmd -ErrorAction SilentlyContinue
    if ($null -eq $exe) {
        Write-Host "$($name): NOT FOUND" -ForegroundColor Yellow
        return $false
    }
    try {
        $version = & $cmd $args 2>&1
        Write-Host "$($name): FOUND -> $($version)" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "$($name): FOUND but failed to run ($($_))" -ForegroundColor Yellow
        return $false
    }
}

# Check git
Check-Command "Git" git "--version"

# Check Node.js
Check-Command "Node" node "--version"

# Check Python (prefer py launcher then python)
if (Get-Command py -ErrorAction SilentlyContinue) {
    Check-Command "Python (py)" py "-3 --version"
} else {
    Check-Command "Python (python)" python "--version"
}

# Check VS Code CLI and Copilot extension listing
$code = Get-Command code -ErrorAction SilentlyContinue
if ($null -eq $code) {
    Write-Host "VS Code CLI (code) not found in PATH. Can't list installed extensions." -ForegroundColor Yellow
    Write-Host "If you have VS Code, enable 'Install code command in PATH' or run the check from a terminal that has 'code' available." -ForegroundColor DarkYellow
} else {
    try {
        $exts = & code --list-extensions 2>&1
        $copilotExts = $exts | Where-Object { $_ -match "copilot" }
        if ($copilotExts) {
            Write-Host "Installed extensions that mention 'copilot':" -ForegroundColor Green
            $copilotExts | ForEach-Object { Write-Host "  - $_" }
        } else {
            Write-Host "No installed extension matching 'copilot' was found via 'code --list-extensions'" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "Failed to query VS Code extensions: $_" -ForegroundColor Yellow
    }
}

Write-Host "\nNext manual checks to perform in VS Code:" -ForegroundColor Cyan
Write-Host " - Open Command Palette (Ctrl+Shift+P) and run: 'GitHub Copilot: Sign in'" -ForegroundColor White
Write-Host " - Confirm the account shown in the Accounts menu is the one with Copilot Pro" -ForegroundColor White
Write-Host " - Reload VS Code after sign-in and try an inline suggestion (type a comment or code)." -ForegroundColor White

Write-Host "\nIf Copilot models still don't appear, copy the output above and paste it in a reply so I can help further." -ForegroundColor Cyan
