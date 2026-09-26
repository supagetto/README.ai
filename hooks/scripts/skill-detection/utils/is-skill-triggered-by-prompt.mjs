import { SKILL_TRIGGER_REGEX_PREFIX } from '../constants/skill-trigger-regex-prefix.mjs';

/** @typedef {import("../models/skill.mjs").Skill} Skill */

/**
 * Reports whether the prompt matches any of the skill's triggers. A trigger
 * is a case-insensitive substring by default; a trigger prefixed with `re:`
 * is matched as a case-insensitive regex (the source after the prefix).
 * Invalid regex triggers are skipped.
 *
 * @param {object} args
 * @param {string} args.prompt - The raw user prompt.
 * @param {Skill} args.skill - The skill.
 * @returns {boolean}
 */
export const isSkillTriggeredByPrompt = ({ prompt, skill }) => {
  for (const trigger of skill.triggers ?? []) {
    if (trigger.startsWith(SKILL_TRIGGER_REGEX_PREFIX)) {
      let regex;
      try {
        regex = new RegExp(
          trigger.slice(SKILL_TRIGGER_REGEX_PREFIX.length),
          'i',
        );
      } catch {
        continue;
      }

      if (regex.test(prompt)) {
        return true;
      }
    } else if (prompt.toLowerCase().includes(trigger.toLowerCase())) {
      return true;
    }
  }

  return false;
};
