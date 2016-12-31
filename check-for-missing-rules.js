/* eslint-disable no-console, no-process-exit */

'use strict';

const allRules = Object.keys(require('stylelint/lib/rules'));
const numRules = allRules.length;
const myRules = Object.keys(require('.').rules);

const missingRules = allRules.filter((r) => !myRules.includes(r));
const numMissingRules = missingRules.length;

if (numMissingRules === 0) {
    console.log(`All ${numRules} rules are being used!`);
} else {
    console.error(`Missing ${numMissingRules} of ${numRules} rules:
${missingRules.join('\n')}`);
    process.exit(1);
}
