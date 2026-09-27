import { fuzzy } from 'fast-fuzzy';
import { SKILL_TRIGGER_REGEX_PREFIX } from '../constants/skill-trigger-regex-prefix.mjs';
import { SKILL_TRIGGER_FUZZY_THRESHOLD } from '../constants/skill-trigger-fuzzy-threshold.mjs';
import { isRegexTriggerMatch } from './is-regex-trigger-match.mjs';

/** @typedef {import("../models/skill.mjs").Skill} Skill */

/**
 * Reports whether the prompt matches any of the skill's triggers. Plain
 * triggers are matched with fast-fuzzy: the best-matching part of the prompt
 * must score >= SKILL_TRIGGER_FUZZY_THRESHOLD (roughly 1 − edits ÷ trigger
 * length), which accepts minor typos while ignoring case, symbols, and extra
 * whitespace. `re:` triggers are matched as case-insensitive regexes; invalid
 * patterns are skipped.
 *
 * @param {object} args
 * @param {string} args.prompt - The raw user prompt.
 * @param {Skill} args.skill - The skill.
 * @returns {boolean}
 */
export const isSkillTriggeredByPrompt = ({ prompt, skill }) => {
  for (const trigger of skill.triggers ?? []) {
    const isRegexTrigger = trigger.startsWith(SKILL_TRIGGER_REGEX_PREFIX);

    if (isRegexTrigger && isRegexTriggerMatch({ trigger, prompt })) {
      return true;
    }

    const isPromptCloseToTrigger =
      fuzzy(trigger, prompt) >= SKILL_TRIGGER_FUZZY_THRESHOLD;
    if (isRegexTrigger && isPromptCloseToTrigger) {
      return true;
    }
  }
  return false;
};
