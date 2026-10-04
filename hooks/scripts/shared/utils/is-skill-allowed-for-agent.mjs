/** @typedef {import("../models/skill.mjs").Skill} Skill */

/**
 * A skill with no `allowedAgents` key is available to every agent. When the
 * key is present, the skill is available only to the agents it lists (an
 * empty list allows none).
 *
 * @param {object} args
 * @param {Skill} args.skill - The skill.
 * @param {string} args.agent - The agent the skill is being offered to.
 * @returns {boolean}
 */
export const isSkillAllowedForAgent = ({ skill, agent }) => {
  const { allowedAgents } = skill;
  if (!allowedAgents) {
    return true;
  }

  return allowedAgents.includes(agent);
};
