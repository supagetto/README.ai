#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getSkillRules } from './utils/get-skill-rules.mjs';
import { isSkillAllowedForAgent } from './utils/is-skill-allowed-for-agent.mjs';
import { getMatchedPathSkills } from './utils/get-matched-path-skills.mjs';
import { createSkillsInstruction } from './utils/create-skills-instruction.mjs';

/**
 * @returns {void}
 */
const main = () => {
  /** @type {{ cwd?: string; agent_type?: string; tool_input?: { file_path?: string } }} */
  const data = JSON.parse(readFileSync(0, 'utf-8'));

  const filePath = data.tool_input?.file_path;
  if (!filePath) {
    return;
  }

  const skillRules = getSkillRules();
  const matchedPathSkills = getMatchedPathSkills({
    filePath,
    cwd: data.cwd ?? process.cwd(),
    skillRules,
  });

  const skills = [];
  for (const name of matchedPathSkills) {
    if (
      isSkillAllowedForAgent({
        skillRule: skillRules[name],
        agent: data.agent_type,
      })
    ) {
      skills.push(name);
    }
  }

  if (!skills.length) {
    return;
  }

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        additionalContext: createSkillsInstruction({ skills }),
      },
    }),
  );
};

main();
