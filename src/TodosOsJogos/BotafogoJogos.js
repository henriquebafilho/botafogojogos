import ProximosJogos from "./ProximosJogos";
import jogos2010a2026 from "./BotafogoJogos2010a2026";
import jogos1990a2009 from "./BotafogoJogos1990a2009";
import jogos1970a1989 from "./BotafogoJogos1970a1989";
import jogos1950a1969 from "./BotafogoJogos1950a1969";
import jogos1900a1949 from "./BotafogoJogos1900a1949";

let jogosCache = null;

function buildJogos() {
    let jogos = [
        ...jogos2010a2026,
        ...jogos1990a2009,
        ...jogos1970a1989,
        ...jogos1950a1969,
        ...jogos1900a1949,
    ];

    jogos = jogos.concat(ProximosJogos());

    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

function jogos() {
    if (jogosCache) {
        return jogosCache;
    }
    jogosCache = buildJogos();
    return jogosCache;
}

export default jogos;
