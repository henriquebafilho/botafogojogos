#!/usr/bin/env node
// Syncs "presente: true" games from BotafogoJogos.js to myLife's database.
// Strategy:
//   1. Read all presente:true games from jogosquefui (source of truth).
//   2. Read existing myLife database.
//   3. For matched games: use jogosquefui data (picks up score corrections etc.).
//   4. For myLife games not in jogosquefui: keep them as-is (e.g. manually-added).
//   5. For new jogosquefui presente games not in myLife: add them.
//   6. Sort descending by date and write.
//
// Usage:
//   node scripts/sync-to-mylife.js [path-to-mylife-root]
//   Defaults to ../../myLife relative to this file.

const fs = require('fs');
const path = require('path');

const MYLIFE_ROOT = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.join(__dirname, '../../myLife');

const BOTAFOGO_JOGOS = path.join(__dirname, '../src/TodosOsJogos/BotafogoJogos.js');
const MYLIFE_DB = path.join(MYLIFE_ROOT, 'database/jogos/index.jsx');

// --- 1. Parse jogosquefui presente games ---
const jogosContent = fs.readFileSync(BOTAFOGO_JOGOS, 'utf8');
const jogosPresenteMap = new Map(); // key: "mandante|visitante|data"

for (const line of jogosContent.split('\n')) {
    if (!line.includes('jogos.push(') || !line.includes('"presente": true')) continue;

    const mMandante = line.match(/"mandante":\s*"([^"]+)"/);
    const mVisitante = line.match(/"visitante":\s*"([^"]+)"/);
    const mGolsM = line.match(/"golsMandante":\s*(\d+)/);
    const mGolsV = line.match(/"golsVisitante":\s*(\d+)/);
    const mCamp = line.match(/"campeonato":\s*"([^"]+)"/);
    const mData = line.match(/"data":\s*"([^"]+)"/);
    const mEstadio = line.match(/"estadio":\s*"([^"]+)"/);
    const mHorario = line.match(/"horario":\s*"([^"]+)"/);
    const mPenaltis = line.match(/"penaltis":\s*"([^"]+)"/);

    if (!mMandante || !mVisitante || !mData) continue;

    const game = {
        mandante: mMandante[1],
        visitante: mVisitante[1],
        golsMandante: parseInt(mGolsM[1]),
        golsVisitante: parseInt(mGolsV[1]),
        campeonato: mCamp[1],
        data: mData[1],
        estadio: mEstadio[1],
    };
    if (mHorario) game.horario = mHorario[1];
    if (mPenaltis) game.penaltis = mPenaltis[1];

    const key = `${game.mandante}|${game.visitante}|${game.data}`;
    jogosPresenteMap.set(key, game);
}

console.log(`Found ${jogosPresenteMap.size} presente games in jogosquefui`);

// --- 2. Parse myLife existing database ---
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

console.log(`Found ${myLifeGames.length} games in myLife`);

// --- 3 & 4. Merge ---
const merged = new Map(); // key -> game object (jogosquefui wins for matched)

// Add all jogosquefui presente games
for (const [key, game] of jogosPresenteMap) {
    merged.set(key, game);
}

// Add myLife games not in jogosquefui (preserve manual entries)
let manualCount = 0;
for (const game of myLifeGames) {
    const key = `${game.mandante}|${game.visitante}|${game.data}`;
    if (!jogosPresenteMap.has(key)) {
        merged.set(key, game);
        manualCount++;
        console.log(`  Preserving manual entry: ${key} (${game.campeonato})`);
    }
}

if (manualCount === 0) {
    console.log('  No manual-only entries found.');
}

// --- 5. Sort descending by date ---
const sorted = [...merged.values()].sort((a, b) => b.data.localeCompare(a.data));

// --- 6. Generate output ---
function gameToLine(g) {
    const fields = [
        `"mandante": "${g.mandante}"`,
        `"visitante": "${g.visitante}"`,
        `"golsMandante": ${g.golsMandante}`,
        `"golsVisitante": ${g.golsVisitante}`,
        `"campeonato": "${g.campeonato}"`,
        `"data": "${g.data}"`,
        `"estadio": "${g.estadio}"`,
    ];
    if (g.horario) fields.push(`"horario": "${g.horario}"`);
    if (g.penaltis) fields.push(`"penaltis": "${g.penaltis}"`);
    return `    { ${fields.join(', ')} }`;
}

const lines = sorted.map((g, i) => {
    const line = gameToLine(g);
    return i < sorted.length - 1 ? line + ',' : line;
});

const output = `let jogos = [\n${lines.join('\n')}\n];\n\nexport default jogos;\n`;

// --- Write ---
fs.writeFileSync(MYLIFE_DB, output);
console.log(`\nWrote ${sorted.length} games to ${MYLIFE_DB}`);
