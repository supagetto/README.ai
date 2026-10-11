# No Premature Optimization

**Pick the simplest solution that meets the need. Speed is welcome; complexity needs a reason.**

- Prefer a faster option when it is just as simple, such as a bulk query instead of a loop, an index, or a map lookup.
- Add complexity for speed (caching, queues, denormalization, concurrency) only for a known need, because it costs design time and often buys speed nobody notices.
- Set the need from context: who waits, how often it runs, and what slowness costs. A Google feed upload runs in the background while the old feed stays live, so minutes is fine. A POS order update blocks staff with a customer at the counter, so it must feel instant.
- For tight budgets, estimate during planning by counting round trips, queries, and items × work per item.
- When the need is unclear, build the simple version, measure it, and fix only the bottleneck.
