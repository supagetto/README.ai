/** @typedef {import("../models/skill-rule.mjs").SkillRule} SkillRule */

const REGEX_PREFIX = 're:';

/**
 * Reports whether the prompt matches any of the skill's triggers. A trigger
 * is a case-insensitive substring by default; a trigger prefixed with `re:`
 * is matched as a case-insensitive regex (the source after the prefix).
 *
 * @param {object} args
 * @param {string} args.prompt - The raw user prompt.
 * @param {SkillRule} args.skillRule - The skill's trigger rule.
 * @returns {boolean}
 */
export const isSkillTriggeredByPrompt = ({ prompt, skillRule }) => {
  for (const trigger of skillRule.triggers ?? []) {
    if (trigger.startsWith(REGEX_PREFIX)) {
      if (new RegExp(trigger.slice(REGEX_PREFIX.length), 'i').test(prompt)) {
        return true;
      }
    } else if (prompt.toLowerCase().includes(trigger.toLowerCase())) {
      return true;
    }
  }

  return false;
};
