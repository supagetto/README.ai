import { SKILL_TRIGGER_REGEX_PREFIX } from '../constants/skill-trigger-regex-prefix.mjs';

/**
 * Returns true if the `re:`-prefixed trigger matches the prompt as a
 * case-insensitive regex. Returns false if the pattern is invalid.
 *
 * @param {object} args
 * @param {string} args.trigger - The raw trigger string (including the `re:` prefix).
 * @param {string} args.prompt - The raw user prompt.
 * @returns {boolean}
 */
export const isRegexTriggerMatch = ({ trigger, prompt }) => {
  const source = trigger.slice(SKILL_TRIGGER_REGEX_PREFIX.length);

  let regex;
  try {
    regex = new RegExp(source, 'i');
  } catch {
    return false;
  }

  return regex.test(prompt);
};
