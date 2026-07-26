#!/bin/bash

# Auto-deployment script for nanoestate.me
# This script watches for changes and automatically commits and pushes

REPO_DIR="/home/user/akoznam"
BRANCH="claude/website-qa-seo-optimization-xl7xz5"
LOG_FILE="/tmp/auto-deploy.log"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

log_message() {
    echo -e "${1}" >> $LOG_FILE
    echo -e "${1}"
}

# Change to repo directory
cd $REPO_DIR || exit 1

log_message "\n${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] Checking for changes...${NC}"

# Check git status
git fetch origin > /dev/null 2>&1

# Get status
STATUS=$(git status --porcelain)

if [ -z "$STATUS" ]; then
    log_message "${GREEN}✓ No changes detected - everything is up to date${NC}"
    exit 0
fi

log_message "${YELLOW}📝 Changes detected:${NC}"
echo "$STATUS" | sed 's/^/  /' >> $LOG_FILE

# Stage all changes
git add -A

# Create commit message with timestamp
COMMIT_MSG="Auto-deployment: Update from $(date '+%Y-%m-%d %H:%M:%S')

Changed files:
$(git diff --cached --name-only | sed 's/^/- /')

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011UPy372EYgd4H82h5hC9AX"

# Commit changes
if git commit -m "$COMMIT_MSG" >> $LOG_FILE 2>&1; then
    log_message "${GREEN}✓ Committed successfully${NC}"
else
    log_message "${RED}✗ Commit failed${NC}"
    exit 1
fi

# Push to remote
if git push -u origin $BRANCH >> $LOG_FILE 2>&1; then
    log_message "${GREEN}✓ Pushed to origin/$BRANCH successfully!${NC}"
    log_message "${GREEN}🚀 Deployment complete!${NC}"
else
    log_message "${RED}✗ Push failed - trying again...${NC}"
    sleep 2
    if git push -u origin $BRANCH >> $LOG_FILE 2>&1; then
        log_message "${GREEN}✓ Pushed successfully on retry!${NC}"
    else
        log_message "${RED}✗ Push failed - please check manually${NC}"
        exit 1
    fi
fi

log_message "${GREEN}========================================${NC}\n"
