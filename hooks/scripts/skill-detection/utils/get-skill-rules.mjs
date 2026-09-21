import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @typedef {import("../models/skill-rules.mjs").SkillRules} SkillRules */

const SKILL_RULES_FILE_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'skill-rules.json',
);

/**
 * Reads and returns the skill rules from disk.
 *
 * @returns {SkillRules}
 */
export const getSkillRules = () => {
  return /** @type {SkillRules} */ (
    JSON.parse(readFileSync(SKILL_RULES_FILE_PATH, 'utf-8'))
  );
};
