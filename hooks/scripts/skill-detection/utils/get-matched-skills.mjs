import { isSkillTriggeredByPrompt } from './is-skill-triggered-by-prompt.mjs';
import { isSkillAllowedForAgent } from '../../shared/utils/is-skill-allowed-for-agent.mjs';

/** @typedef {import("../../shared/models/skills.mjs").Skills} Skills */

/**
 * Returns the names of skills to inject for an agent: those available to it
 * via `allowedAgents` that are also matched by the prompt.
 *
 * @param {object} args
 * @param {string} args.prompt - The raw prompt.
 * @param {Skills} args.skills - The skills to consider.
 * @param {string} args.agent - The agent the skills are being offered to.
 * @returns {string[]}
 */
export const getMatchedSkills = ({ prompt, skills, agent }) => {
  const matchedSkillNames = [];
  for (const [name, skill] of Object.entries(skills)) {
    if (!isSkillAllowedForAgent({ skill, agent })) {
      continue;
    }

    if (!isSkillTriggeredByPrompt({ prompt, skill })) {
      continue;
    }

    matchedSkillNames.push(name);
  }

  return matchedSkillNames;
};
