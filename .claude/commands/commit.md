---
allowed-tools: ["Bash"]
description: Commit all changes with optional message
---

!git status
!git diff --staged

I'll commit all changes to git. Please:

1. First, add all changes to staging area
2. Check if there are any staged changes
3. Create a commit with an appropriate message

If $ARGUMENTS is provided, use it as the commit message. Otherwise, create a descriptive commit message based on the changes.

Always include this attribution at the end of the commit message:

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>