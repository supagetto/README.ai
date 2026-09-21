import { isSkillTriggeredByPrompt } from './is-skill-triggered-by-prompt.mjs';
import { isSkillAllowedForAgent } from './is-skill-allowed-for-agent.mjs';

/** @typedef {import("../models/skill-rules.mjs").SkillRules} SkillRules */

/**
 * Returns the names of skills to inject for an agent: those available to it
 * via `allowedAgents` that are also matched by the prompt.
 *
 * @param {object} args
 * @param {string} args.prompt - The raw prompt.
 * @param {SkillRules} args.skillRules - The skill rules to consider.
 * @param {string} args.agent - The agent the skills are being offered to.
 * @returns {string[]}
 */
export const getSkills = ({ prompt, skillRules, agent }) => {
  const skills = [];
  for (const [name, skillRule] of Object.entries(skillRules)) {
    if (!isSkillAllowedForAgent({ skillRule, agent })) {
      continue;
    }

    if (!isSkillTriggeredByPrompt({ prompt, skillRule })) {
      continue;
    }

    skills.push(name);
  }

  return skills;
};
