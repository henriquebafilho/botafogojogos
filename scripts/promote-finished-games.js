#!/usr/bin/env node
// Moves finished games (real integer scores) from ProximosJogos.js to BotafogoJogos.js.
// Skips games where golsMandante/golsVisitante are still empty strings (unplayed).
// Inserts promoted lines before the first jogos.push() in BotafogoJogos.js.
//
// Usage: node scripts/promote-finished-games.js

const fs = require('fs');
const path = require('path');

const BOTAFOGO_JOGOS = path.join(__dirname, '../src/TodosOsJogos/BotafogoJogos.js');
const PROXIMOS_JOGOS = path.join(__dirname, '../src/TodosOsJogos/ProximosJogos.js');

const proximosRaw = fs.readFileSync(PROXIMOS_JOGOS, 'utf8');
const botafogoRaw = fs.readFileSync(BOTAFOGO_JOGOS, 'utf8');

const proximosLines = proximosRaw.split(/\r?\n/);
const botafogoLines = botafogoRaw.split(/\r?\n/);
const botafogoLineEnding = botafogoRaw.includes('\r\n') ? '\r\n' : '\n';

const linesToPromote = [];
const keptLines = [];

for (const line of proximosLines) {
    if (
        line.includes('jogos.push(') &&
        /"golsMandante":\s*\d/.test(line) &&
        /"golsVisitante":\s*\d/.test(line)
    ) {
        linesToPromote.push(line);
    } else {
        keptLines.push(line);
    }
}

if (linesToPromote.length === 0) {
    console.log('No finished games to promote.');
    process.exit(0);
}

// Skip games already present in BotafogoJogos.js
const toInsert = [];
for (const line of linesToPromote) {
    const mMandante = line.match(/"mandante":\s*"([^"]+)"/);
    const mVisitante = line.match(/"visitante":\s*"([^"]+)"/);
    const mData = line.match(/"data":\s*"([^"]+)"/);
    if (!mMandante || !mVisitante || !mData) { toInsert.push(line); continue; }
    const alreadyExists =
        botafogoRaw.includes(`"mandante": "${mMandante[1]}"`) &&
        botafogoRaw.includes(`"data": "${mData[1]}"`);
    if (alreadyExists) {
        console.log(`  Skipping duplicate: ${mMandante[1]}|${mVisitante[1]}|${mData[1]}`);
        continue;
    }
    toInsert.push(line);
    console.log(`  Promoting: ${mMandante[1]} vs ${mVisitante[1]} (${mData[1]})`);
}

if (toInsert.length === 0) {
    console.log('All finished games already exist in BotafogoJogos.js.');
    process.exit(0);
}

// Find the first jogos.push( line and insert before it (no extra blank lines)
const firstPushIdx = botafogoLines.findIndex(l => /^\s+jogos\.push\(/.test(l));
if (firstPushIdx === -1) {
    console.error('ERROR: Could not find jogos.push() in BotafogoJogos.js — no changes written.');
    process.exit(1);
}

botafogoLines.splice(firstPushIdx, 0, ...toInsert);

fs.writeFileSync(BOTAFOGO_JOGOS, botafogoLines.join(botafogoLineEnding));
fs.writeFileSync(PROXIMOS_JOGOS, keptLines.join(botafogoLineEnding));

console.log(`\nPromoted ${toInsert.length} game(s) to BotafogoJogos.js.`);
