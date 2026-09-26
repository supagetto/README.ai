#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { getMatchedSkills } from './utils/get-matched-skills.mjs';
import { createSkillsInstruction } from './utils/create-skills-instruction.mjs';
import { getAllSkills } from './utils/get-all-skills.mjs';

/**
 * @returns {void}
 */
const main = () => {
  /** @type {{ cwd?: string; prompt?: string }} */
  const data = JSON.parse(readFileSync(0, 'utf-8'));

  const prompt = data.prompt?.trim() ?? '';
  if (!prompt.length) {
    return;
  }

  const skills = getMatchedSkills({
    prompt,
    skills: getAllSkills({ cwd: data.cwd ?? process.cwd() }),
    agent: 'boss',
  });

  if (!skills.length) {
    return;
  }

  console.log(createSkillsInstruction({ skills }));
};

main();
