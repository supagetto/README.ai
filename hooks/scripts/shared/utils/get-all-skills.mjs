import { getPersonalSkills } from './get-personal-skills.mjs';
import { getProjectSkills } from './get-project-skills.mjs';

/** @typedef {import("../models/skills.mjs").Skills} Skills */

/**
 * Reads and returns skills from SKILL.md frontmatter.
 * Personal skills (`$CLAUDE_CONFIG_DIR/skills` or ~/.claude/skills) are loaded first; project skills
 * (<cwd>/.claude/skills) override them when names collide.
 *
 * @param {object} args
 * @param {string} args.cwd - The project working directory.
 * @returns {Skills}
 */
export const getAllSkills = ({ cwd }) => {
  return {
    ...getPersonalSkills(),
    ...getProjectSkills({ cwd }),
  };
};
