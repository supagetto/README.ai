import { join } from 'node:path';
import { getSkillsFromDirectory } from './get-skills-from-directory.mjs';

/** @typedef {import("../models/skills.mjs").Skills} Skills */

/**
 * Returns the project skills (<cwd>/.claude/skills).
 *
 * @param {object} args
 * @param {string} args.cwd - The project working directory.
 * @returns {Skills}
 */
export const getProjectSkills = ({ cwd }) => {
  return getSkillsFromDirectory({
    directoryPath: join(cwd, '.claude', 'skills'),
  });
};
