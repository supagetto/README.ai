/**
 * Builds the plain-text activation note for the matched skills.
 *
 * @param {object} args
 * @param {string[]} args.skills - Names of the matched skills.
 * @returns {string}
 */
export const createSkillsInstruction = ({ skills }) => {
  return `Relevant skills detected for this request. Use the Skill() tool for each before responding: ${skills.join(', ')}.`;
};
