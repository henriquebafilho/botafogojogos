function jogos() {
    let jogos = [];

    jogos.push({ "mandante": "Santos", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-12-02", "estadio": "Vila Belmiro" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bahia", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-28", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "São Paulo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-21", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Corinthians", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-18", "estadio": "Neo Química Arena" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Atlético-MG", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-04", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Remo", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-28", "estadio": "Mangueirão" });
    jogos.push({ "mandante": "Internacional", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-24", "estadio": "Beira-Rio" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Chapecoense", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-17", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Coritiba", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-10", "estadio": "Couto Pereira" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Vasco", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-10-07", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Mirassol", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-09-19", "estadio": "Maião" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Red Bull Bragantino", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-09-12", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Palmeiras", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-09-05", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Flamengo", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-29", "estadio": "Maracanã" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Athletico-PR", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-22", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Vitória", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-15", "estadio": "Barradão" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Fluminense", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-08-08", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Grêmio", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-07-29", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Cruzeiro", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-07-25", "estadio": "Mineirão" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Santos", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-07-22", "estadio": "Nilton Santos" });
    jogos.push({ "mandante": "Dinamo Moscou", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Copa da Irmandade", "data": "2026-07-10", "estadio": "VTB Arena" });
    jogos.push({ "mandante": "CSKA", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Copa da Irmandade", "data": "2026-07-05", "estadio": "VEB Arena" });
    /*jogos.push({ "mandante": "Botafogo", "visitante": "Vitória", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-02-25", "estadio": "Nilton Santos" });*/ 
    
    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

export default jogos;
