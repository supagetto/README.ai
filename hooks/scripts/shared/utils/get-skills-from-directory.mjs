import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { SKILL_FILENAME } from '../constants/skill-filename.mjs';
import { parseSkillFile } from './parse-skill-file.mjs';

/** @typedef {import("../models/skills.mjs").Skills} Skills */

/**
 * Returns the skills in a skills directory, parsed from each `<name>/SKILL.md`.
 *
 * @param {object} args
 * @param {string} args.directoryPath - The skills directory to parse.
 * @returns {Skills}
 */
export const getSkillsFromDirectory = ({ directoryPath }) => {
  let entries;
  try {
    entries = readdirSync(directoryPath, { withFileTypes: true });
  } catch {
    return {};
  }

  /** @type {Skills} */
  const skills = {};
  for (const entry of entries) {
    const skill = parseSkillFile({
      filePath: join(directoryPath, entry.name, SKILL_FILENAME),
    });

    if (skill) {
      skills[entry.name] = skill;
    }
  }

  return skills;
};
