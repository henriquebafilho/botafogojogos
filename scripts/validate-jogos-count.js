#!/usr/bin/env node
// Guards against silent data loss (e.g. the GitHub mobile app truncating a big
// file around line ~5000, which happened once and cut ~780 historical games).
// Compares the total number of distinct games tracked in git against the
// previous commit, and fails loudly if it dropped.
//
// Usage: node scripts/validate-jogos-count.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const TRACKED_FILES = [
    'src/TodosOsJogos/BotafogoJogos2010a2026.js',
    'src/TodosOsJogos/BotafogoJogos1990a2009.js',
    'src/TodosOsJogos/BotafogoJogos1970a1989.js',
    'src/TodosOsJogos/BotafogoJogos1950a1969.js',
    'src/TodosOsJogos/BotafogoJogos1900a1949.js',
    'src/TodosOsJogos/ProximosJogos.js',
];

function extractGames(content) {
    const games = new Set();
    for (const line of content.split(/\r?\n/)) {
        if (!line.includes('jogos.push(')) continue;
        const mMandante = line.match(/"mandante":\s*"([^"]+)"/);
        const mVisitante = line.match(/"visitante":\s*"([^"]+)"/);
        const mData = line.match(/"data":\s*"([^"]+)"/);
        if (!mMandante || !mVisitante || !mData) continue;
        games.add(`${mMandante[1]}|${mVisitante[1]}|${mData[1]}`);
    }
    return games;
}

function readAtRef(ref, relPath) {
    try {
        return execSync(`git show ${ref}:${relPath}`, { cwd: REPO_ROOT, encoding: 'utf8' });
    } catch (e) {
        return ''; // file didn't exist at that ref yet
    }
}

const before = new Set();
const after = new Set();

for (const relPath of TRACKED_FILES) {
    for (const g of extractGames(readAtRef('HEAD~1', relPath))) before.add(g);
    const currentContent = fs.readFileSync(path.join(REPO_ROOT, relPath), 'utf8');
    for (const g of extractGames(currentContent)) after.add(g);
}

const missing = [...before].filter(g => !after.has(g));

console.log(`Games before this commit: ${before.size}`);
console.log(`Games after this commit:  ${after.size}`);

if (missing.length > 0) {
    console.error(`\nERROR: ${missing.length} game(s) present in the previous commit are missing now:`);
    missing.forEach(g => console.error(`  ${g}`));
    console.error('\nThis usually means a data file got truncated (e.g. edited via the GitHub mobile app). Blocking deploy.');
    process.exit(1);
}

console.log('No games lost. OK to deploy.');
