/**
 * Normalizes a frontmatter value to a list of strings: non-array values become an empty list, and non-string items are dropped.
 *
 * @param {object} args
 * @param {unknown} args.value - The frontmatter value to normalize.
 * @returns {string[]}
 */
export const parseFrontmatterStringList = ({ value }) => {
  if (!Array.isArray(value)) {
    return [];
  }

  const strings = [];
  for (const item of value) {
    if (typeof item === 'string') {
      strings.push(item);
    }
  }

  return strings;
};
