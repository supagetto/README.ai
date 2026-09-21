/** @typedef {import("../models/skill-rule.mjs").SkillRule} SkillRule */

/**
 * A skill with no `allowedAgents` key is available to every agent. When the
 * key is present, the skill is available only to the agents it lists (an
 * empty list allows none).
 *
 * @param {object} args
 * @param {SkillRule} args.skillRule - The skill's rule.
 * @param {string} args.agent - The agent the skill is being offered to.
 * @returns {boolean}
 */
export const isSkillAllowedForAgent = ({ skillRule, agent }) => {
  const { allowedAgents } = skillRule;
  if (!allowedAgents) {
    return true;
  }

  return allowedAgents.includes(agent);
};
