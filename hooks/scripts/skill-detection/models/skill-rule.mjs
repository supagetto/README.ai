/**
 * A single skill's activation rule.
 *
 * @typedef {object} SkillRule
 * @property {string[]} [triggers] - Prompt-text matchers: case-insensitive substrings, or `re:`-prefixed case-insensitive regex sources.
 * @property {string[]} [paths] - Glob patterns matched against an edited file.
 * @property {string[]} [allowedAgents] - Agents this skill is available to; omit the key for all agents, an empty list for none.
 */

export {};
