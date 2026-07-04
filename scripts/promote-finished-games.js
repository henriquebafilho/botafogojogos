#!/usr/bin/env node
// Moves finished games (real integer scores) from ProximosJogos.js to BotafogoJogos.js.
// Skips games where golsMandante/golsVisitante are still empty strings (unplayed).
// Inserts promoted lines before jogos.sort() in BotafogoJogos.js.
//
// Usage: node scripts/promote-finished-games.js

const fs = require('fs');
const path = require('path');

const BOTAFOGO_JOGOS = path.join(__dirname, '../src/TodosOsJogos/BotafogoJogos.js');
const PROXIMOS_JOGOS = path.join(__dirname, '../src/TodosOsJogos/ProximosJogos.js');

const proximosRaw = fs.readFileSync(PROXIMOS_JOGOS, 'utf8');
const botafogoRaw = fs.readFileSync(BOTAFOGO_JOGOS, 'utf8');

// Preserve original line endings
const lineEnding = proximosRaw.includes('\r\n') ? '\r\n' : '\n';
const proximosLines = proximosRaw.split(/\r?\n/);

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

// Check for duplicates already in BotafogoJogos.js (skip if already there)
const toInsert = [];
for (const line of linesToPromote) {
    const mMandante = line.match(/"mandante":\s*"([^"]+)"/);
    const mVisitante = line.match(/"visitante":\s*"([^"]+)"/);
    const mData = line.match(/"data":\s*"([^"]+)"/);
    if (!mMandante || !mVisitante || !mData) { toInsert.push(line); continue; }
    const key = `${mMandante[1]}|${mVisitante[1]}|${mData[1]}`;
    if (botafogoRaw.includes(`"data": "${mData[1]}"`)) {
        // More precise: check if that exact combination exists
        const exists = botafogoRaw.includes(`"mandante": "${mMandante[1]}"`) &&
                       botafogoRaw.includes(`"data": "${mData[1]}"`);
        if (exists) {
            console.log(`  Skipping duplicate: ${key}`);
            continue;
        }
    }
    toInsert.push(line);
    console.log(`  Promoting: ${mMandante[1]} vs ${mVisitante[1]} (${mData[1]})`);
}

if (toInsert.length === 0) {
    console.log('All finished games already exist in BotafogoJogos.js.');
    process.exit(0);
}

// Insert before jogos.sort(...) in BotafogoJogos.js
const insertBlock = toInsert.join(lineEnding) + lineEnding;
const newBotafogo = botafogoRaw.replace(/^(\s+jogos\.sort\()/m, insertBlock + '$1');

if (newBotafogo === botafogoRaw) {
    console.error('ERROR: Could not find jogos.sort() in BotafogoJogos.js — no changes written.');
    process.exit(1);
}

fs.writeFileSync(BOTAFOGO_JOGOS, newBotafogo);
fs.writeFileSync(PROXIMOS_JOGOS, keptLines.join(lineEnding));

console.log(`\nPromoted ${toInsert.length} game(s) to BotafogoJogos.js.`);
