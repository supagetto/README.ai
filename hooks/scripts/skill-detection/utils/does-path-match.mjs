import ignore from 'ignore';

/**
 * Reports whether a relative file path matches any of the glob patterns,
 * using the same gitignore-based matcher (`ignore`) that Claude Code uses for
 * `paths` frontmatter. Patterns must already have braces expanded.
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

  return ignore().add(patterns).ignores(relativePath);
};
