---
name: finding-docs
description: Retrieve up-to-date documentation, API references, and code examples for any developer technology. Use when the user asks about a library, framework, SDK, or cloud service, or when you need to verify API syntax or version-specific behavior.
user-invocable: false
model: claude-haiku-4-5
---

# Documentation Lookup

Retrieve current documentation and code examples for any library using the
Context7 CLI. Always run via `npx ctx7@latest` (no global install).

See [`REFERENCE.md`](REFERENCE.md) for selection algorithm, query guidance,
and authentication.

## Workflow

Two-step process: resolve the library name to an ID, then query docs with
that ID.

```bash
# Step 1: Resolve library ID
npx ctx7@latest library <name> "<query>"

# Step 2: Query documentation
npx ctx7@latest docs <libraryId> "<query>"
```

You MUST call `library` first to obtain a valid library ID UNLESS the user
explicitly provides a library ID in the format `/org/project` or
`/org/project/version`.

Do not run these commands more than 3 times per question. If you cannot find
what you need after 3 attempts, use the best result you have.

Never put secrets, credentials, personal data, or proprietary code in a query.

## Step 1: Resolve a Library

```bash
npx ctx7@latest library React "How to clean up useEffect with async operations"
npx ctx7@latest library "Next.js" "How to set up app router with middleware"
npx ctx7@latest library Prisma "How to define one-to-many relations with cascade delete"
```

Use the official name with correct punctuation ("Next.js" not "nextjs"). If
results look wrong, try alternate spellings before changing the query. Always
pass a `query` argument — it is required and affects result ranking.

### Version-specific IDs

If the user mentions a specific version, use a version-specific library ID:

```bash
npx ctx7@latest docs /vercel/next.js/v14.3.0-canary.87 "How to set up app router"
```

Available versions are listed in the `library` command output.

## Step 2: Query Documentation

```bash
npx ctx7@latest docs /facebook/react "How to clean up useEffect with async operations"
npx ctx7@latest docs /vercel/next.js "How to add authentication middleware to app router"
npx ctx7@latest docs /prisma/prisma "How to define one-to-many relations with cascade delete"
```

## Error Handling

If a command fails with a quota error ("Monthly quota reached" or "quota
exceeded"):

1. Inform the user their Context7 quota is exhausted.
2. Suggest they authenticate for higher limits: `npx ctx7@latest login`.
3. If they cannot or choose not to authenticate, answer from training
   knowledge and clearly note it may be outdated.

Do not silently fall back to training data — always tell the user why
Context7 was not used.

## Done When

The requested documentation has been returned to the caller.
