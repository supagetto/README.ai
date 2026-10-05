/**
 * A single skill's detection config, parsed from the top-level `paths`
 * and `allowed-agents` keys in a SKILL.md frontmatter block.
 *
 * @typedef {object} Skill
 * @property {string[]} [paths] - Glob patterns matched against an edited file.
 * @property {string[]} [allowedAgents] - Agents this skill is available to; omit the key for all agents, an empty list for none.
 */

export {};
