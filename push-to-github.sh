#!/bin/bash
# ============================================================
# Carter Digitals — GitHub Upload Script
# ============================================================
# Usage:
#   1. Create a GitHub Personal Access Token (PAT) at:
#      https://github.com/settings/tokens/new
#      → Select "repo" scope (full control of private repos)
#   2. Run this script with your PAT:
#      ./push-to-github.sh YOUR_GITHUB_USERNAME YOUR_PAT
#
#   Example:
#      ./push-to-github.sh myusername ghp_xxxxxxxxxxxx
# ============================================================

set -e

USERNAME="${1:?Error: GitHub username required. Usage: ./push-to-github.sh USERNAME PAT}"
PAT="${2:?Error: GitHub PAT required. Usage: ./push-to-github.sh USERNAME PAT}"
REPO_NAME="carter-digitals"

echo "🚀 Carter Digitals — GitHub Upload"
echo "===================================="

# Create the repository on GitHub via API
echo "📦 Creating repository '${REPO_NAME}' on GitHub..."
HTTP_STATUS=$(curl -s -o /tmp/github-create-response.json -w "%{http_code}" \
  -X POST "https://api.github.com/user/repos" \
  -H "Authorization: token ${PAT}" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"${REPO_NAME}\",
    \"description\": \"Carter Digitals — Premium Web Development Agency | Built with Next.js 16, TypeScript, Tailwind CSS, shadcn/ui\",
    \"private\": false,
    \"auto_init\": false
  }")

if [ "$HTTP_STATUS" -eq 201 ]; then
    echo "✅ Repository created successfully!"
elif [ "$HTTP_STATUS" -eq 422 ]; then
    echo "ℹ️  Repository may already exist. Continuing..."
else
    echo "⚠️  API returned status ${HTTP_STATUS}. Response:"
    cat /tmp/github-create-response.json
    echo ""
    echo "Continuing anyway..."
fi

# Configure git
cd /home/z/my-project
git config user.name "Z User" 2>/dev/null || true
git config user.email "z@container" 2>/dev/null || true

# Add remote
REMOTE_URL="https://${PAT}@github.com/${USERNAME}/${REPO_NAME}.git"
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔄 Updating remote URL..."
    git remote set-url origin "${REMOTE_URL}"
else
    echo "➕ Adding remote origin..."
    git remote add origin "${REMOTE_URL}"
fi

# Push all branches
echo "⬆️  Pushing to GitHub..."
git push -u origin main --all 2>&1

echo ""
echo "===================================="
echo "✅ Upload complete!"
echo "🔗 https://github.com/${USERNAME}/${REPO_NAME}"
echo "===================================="
echo ""
echo "⚠️  Security: Run 'git remote set-url origin https://github.com/${USERNAME}/${REPO_NAME}.git' to remove PAT from URL"
