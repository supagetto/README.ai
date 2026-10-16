---
name: reading-web-pages
description: "Read the main content of a web page URL as markdown. Use when you need the text of a web page."
allowed-agents:
  - nerd
user-invocable: false
model: haiku
---

# Reading Web Pages

Fetch the main content of a web page as markdown with the Defuddle CLI.
Always run it through `npx defuddle@latest`; never install it globally.

Defuddle keeps the main content word for word and strips navigation, ads,
and other clutter.

## Workflow

```bash
# Print the page as markdown
npx defuddle@latest parse <url> --md

# Print one property (title, description, domain)
npx defuddle@latest parse <url> -p title

# Write the markdown to a file
npx defuddle@latest parse <url> --md -o <file>
```

Pass `--json` to get the content and its metadata as a single object.

Never put secrets, credentials, or token-bearing URLs in a command.

## Fallback

If the output is empty or lacks the main content (JS-rendered pages, login
walls, sites that block CLI requests), stop. Report to the caller that
Defuddle failed, the likely reason, and the URL.

Do not switch to another fetch method. Do not answer from memory unless you
say so.

## Special Cases

- GitHub files and gists: fetch the raw URL with `curl -sL`
  (`raw.githubusercontent.com`, or the gist's raw URL). Raw files are
  already plain text.
- arXiv `arxiv.org/abs/<id>`: read `arxiv.org/html/<id>` instead.
- PDFs: out of scope.

## Done When

The caller has received the page content (or the requested property), or
the failure has been reported.
