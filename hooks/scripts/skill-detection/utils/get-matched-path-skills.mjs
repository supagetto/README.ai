import { isAbsolute, relative } from 'node:path';
import { doesPathMatch } from './does-path-match.mjs';

/** @typedef {import("../models/skill-rules.mjs").SkillRules} SkillRules */

/**
 * Returns the names of skills whose `paths` patterns match the edited file.
 * Mirrors Claude Code: the file path is made relative to the working directory
 * and rejected when it escapes it.
 *
 * @param {object} args
 * @param {string} args.filePath - Absolute path of the file being edited.
 * @param {string} args.cwd - Working directory to resolve the file against.
 * @param {SkillRules} args.skillRules - The skill rules to consider.
 * @returns {string[]}
 */
export const getMatchedPathSkills = ({ filePath, cwd, skillRules }) => {
  let relativePath;
  if (isAbsolute(filePath)) {
    relativePath = relative(cwd, filePath);
  } else {
    relativePath = filePath;
  }

  relativePath = relativePath.replaceAll('\\', '/');

  const isOutsideCwd =
    !relativePath || relativePath.startsWith('../') || isAbsolute(relativePath);
  if (isOutsideCwd) {
    return [];
  }

  const skills = [];
  for (const [name, skillRule] of Object.entries(skillRules)) {
    const patterns = skillRule.paths ?? [];
    if (patterns.length && doesPathMatch({ relativePath, patterns })) {
      skills.push(name);
    }
  }

  return skills;
};
