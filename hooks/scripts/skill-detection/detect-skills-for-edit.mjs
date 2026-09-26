#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getAllSkills } from './utils/get-all-skills.mjs';
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

  const cwd = data.cwd ?? process.cwd();
  const skills = getAllSkills({ cwd });
  const matchedPathSkills = getMatchedPathSkills({
    filePath,
    cwd,
    skills,
  });

  const matchedSkillNames = [];
  for (const name of matchedPathSkills) {
    if (
      isSkillAllowedForAgent({
        skill: skills[name],
        agent: data.agent_type,
      })
    ) {
      matchedSkillNames.push(name);
    }
  }

  if (!matchedSkillNames.length) {
    return;
  }

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        additionalContext: createSkillsInstruction({
          skills: matchedSkillNames,
        }),
      },
    }),
  );
};

main();
