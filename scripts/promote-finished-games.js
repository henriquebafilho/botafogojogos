#!/usr/bin/env node
// Moves finished games (real integer scores) from ProximosJogos.js to the
// most recent era file (BOTAFOGO_JOGOS below).
// Skips games where golsMandante/golsVisitante are still empty strings (unplayed).
// Inserts promoted lines before the first jogos.push() in that file.
//
// BotafogoJogos.js itself is just an aggregator (imports every era file) — it is
// never edited directly, so it can never be truncated by the GitHub mobile app.
// The historical games live in BotafogoJogos<era>.js files instead, each capped
// around ~1300 games so no single file gets anywhere near the size that caused
// silent truncation before. When BOTAFOGO_JOGOS below approaches ~4000 lines,
// split off a new era file and update this path plus BotafogoJogos.js.
//
// Usage: node scripts/promote-finished-games.js

const fs = require('fs');
const path = require('path');

const BOTAFOGO_JOGOS = path.join(__dirname, '../src/TodosOsJogos/BotafogoJogos2010a2026.js');
const ARCHIVE_FILES = [
    '../src/TodosOsJogos/BotafogoJogos1990a2009.js',
    '../src/TodosOsJogos/BotafogoJogos1970a1989.js',
    '../src/TodosOsJogos/BotafogoJogos1950a1969.js',
    '../src/TodosOsJogos/BotafogoJogos1900a1949.js',
].map(p => path.join(__dirname, p));
const PROXIMOS_JOGOS = path.join(__dirname, '../src/TodosOsJogos/ProximosJogos.js');

const proximosRaw = fs.readFileSync(PROXIMOS_JOGOS, 'utf8');
const botafogoRaw = fs.readFileSync(BOTAFOGO_JOGOS, 'utf8');
// Dedup check must look across every era file, not just the one we insert into,
// so a game already recorded in an older era is never promoted twice.
const allJogosRaw = botafogoRaw + ARCHIVE_FILES.map(f => fs.readFileSync(f, 'utf8')).join('\n');

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
        allJogosRaw.includes(`"mandante": "${mMandante[1]}"`) &&
        allJogosRaw.includes(`"data": "${mData[1]}"`);
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
