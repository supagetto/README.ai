#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getAllSkills } from '../shared/utils/get-all-skills.mjs';
import { isSkillAllowedForAgent } from '../shared/utils/is-skill-allowed-for-agent.mjs';

/**
 * @returns {void}
 */
const main = () => {
  /** @type {{ cwd?: string; agent_type?: string; tool_input?: { skill?: string } }} */
  const data = JSON.parse(readFileSync(0, 'utf-8'));

  const agent = data.agent_type;
  const name = data.tool_input?.skill;
  if (!agent || !name) {
    return;
  }

  const skill = getAllSkills({ cwd: data.cwd ?? process.cwd() })[name];
  if (!skill || isSkillAllowedForAgent({ skill, agent })) {
    return;
  }

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: `Skill "${name}" is not available to agent "${agent}".`,
      },
    }),
  );
};

main();
