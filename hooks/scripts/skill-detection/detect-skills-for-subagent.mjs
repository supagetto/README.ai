#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getMatchedSkills } from './utils/get-matched-skills.mjs';
import { createSkillsInstruction } from './utils/create-skills-instruction.mjs';
import { getAllSkills } from './utils/get-all-skills.mjs';

/**
 * @returns {void}
 */
const main = () => {
  /** @type {{ cwd?: string; tool_input?: { subagent_type?: string; prompt?: string } }} */
  const data = JSON.parse(readFileSync(0, 'utf-8'));

  const toolInput = data.tool_input ?? {};
  const agent = toolInput.subagent_type;
  if (!agent) {
    return;
  }

  const prompt = toolInput.prompt?.trim() ?? '';
  const skills = getMatchedSkills({
    prompt,
    skills: getAllSkills({ cwd: data.cwd ?? process.cwd() }),
    agent,
  });
  if (!skills.length) {
    return;
  }

  const instruction = createSkillsInstruction({ skills });

  if (prompt) {
    toolInput.prompt = prompt + '\n\n' + instruction;
  } else {
    toolInput.prompt = instruction;
  }

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        updatedInput: toolInput,
      },
    }),
  );
};

main();
