import ignore from 'ignore';
import { expandBraces } from './expand-braces.mjs';

/**
 * Reports whether a relative file path matches any of the glob patterns,
 * using the same gitignore-based matcher (`ignore`) that Claude Code uses for
 * `paths` frontmatter. Brace expressions (e.g. `{ts,tsx}`) are expanded
 * automatically before matching.
 *
 * @param {object} args
 * @param {string} args.relativePath - Project-relative file path with forward slashes.
 * @param {string[]} args.patterns - Glob patterns from a skill's `paths` frontmatter.
 * @returns {boolean}
 */
export const doesPathMatch = ({ relativePath, patterns }) => {
  if (!patterns.length) {
    return false;
  }

  const expanded = [];
  for (const pattern of patterns) {
    expanded.push(...expandBraces({ pattern }));
  }

  return ignore().add(expanded).ignores(relativePath);
};
