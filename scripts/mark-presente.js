#!/usr/bin/env node
// One-time script: adds "presente": true to all games in BotafogoJogos.js
// that match games attended (from myLife database).
// Also adds "penaltis" field where applicable.
// Run from the jogosquefui root: node scripts/mark-presente.js

const fs = require('fs');
const path = require('path');

const MYLIFE_DB = path.join(__dirname, '../../myLife/database/jogos/index.jsx');
const BOTAFOGO_JOGOS = path.join(__dirname, '../src/TodosOsJogos/BotafogoJogos.js');

// --- Parse myLife database ---
const myLifeContent = fs.readFileSync(MYLIFE_DB, 'utf8');
const myLifeGames = [];
for (const line of myLifeContent.split('\n')) {
    const trimmed = line.trim().replace(/,$/, '');
    if (!trimmed.startsWith('{') || !trimmed.includes('"mandante"')) continue;
    try {
        const game = JSON.parse(trimmed);
        if (game.mandante && game.visitante && game.data) {
            myLifeGames.push(game);
        }
    } catch (e) {}
}

const myLifeMap = new Map(myLifeGames.map(g => [
    `${g.mandante}|${g.visitante}|${g.data}`,
    g
]));
console.log(`Parsed ${myLifeMap.size} attended games from myLife`);

// --- Process BotafogoJogos.js ---
const content = fs.readFileSync(BOTAFOGO_JOGOS, 'utf8');
const lines = content.split('\n');

let modified = 0;
const foundKeys = new Set();

const result = lines.map(line => {
    if (!line.includes('jogos.push(')) return line;

    const mMandante = line.match(/"mandante":\s*"([^"]+)"/);
    const mVisitante = line.match(/"visitante":\s*"([^"]+)"/);
    const mData = line.match(/"data":\s*"([^"]+)"/);

    if (!mMandante || !mVisitante || !mData) return line;

    const key = `${mMandante[1]}|${mVisitante[1]}|${mData[1]}`;

    if (myLifeMap.has(key)) {
        foundKeys.add(key);
        const ml = myLifeMap.get(key);
        let extras = ', "presente": true';
        if (ml.penaltis) extras += `, "penaltis": "${ml.penaltis}"`;
        // Insert before the closing });
        const newLine = line.replace(/\s*\}\);(\s*)$/, (_, tail) => extras + ' });' + tail);
        modified++;
        return newLine;
    }
    return line;
});

// --- Report ---
console.log(`\nMarked ${modified} games with presente: true`);

const notFound = [];
for (const [key, game] of myLifeMap) {
    if (!foundKeys.has(key)) {
        notFound.push({ key, game });
    }
}

if (notFound.length > 0) {
    console.log('\nNOT FOUND in jogosquefui (need to add manually):');
    notFound.forEach(({ key, game }) => {
        console.log(`  ${key}  (${game.campeonato})${game.penaltis ? '  penaltis:' + game.penaltis : ''}`);
    });
} else {
    console.log('\nAll myLife games were found in jogosquefui!');
}

fs.writeFileSync(BOTAFOGO_JOGOS, result.join('\n'));
console.log('\nBotafogoJogos.js updated successfully.');
