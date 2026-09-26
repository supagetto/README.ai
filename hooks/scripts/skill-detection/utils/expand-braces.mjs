/**
 * Expands brace expressions in a glob pattern. Mirrors Claude Code's
 * `expandBraces` in `src/utils/frontmatterParser.ts`.
 * `**\/*.{ts,tsx}` → `['**\/*.ts', '**\/*.tsx']`
 *
 * @param {object} args
 * @param {string} args.pattern - The glob pattern to expand.
 * @returns {string[]}
 */
export const expandBraces = ({ pattern }) => {
  const match = pattern.match(/^([^{]*)\{([^}]+)\}(.*)$/);
  if (!match) {
    return [pattern];
  }

  const [, prefix, alternatives, suffix] = match;
  const expanded = [];
  for (const part of alternatives.split(',')) {
    expanded.push(...expandBraces({ pattern: prefix + part.trim() + suffix }));
  }

  return expanded;
};
