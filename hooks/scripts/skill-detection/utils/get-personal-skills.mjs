import os from 'node:os';
import { join } from 'node:path';
import { getSkillsFromDirectory } from './get-skills-from-directory.mjs';

/** @typedef {import("../models/skills.mjs").Skills} Skills */

/**
 * Returns the personal skills. Honors `CLAUDE_CONFIG_DIR` like Claude Code's
 * `getClaudeConfigHomeDir`, falling back to `~/.claude`.
 *
 * @returns {Skills}
 */
export const getPersonalSkills = () => {
  const configDirectoryPath =
    process.env.CLAUDE_CONFIG_DIR ?? join(os.homedir(), '.claude');

  return getSkillsFromDirectory({
    directoryPath: join(configDirectoryPath, 'skills'),
  });
};
