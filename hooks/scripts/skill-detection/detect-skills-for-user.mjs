#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getSkills } from './utils/get-skills.mjs';
import { createSkillsInstruction } from './utils/create-skills-instruction.mjs';
import { getSkillRules } from './utils/get-skill-rules.mjs';

/**
 * @returns {void}
 */
const main = () => {
  /** @type {{ prompt?: string }} */
  const data = JSON.parse(readFileSync(0, 'utf-8'));

  const prompt = data.prompt?.trim() ?? '';
  if (!prompt.length) {
    return;
  }

  const skills = getSkills({
    prompt,
    skillRules: getSkillRules(),
    agent: 'boss',
  });

  if (!skills.length) {
    return;
  }

  console.log(createSkillsInstruction({ skills }));
};

main();
