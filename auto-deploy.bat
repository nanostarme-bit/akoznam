@echo off
REM Auto-deployment script for Windows
REM This script watches for changes and automatically commits and pushes

setlocal enabledelayedexpansion

set REPO_DIR=C:\path\to\akoznam
set BRANCH=claude/website-qa-seo-optimization-xl7xz5
set LOG_FILE=%TEMP%\auto-deploy.log

REM Change to repo directory
cd /d "%REPO_DIR%" || exit /b 1

REM Add timestamp to log
echo. >> %LOG_FILE%
echo [%date% %time%] Checking for changes... >> %LOG_FILE%

REM Check git status
git fetch origin >nul 2>&1

REM Get status
git status --porcelain > temp_status.txt
set /p STATUS=<temp_status.txt
del temp_status.txt

if "!STATUS!"=="" (
    echo. >> %LOG_FILE%
    echo [%date%] No changes detected - everything is up to date >> %LOG_FILE%
    exit /b 0
)

REM Stage all changes
git add -A

REM Create commit
git commit -m "Auto-deployment: Update from %date% %time%" >> %LOG_FILE% 2>&1
if errorlevel 1 (
    echo Commit failed >> %LOG_FILE%
    exit /b 1
)

echo Committed successfully >> %LOG_FILE%

REM Push to remote
git push -u origin %BRANCH% >> %LOG_FILE% 2>&1
if errorlevel 1 (
    echo Push failed - retrying... >> %LOG_FILE%
    timeout /t 2
    git push -u origin %BRANCH% >> %LOG_FILE% 2>&1
    if errorlevel 1 (
        echo Push failed - please check manually >> %LOG_FILE%
        exit /b 1
    )
)

echo Pushed to origin/%BRANCH% successfully! >> %LOG_FILE%
echo Deployment complete! >> %LOG_FILE%
echo. >> %LOG_FILE%

endlocal
