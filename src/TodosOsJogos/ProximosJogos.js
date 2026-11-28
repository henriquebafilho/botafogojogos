function jogos() {
    let jogos = [];

    jogos.push({ "mandante": "Volta Redonda", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2027", "data": "2026-02-06", "estadio": "Raulino de Oliveira", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Flamengo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2027", "data": "2026-01-31", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Nova Iguaçu", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2027", "data": "2026-01-24", "estadio": "Laranjão", "presente": false });
    jogos.push({ "mandante": "Vasco", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2027", "data": "2026-01-20", "estadio": "São Januário", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bangu", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2027", "data": "2026-01-17", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Botafogo", "visitante": "Sampaio Corrêa-RJ", "golsMandante": "", "golsVisitante": "", "campeonato": "Carioca 2027", "data": "2026-01-13", "estadio": "Nilton Santos", "presente": false });
    jogos.push({ "mandante": "Santos", "visitante": "Botafogo", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-12-02", "estadio": "Vila Belmiro", "presente": false, "horario": "21:30" });
    jogos.push({ "mandante": "Botafogo", "visitante": "Bahia", "golsMandante": "", "golsVisitante": "", "campeonato": "Brasileirão 2026", "data": "2026-11-28", "estadio": "Nilton Santos", "presente": false, "horario": "21:00" });

    jogos.sort(function (a, b) {
        return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });

    return jogos;
}

export default jogos;
