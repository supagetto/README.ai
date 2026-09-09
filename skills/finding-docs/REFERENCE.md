# Finding Docs — Reference

## Selection Process

After running `library`, pick the best match:

1. Prefer exact name matches over partial matches.
2. Prefer higher Code Snippet counts (more coverage).
3. Prefer High or Medium Source Reputation.
4. Prefer higher Benchmark Score (100 is the maximum).
5. If multiple good matches exist, acknowledge this and proceed with the most
   relevant one.
6. If no good match exists, state this clearly and suggest query refinements.
7. For ambiguous queries, request clarification before proceeding.

## Writing Good Queries

Be specific. One topic per query. If the question spans multiple distinct
concepts, run a separate `docs` call per concept (unless the question is about
how the concepts interact).

| Quality | Example |
|---------|---------|
| Good | `"How to set up JWT auth in Express.js"` |
| Good | `"React useEffect cleanup with async operations"` |
| Bad (too vague) | `"auth"` |
| Bad (too vague) | `"hooks"` |
| Bad (too broad) | `"routing and auth and caching in Next.js"` |

Describe what to look up in the library's docs, not the task to complete.
Vague one-word queries return generic results; multi-topic queries dilute
ranking and return shallow results for each topic.

The output contains two types of content: **code snippets** (titled, with
language-tagged blocks) and **info snippets** (prose explanations with
breadcrumb context).

## Authentication

Works without authentication. For higher rate limits:

```bash
# Option A: environment variable
export CONTEXT7_API_KEY=your_key

# Option B: OAuth login
npx ctx7@latest login
```
