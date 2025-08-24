#!/bin/bash
# Custom commit command for Claude Code

# Add all changes to staging
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "No changes to commit"
    exit 0
fi

# Get commit message from arguments or use default
if [ $# -gt 0 ]; then
    commit_message="$*"
else
    commit_message="Update files"
fi

# Create commit with Claude Code attribution
git commit -m "$(cat <<'EOF'
$commit_message

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

echo "Commit created successfully!"