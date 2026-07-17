function jogos() {
    let jogos = [];

    jogos.push({ "mandante": "Santos", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-12-02", "estadio": "Vila Belmiro", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bahia", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-28", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "São Paulo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-21", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Corinthians", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-18", "estadio": "Neo Química Arena", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Atlético-MG", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-04", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Remo", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-28", "estadio": "Mangueirão", "presente": false });
    jogos.push({ "mandante": "Internacional", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-24", "estadio": "Beira-Rio", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Chapecoense", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-17", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Coritiba", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-10", "estadio": "Couto Pereira", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Vasco", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-07", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Mirassol", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-09-19", "estadio": "Maião", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Red Bull Bragantino", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-09-12", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Palmeiras", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-09-05", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Flamengo", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-29", "estadio": "Maracanã", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Athletico-PR", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-24", "estadio": "Nilton Santos", "horario": "20:00", "presente": false });
    jogos.push({ "mandante": "Vitória", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-16", "estadio": "Barradão", "horario": "18:30", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Fluminense", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-08", "estadio": "Nilton Santos", "horario": "21:00", "presente": false });
    //jogos.push({ "mandante": "Botafogo", "visitante": "Grêmio", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-07-29", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Cruzeiro", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-07-26", "estadio": "Mineirão", "horario": "16:00", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Vitória", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-07-23", "estadio": "Nilton Santos", "horario": "19:30", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Santos", "golsMandante": 2, "golsVisitante": 1, "campeonato": "Brasileirão 2026", "data": "2026-07-16", "estadio": "Nilton Santos", "horario": "19:30", "presente": true });

    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

export default jogos;
