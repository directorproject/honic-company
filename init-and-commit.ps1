# Run this AFTER installing Git. Right-click -> Run with PowerShell, or in terminal: .\init-and-commit.ps1
Set-Location $PSScriptRoot
git init
git add .
git commit -m "Initial commit: Honic Next.js site"
Write-Host "Done. Repo created and first commit made."
