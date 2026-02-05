# Run this in PowerShell from startup-next folder (where git is in PATH)
# Remote origin is already set to https://github.com/directorproject/honic-company.git

Set-Location $PSScriptRoot

git add README.md
git status -s
git commit -m "docs: add honic-company title to README" 2>$null
git branch -M main
git push -u origin main
