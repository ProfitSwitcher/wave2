# GitHub Push Protection with Tokens

When pushing code to GitHub using a user-provided Personal Access Token (PAT), the token gets embedded in commit content and is caught by GitHub's push protection — even if the file is in `.gitignore` (because `.gitignore` only affects untracked files, not committed ones).

## The Problem

```
remote: error: GH013: Repository rule violations found for refs/heads/main.
remote:   - Push cannot contain secrets
remote:       commit: <sha>
       path: .github-token:1
```

The token file is committed, GitHub detects it, and rejects the push — even though the file is ignored for future operations.

## The Fix (step by step)

### 1. Save the token to a file (for use in API calls)

```
echo "<token>" > .github-token
```

### 2. Use it for the API call (create repo, push, etc.)

```bash
# Example: create repo via API
TOKEN=$(cat .github-token)
curl -X POST https://api.github.com/repos/<owner>/<repo> \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -d '{"name":"wave2","private":false}'
```

### 3. Remove the token from git tracking before pushing

```bash
git rm --cached .github-token    # remove from git, keep local file
echo ".github-token" >> .gitignore  # ensure it stays ignored
git add .gitignore
git commit --amend --no-edit  # remove token from last commit
```

### 4. Push

```bash
git push -u <remote> <branch>
```

## Why This Happens

GitHub's push protection scans **every byte in every commit** for secrets — not just tracked files. A token in `.github-token` will be detected regardless of `.gitignore`. The only way to push is to remove it from the commit history via `git commit --amend`.

## When to Use This

- User provides a GitHub token for repo creation or pushing
- Any token (PAT, OAuth, deploy key) that appears in a commit
- API calls that require authentication tokens embedded in the request

## Pitfalls

- **Don't leave the token file in working tree after push**. Delete it after the push succeeds.
- **Don't assume `.gitignore` protects commits**. It doesn't. Only `git rm --cached` + `--amend` does.
- **If the token was already pushed**, you must rotate it immediately. No amount of git history rewriting on GitHub's side removes it from their secret scanner.
