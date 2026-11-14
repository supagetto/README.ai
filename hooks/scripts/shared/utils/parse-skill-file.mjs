import { readFileSync } from 'node:fs';
import yaml from 'yaml';
import { parseFrontmatterStringList } from './parse-frontmatter-string-list.mjs';

/** @typedef {import("../models/skill.mjs").Skill} Skill */

/**
 * Parses a SKILL.md file and returns its skill, or null if the
 * `allowed-agents` frontmatter key is not present.
 *
 * @param {object} args
 * @param {string} args.filePath - Path to the SKILL.md file.
 * @returns {Skill | null}
 */
export const parseSkillFile = ({ filePath }) => {
  let content;
  try {
    content = readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }

  if (!content.startsWith('---')) {
    return null;
  }

  const frontmatterEnd = content.indexOf('\n---', 3);
  if (frontmatterEnd === -1) {
    return null;
  }

  let frontmatter;
  try {
    frontmatter = yaml.parse(content.slice(3, frontmatterEnd));
  } catch {
    return null;
  }

  if (!frontmatter) {
    return null;
  }

  const allowedAgents = frontmatter['allowed-agents'];

  if (!allowedAgents) {
    return null;
  }

  /** @type {Skill} */
  const skill = {};
  if (allowedAgents) {
    skill.allowedAgents = parseFrontmatterStringList({ value: allowedAgents });
  }

  return skill;
};
