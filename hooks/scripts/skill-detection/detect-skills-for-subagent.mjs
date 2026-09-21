#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getSkills } from './utils/get-skills.mjs';
import { createSkillsInstruction } from './utils/create-skills-instruction.mjs';
import { getSkillRules } from './utils/get-skill-rules.mjs';

/**
 * @returns {void}
 */
const main = () => {
  /** @type {{ tool_input?: { subagent_type?: string; prompt?: string } }} */
  const data = JSON.parse(readFileSync(0, 'utf-8'));

  const toolInput = data.tool_input ?? {};
  const agent = toolInput.subagent_type;
  if (!agent) {
    return;
  }

  const prompt = toolInput.prompt?.trim() ?? '';
  const skills = getSkills({ prompt, skillRules: getSkillRules(), agent });
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
