import { isAbsolute, relative } from 'node:path';
import { doesPathMatch } from './does-path-match.mjs';

/** @typedef {import("../../shared/models/skills.mjs").Skills} Skills */

/**
 * Returns the names of skills whose `paths` patterns match the edited file.
 * Mirrors Claude Code: the file path is made relative to the working directory
 * and rejected when it escapes it.
 *
 * @param {object} args
 * @param {string} args.filePath - Absolute path of the file being edited.
 * @param {string} args.cwd - Working directory to resolve the file against.
 * @param {Skills} args.skills - The skills to consider.
 * @returns {string[]}
 */
export const getMatchedPathSkills = ({ filePath, cwd, skills }) => {
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

  const matchedSkillNames = [];
  for (const [name, skill] of Object.entries(skills)) {
    const patterns = skill.paths ?? [];
    if (patterns.length && doesPathMatch({ relativePath, patterns })) {
      matchedSkillNames.push(name);
    }
  }

  return matchedSkillNames;
};
