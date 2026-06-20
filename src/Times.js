const timesCache = new Map();

function Times(time, data) {
      const cacheKey = `${time || ''}|${data || ''}`;
      if (timesCache.has(cacheKey)) {
            return timesCache.get(cacheKey);
      }

      var nomeAtual, escudo, backgroundColor, letterColor, nomesAnteriores = [];

      if (data != null) {
            var dataCortada = data.split("-");
            var ano = parseInt(dataCortada[0]);
      }

      switch (time) {
            case "ABC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Deportes Quindío":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "#fde900";
                  break;
            case "Santiago Morning":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Niterói":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "CSKA Moscow":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#e51133";
                  letterColor = "#f5c400";
                  break;
            case "Dynamo Moscow":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Independiente Petrolero":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América-SC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Seleto":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Icasa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006c34";
                  letterColor = "white";
                  break;
            case "Barra da Tijuca":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#821229";
                  letterColor = "white";
                  break;
            case "Manchester-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0f2b46";
                  letterColor = "white";
                  break;
            case "Palmeiras-SC": case "Blumenau":
                  nomeAtual = "Blumenau";
                  escudo = time;
                  backgroundColor = time === "Palmeiras-SC" ? "#007700" : "#6e0621";
                  letterColor = "white";
                  nomesAnteriores = ["Palmeiras-SC"];
                  break;
            case "Africa Sports":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#018310";
                  letterColor = "white";
                  break;
            case "África do Sul":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "Água Santa":
                  nomeAtual = time;
                  escudo = "ÁguaSanta";
                  backgroundColor = "#153160";
                  letterColor = "white";
                  break;
            case "Ajax":
                  nomeAtual = time;
                  if (ano < 1991) {
                        escudo = "Ajax1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Al-Ahli":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00853f";
                  letterColor = "white";
                  break;
            case "Al-Ahly":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Arsenal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Asturias":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2e4d92";
                  letterColor = "white";
                  break;
            case "Atlético Chalaco":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Atlético Marte":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Austria Wien":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#441678";
                  letterColor = "white";
                  break;
            case "Al-Hilal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Alecrim":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01904e";
                  letterColor = "white";
                  break;
            case "Alegrense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#fde900";
                  break;
            case "Alianza Lima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#162545";
                  letterColor = "white";
                  break;
            case "Altos-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01904e";
                  letterColor = "white";
                  break;
            case "América de Cali":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América-MEX":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff200";
                  letterColor = "#343795";
                  break;
            case "Carabobo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#52100f";
                  letterColor = "#fdc300";
                  break;
            case "América-MG":
                  nomeAtual = time;
                  if (ano < 1933) {
                        escudo = "América-MG1933";
                        backgroundColor = "#048439";
                  } else if (ano >= 1933 && ano < 1942) {
                        escudo = "América-MG1942";
                        backgroundColor = "#d30a11";
                  } else if (ano >= 1942 && ano < 1971) {
                        escudo = "América-MG1971";
                        backgroundColor = "#048439";
                  } else {
                        escudo = time;
                        backgroundColor = "#048439";
                  }
                  letterColor = "white";
                  break;
            case "América-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Cantagalo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Mogiana":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#f4d41c";
                  break;
            case "Guarany de Bagé":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Santo Antônio":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América de Três Rios":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América-RN":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Byron":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Americano":
                  nomeAtual = time;
                  if (ano < 1954) {
                        escudo = "Americano1914";
                  } else if (ano >= 1954 && ano < 1980) {
                        escudo = "Americano1954";
                  } else if (ano >= 1980 && ano < 1990) {
                        escudo = "Americano1980";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Anapolina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Andarahy":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Argélia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Argentina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Aruba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#003a94";
                  break;
            case "Ascoli":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Atlante":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d9032c";
                  letterColor = "white";
                  break;
            case "Atlas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Athletic Bilbao":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Atlético-PR": case "Athletico-PR":
                  nomeAtual = "Athletico-PR";
                  if (time === "Atlético-PR") {
                        if (ano <= 1969) {
                              escudo = "Atlético-PR1969";
                        } else if (ano >= 1970 && ano <= 1989) {
                              escudo = "Atlético-PR1989";
                        } else if (ano > 1989 && ano < 1997) {
                              escudo = "Atlético-PR1996";
                        } else {
                              escudo = "Atlético-PR";
                        }
                  } else if (time === "Athletico-PR") {
                        escudo = "Athletico-PR";
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  nomesAnteriores = ["Atlético-PR"];
                  break;
            case "Atlético Nacional":
                  nomeAtual = time;
                  escudo = "AtléticoNacional";
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Atlético de Madrid":
                  nomeAtual = time;
                  if (ano < 1970) {
                        escudo = "Atlético de Madrid1950";
                  } else if (ano >= 1970 && ano < 2016) {
                        escudo = "Atlético de Madrid1970";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Atlético-GO":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "Atlético-GO2020"
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Atlético-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Aparecidense":
                  nomeAtual = time;
                  if (ano < 2022) {
                        escudo = "Aparecidense2022";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#00005e";
                  letterColor = "#c8ad51";
                  break;
            case "Audax Rio":
                  nomeAtual = time;
                  escudo = "AudaxRio";
                  backgroundColor = "#003a94";
                  letterColor = "#f48221";
                  break;
            case "Audax-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Audax Italiano":
                  nomeAtual = time;
                  escudo = "AudaxItaliano";
                  backgroundColor = "green";
                  letterColor = "white";
                  break;
            case "Aurora":
                  nomeAtual = time;
                  escudo = "Aurora";
                  backgroundColor = "#4ebde5";
                  letterColor = "white";
                  break;
            case "Auto Esporte":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#03953f";
                  letterColor = "white";
                  break;
            case "Auxerre":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0088c3";
                  letterColor = "white";
                  break;
            case "Baník Ostrava":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01619e";
                  letterColor = "white";
                  break;
            case "Bolívar":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#41a5d9";
                  letterColor = "white";
                  break;
            case "Avaí":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00468e";
                  letterColor = "white";
                  break;
            case "Bahia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0188d6";
                  letterColor = "white";
                  break;
            case "Banfield":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#03953f";
                  letterColor = "white";
                  break;
            case "Bangu":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Rot-Weiss Essen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Reims":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Troyes":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006eb2";
                  letterColor = "white";
                  break;
            case "Nurnberg":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#aa1124";
                  letterColor = "white";
                  break;
            case "Barra Mansa":
                  nomeAtual = time;
                  escudo = "BarraMansa";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Barcelona":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#a20046";
                  letterColor = "#fde900";
                  break;
            case "Barcelona de Guayaquil":
                  nomeAtual = time;
                  escudo = "BarcelonadeGuayaquil";
                  backgroundColor = "#fde900";
                  letterColor = "#055daa";
                  break;
            case "Bayern de Munique":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Benfica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Besiktas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Blooming":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Boa Esporte": case "Ituiutaba":
                  nomeAtual = "Boa Esporte";
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  nomesAnteriores = ["Ituiutaba"];
                  break;
            case "Boavista": case "Barreira":
                  nomeAtual = "Boavista";
                  if (ano >= 2004 && ano <= 2024) {
                        escudo = "Boavista2004";
                  } else if (ano < 2004) {
                        escudo = "Barreira";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  nomesAnteriores = ["Barreira"];
                  break;
            case "Boca Juniors":
                  nomeAtual = time;
                  escudo = "BocaJuniors";
                  backgroundColor = "#003a94";
                  letterColor = "#fcb000";
                  break;
            case "Bonsucesso":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1c4196";
                  letterColor = "white";
                  break;
            case "Borussia Monchengladbach":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Boston River":
                  nomeAtual = time;
                  escudo = "BostonRiver";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Botafogo":
                  nomeAtual = time;
                  if (ano < 1943) {
                        escudo = "Botafogo1942";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Botafogo-SP":
                  nomeAtual = time;
                  if (ano < 2021) {
                        escudo = "Botafogo-SP2021";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Botafogo-PB":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Bragantino": case "Red Bull Bragantino":
                  nomeAtual = "Red Bull Bragantino";
                  if (time === "Bragantino") {
                        escudo = "Bragantino";
                        backgroundColor = "white";
                        letterColor = "black";
                  } else if (time === "Red Bull Bragantino") {
                        escudo = "RedBullBragantino";
                        backgroundColor = "#d30a11";
                        letterColor = "white";
                  }
                  nomesAnteriores = ["Bragantino"];
                  break;
            case "Brasil":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#018036";
                  break;
            case "Brasil de Pelotas":
                  nomeAtual = time;
                  escudo = "BrasildePelotas";
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Brasília":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Brasiliense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fede00";
                  letterColor = "black";
                  break;
            case "Brusque":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "red";
                  break;
            case "Cabofriense": case "Cabo Frio":
                  nomeAtual = "Cabofriense";
                  if (ano < 1997) {
                        escudo = "Cabofriense1997";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  nomesAnteriores = ["Cabo Frio"];
                  break;
            case "Cádiz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff200";
                  letterColor = "#003a94";
                  break;
            case "Caldense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#096943";
                  letterColor = "white";
                  break;
            case "Camarões":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "#fbd81b";
                  break;
            case "Campinense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Campo Grande-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Canto do Rio":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#101377";
                  letterColor = "white";
                  break;
            case "Capivariano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Caracas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Cardiff City":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cardoso Moreira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Carioca FC":
                  nomeAtual = time;
                  if (ano < 1933) {
                        escudo = "Carioca FC1933";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Cattete":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#193D8B";
                  letterColor = "white";
                  break;
            case "Umuarama":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#158e3d";
                  letterColor = "#f7d611";
                  break;
            case "Caxias": case "Associação Caxias":
                  nomeAtual = "Caxias";
                  escudo = time;
                  if (time === "Associação Caxias") {
                        backgroundColor = "black";
                        letterColor = "white";
                  } else {
                        backgroundColor = "#7B1138";
                        letterColor = "white";
                  }
                  break;
            case "Ceará":
                  nomeAtual = time;
                  if (ano < 1970) {
                        escudo = "Ceará1954";
                  } else if (ano >= 1970 && ano < 2003) {
                        escudo = "Ceará1970";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Ceilândia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Celta de Vigo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#43a1d5";
                  letterColor = "white";
                  break;
            case "CENE":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "black";
                  break;
            case "Cerezo Osaka":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1d237b";
                  letterColor = "white";
                  break;
            case "Cerro Porteño":
                  nomeAtual = time;
                  escudo = "CerroPorteño";
                  backgroundColor = "#c40215";
                  letterColor = "#073756";
                  break;
            case "César Vallejo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d77000";
                  letterColor = "#0B254A";
                  break;
            case "CEUB":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "#003a94";
                  break;
            case "Chapecoense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00913c";
                  letterColor = "white";
                  break;
            case "Charleroi":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Charlton Athletic":
                  nomeAtual = time;
                  escudo = "CharltonAthletic";
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Chile":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Chivas Guadalajara":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Chur":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Cocotá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Colo-Colo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Colón":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Colorado":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Comercial-MS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Comercial-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Confiança":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Confiança-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Congo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#059bd9";
                  letterColor = "white";
                  break;
            case "Coreia do Sul": case "Coreia do Sul Sub-23":
                  nomeAtual = "Coreia do Sul";
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Corinthians":
                  nomeAtual = time;
                  if (ano < 1939) {
                        escudo = "Corinthians1919";
                  } else if (ano >= 1939 && ano < 1979) {
                        escudo = "Corinthians1979";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Corisabbá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Coritiba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "Corumbaense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Coruripe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "CRB":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Standard de Liège":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Friburgo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Oro":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fbbe11";
                  letterColor = "#0b2865";
                  break;
            case "Presidente Hayes":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Zacatepec":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006a59";
                  letterColor = "white";
                  break;
            case "Zamalek":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Murcia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fde900";
                  break;
            case "Malmo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2f97da";
                  letterColor = "white";
                  break;
            case "Southampton":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "FAS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Slavia Praga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Juventud Asturiana":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Dublin":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Criciúma":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "black";
                  break;
            case "Bahia de Feira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Ypiranga-BA":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f3b600";
                  letterColor = "black";
                  break;
            case "Duquecaxiense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "#003a94";
                  break;
            case "CFZ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "União Carvalheira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Olímpica de Lavras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Usina Ceará":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cruzeiro": case "Palestra Itália-MG":
                  nomeAtual = "Cruzeiro";
                  if (time === "Cruzeiro") {
                        if (ano >= 1950 && ano < 1996) {
                              escudo = "Cruzeiro1996";
                        } else if (ano < 1950) {
                              escudo = "Cruzeiro1942";
                        } else {
                              escudo = time;
                        }
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  nomesAnteriores = ["Palestra Itália-MG"];
                  break;
            case "Le Havre":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003259";
                  letterColor = "white";
                  break;
            case "Jequié":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00008e";
                  letterColor = "#fdd116";
                  break;
            case "Real Oviedo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Grasshopper":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "El Salvador":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Curaçau":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#fde900";
                  break;
            case "Espanyol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Real Club España":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Estados Unidos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Dínamo Zagreb":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Universidad Central":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Deportivo Italia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Real Madrid":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "#003a94";
                  break;
            case "Crystal Palace":
                  nomeAtual = time;
                  escudo = "CrystalPalace";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "CSA":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cuba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cuiabá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#018036";
                  letterColor = "white";
                  break;
            case "Deportivo Cali":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Deportivo La Coruña":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Deportivo Lara":
                  nomeAtual = time;
                  escudo = "DeportivoLara";
                  backgroundColor = "#e30613";
                  letterColor = "white";
                  break;
            case "Deportivo Municipal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Deportivo Quito":
                  nomeAtual = time;
                  escudo = "DeportivoQuito";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Deportivo Tachira":
                  nomeAtual = time;
                  escudo = "DeportivoTachira";
                  backgroundColor = "#f2d902";
                  letterColor = "black";
                  break;
            case "Defensa y Justicia":
                  nomeAtual = time;
                  escudo = "DefensayJusticia";
                  backgroundColor = "#fde900";
                  letterColor = "#018036";
                  break;
            case "Defensor":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#784684";
                  letterColor = "white";
                  break;
            case "Defensor Lima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8b0015";
                  letterColor = "white";
                  break;
            case "Democrata GV":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Democrata SL":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Ribeiro Junqueira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Desportiva Ferroviária":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#5C1422";
                  letterColor = "white";
                  break;
            case "Dom Pedro":
                  nomeAtual = time;
                  escudo = "DomPedro";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Brentford":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Burnley":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#6a003a";
                  letterColor = "white";
                  break;
            case "Duque de Caxias":
                  nomeAtual = time;
                  escudo = "DuquedeCaxias";
                  backgroundColor = "#003a94";
                  letterColor = "#f48221";
                  break;
            case "Leo Victor":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f48221";
                  letterColor = "black";
                  break;
            case "Dynamo de Kiev":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Litoral":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#3c7a22";
                  letterColor = "white";
                  break;
            case "Emelec":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Emirados Árabes Unidos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Engenho de Dentro":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#02086B";
                  letterColor = "white";
                  break;
            case "Entrerriense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Equador":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "Equador2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#fde900";
                  letterColor = "#13007c";
                  break;
            case "Estrela Vermelha":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Estudiantes":
                  nomeAtual = time;
                  if (ano < 2011) {
                        escudo = "Estudiantes2011";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Everton":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Everton de Viña del Mar":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#ebd927";
                  break;
            case "Fast Clube":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#000D69";
                  letterColor = "white";
                  break;
            case "Fenerbahçe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffec00";
                  letterColor = "#153961";
                  break;
            case "Ferencváros":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Ferroviária":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#511a1d";
                  letterColor = "white";
                  break;
            case "Ferroviário-CE":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Valeriodoce":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Catanduva":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#17116b";
                  letterColor = "#fbef1e";
                  break;
            case "Internacional de Bebedouro":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América SJ Rio Preto":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Ferroviário-PR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Figueirense":
                  nomeAtual = time;
                  if (ano < 1974) {
                        escudo = "Figueirense1974";
                  } else if (ano >= 1974 && ano < 1980) {
                        escudo = "Figueirense1980";
                  } else if (ano >= 1980 && ano < 1999) {
                        escudo = "Figueirense1999";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Finlândia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Flamengo":
                  nomeAtual = time;
                  if (ano < 2018) {
                        escudo = "Flamengo2018";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Flamengo-PI":
                  nomeAtual = time;
                  if (ano < 2023) {
                        escudo = "Flamengo-PI2023";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Alajuelense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Independiente Rivadavia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2a1972";
                  letterColor = "white";
                  break;
            case "Melgar":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Feyenoord":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Comunicaciones":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#5598cf";
                  letterColor = "#243b81";
                  break;
            case "Sport Boys":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffadcc";
                  letterColor = "black";
                  break;
            case "Toulouse":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#38284f";
                  letterColor = "white";
                  break;
            case "Budapest Honvéd":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Anderlecht":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#54308c";
                  letterColor = "white";
                  break;
            case "Angers":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Floresta":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#87c53f";
                  letterColor = "#036c3c";
                  break;
            case "Fluminense":
                  nomeAtual = time;
                  if (ano >= 1902 && ano < 1905) {
                        escudo = "Fluminense1902";
                        backgroundColor = "grey";
                  } else if (ano >= 1905 && ano < 1950) {
                        escudo = "Fluminense1905";
                        backgroundColor = "#9f022f";
                  } else if (ano >= 1950 && ano < 2002) {
                        escudo = "Fluminense1950";
                        backgroundColor = "#9f022f";
                  } else {
                        escudo = time;
                        backgroundColor = "#9f022f";
                  }
                  letterColor = "white";
                  break;
            case "Fluminense de Araguari":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#9f022f";
                  letterColor = "white";
                  break;
            case "Comercial-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#9f022f";
                  letterColor = "white";
                  break;
            case "Fluminense de Feira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006940";
                  letterColor = "white";
                  break;
            case "Pastoril":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#03923c";
                  letterColor = "white";
                  break;
            case "Royal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#7a0017";
                  letterColor = "white";
                  break;
            case "Saarbrucken":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#004f9e";
                  letterColor = "#ffdc00";
                  break;
            case "Tchecoslováquia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#db2222";
                  letterColor = "white";
                  break;
            case "Uberaba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Capital":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#30a7eb";
                  letterColor = "black";
                  break;
            case "Uberlândia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#008c45";
                  letterColor = "white";
                  break;
            case "Vojvodina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ed1c25";
                  letterColor = "white";
                  break;
            case "Willem II":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#242c51";
                  letterColor = "white";
                  break;
            case "Internacional de Petrópolis":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Syrio-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Guarani-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Luziânia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8dc6e4";
                  letterColor = "#012b5b";
                  break;
            case "Olympic":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#134294";
                  letterColor = "white";
                  break;
            case "Tijuco":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Usipa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#01984b";
                  letterColor = "white";
                  break;
            case "Tamoio":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Metalúrgico":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#252c61";
                  break;
            case "Football and Athletic": case "Associação Internacional-RJ":
                  nomeAtual = "Football and Athletic";
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  nomesAnteriores = ["Associação Internacional-RJ", "Athletic-RJ"];
                  break;
            case "Áustria":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Smart":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Villa Nova":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d20001";
                  letterColor = "white";
                  break;
            case "Marcílio Dias":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#000078";
                  letterColor = "white";
                  break;
            case "Obreros": case "Cruz Azul Hidalgo":
                  nomeAtual = "Cruz Azul Hidalgo";
                  escudo = time;
                  backgroundColor = "#002664";
                  letterColor = "white";
                  nomesAnteriores = ["Obreros"];
                  break;
            case "Fortaleza":
                  nomeAtual = time;
                  if (ano < 1982) {
                        escudo = "Fortaleza1963";
                  } else if (ano >= 1982 && ano < 2000) {
                        escudo = "Fortaleza1982";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#11519b";
                  letterColor = "white";
                  break;
            case "Potyguar":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#11519b";
                  letterColor = "white";
                  break;
            case "Friburguense": case "Fluminense Nova Friburgo":
                  nomeAtual = "Friburguense";
                  if (ano < 1980) {
                        escudo = "Fluminense Nova Friburgo";
                        backgroundColor = "#20418e";
                  } else {
                        escudo = time;
                        backgroundColor = "#003a94";
                  }
                  letterColor = "white";
                  nomesAnteriores = ["Fluminense Nova Friburgo"];
                  break;
            case "Galícia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Portugal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#e42518";
                  letterColor = "#d3c084";
                  break;
            case "Venezuela":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#510e26";
                  letterColor = "#bd9b52";
                  break;
            case "Tenerife":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Karlsruhe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "IFK Norrkoping":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Germânia-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#172562";
                  letterColor = "white";
                  break;
            case "Gama":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#026b4a";
                  letterColor = "white";
                  break;
            case "La Salle":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f6ec13";
                  letterColor = "#ed272b";
                  break;
            case "Lens":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f6ec13";
                  letterColor = "#ed272b";
                  break;
            case "ÚDA de Praga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f6ec13";
                  letterColor = "#ed272b";
                  break;
            case "Goiânia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Goiás":
                  nomeAtual = time;
                  if (ano < 2019) {
                        escudo = "Goiás2019";
                  } else if (ano >= 2019 && ano <= 2020) {
                        escudo = "Goiás2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#006437";
                  letterColor = "white";
                  break;
            case "Goréenne":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Goytacaz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Grêmio":
                  nomeAtual = time;
                  if (ano < 1963) {
                        escudo = "Grêmio1963";
                  } else if (ano >= 1963 && ano < 1980) {
                        escudo = "Grêmio1980";
                  } else if (ano >= 1980 && ano < 2000) {
                        escudo = "Grêmio2000";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#0d80bf";
                  letterColor = "black";
                  break;
            case "Grêmio Barueri": case "Grêmio Prudente":
                  nomeAtual = "Grêmio Prudente";
                  escudo = time;
                  backgroundColor = "#f6e815";
                  letterColor = "#003c6e";
                  nomesAnteriores = ["Grêmio Barueri"];
                  break;
            case "Grêmio Maringá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Groningen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Guarani":
                  nomeAtual = time;
                  if (ano < 1981) {
                        escudo = "Guarani1949";
                  } else if (ano >= 1981 && ano < 2000) {
                        escudo = "Guarani1981";
                  } else if (ano >= 2000 && ano < 2007) {
                        escudo = "Guarani2000";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Guarani-PAR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "black";
                  break;
            case "Guiana Francesa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fcdd08";
                  letterColor = "#057a2c";
                  break;
            case "Haddock Lobo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#795228";
                  letterColor = "white";
                  break;
            case "Hajduk Split":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Hellênico":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Floriano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Rio Branco-PR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Hibernian":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#327341";
                  letterColor = "white";
                  break;
            case "Honduras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#075798";
                  letterColor = "white";
                  break;
            case "Huelva":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Independiente":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Rio Branco-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fb37b9";
                  letterColor = "black";
                  break;
            case "Independiente Del Valle":
                  nomeAtual = time;
                  if (ano < 2019) {
                        escudo = "IndependienteDelValle2019";
                  } else {
                        escudo = "IndependienteDelValle";
                  }
                  backgroundColor = "#fb37b9";
                  letterColor = "white";
                  break;
            case "Independiente Medellín":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#252c61";
                  break;
            case "Independiente Santa Fé":
                  nomeAtual = time;
                  escudo = "IndependienteSantaFé";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Inter de Limeira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Inter Miami":
                  nomeAtual = time;
                  escudo = "InterMiami";
                  backgroundColor = "#F4B5CD";
                  letterColor = "black";
                  break;
            case "Internacional":
                  nomeAtual = time;
                  if (ano < 1960) {
                        escudo = "Internacional1960";
                  } else if (ano >= 1960 && ano < 1982) {
                        escudo = "Internacional1982";
                  } else if (ano >= 1982 && ano < 2009) {
                        escudo = "Internacional2009";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Internacional-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Ipatinga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Iraque":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Itabaiana":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Itabuna":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0F0490";
                  letterColor = "white";
                  break;
            case "Itaperuna":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Ituano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Jamaica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#39b54a";
                  letterColor = "#fff200";
                  break;
            case "Japão":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Jeanne d'Arc":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "JEF United Ichihara":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffe400";
                  letterColor = "#006d2c";
                  break;
            case "Ji-Paraná":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1b93d1";
                  letterColor = "white";
                  break;
            case "Joinville":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Jorge Wilstermann":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Juazeirense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "#d30a11";
                  break;
            case "Junior Barranquilla":
                  nomeAtual = time;
                  escudo = "JuniorBarranquilla";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Juventude":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Tuna Luso":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Tiradentes-DF":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Nova Venécia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Taguatinga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#000079";
                  letterColor = "white";
                  break;
            case "Nacional de Patos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#006649";
                  letterColor = "white";
                  break;
            case "Baraúnas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Santos-ES":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#263b96";
                  letterColor = "white";
                  break;
            case "Atlético de Cajazeiras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#313491";
                  letterColor = "white";
                  break;
            case "Colatina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0a1780";
                  letterColor = "white";
                  break;
            case "Cartaginés":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#252d69";
                  letterColor = "white";
                  break;
            case "Ipiranga de Manhuaçu":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Portuguesa Santista":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Juventus":
                  nomeAtual = time;
                  if (ano < 2004) {
                        escudo = "Juventus1990";
                  } else if (ano >= 2004 && ano < 2017) {
                        escudo = "Juventus2004";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Juventus-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#6a023c";
                  letterColor = "white";
                  break;
            case "Juventus-SC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#6a023c";
                  letterColor = "white";
                  break;
            case "Kenitra":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#038b5d";
                  letterColor = "white";
                  break;
            case "Koln":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Fabril":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Araxá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Araranguá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fbbd08";
                  letterColor = "#003a94";
                  break;
            case "Inter de Lages":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Kuwait": case "Kuwait Sub-20":
                  nomeAtual = "Kuwait";
                  escudo = "Kuwait";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "KV Mechelen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffe500";
                  letterColor = "#e32213";
                  break;
            case "LDU":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "#003a94";
                  break;
            case "Leeds United":
                  nomeAtual = time;
                  if (ano <= 1991) {
                        escudo = "LeedsUnited1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "#003a94";
                  break;
            case "León":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "#fde900";
                  break;
            case "Lille":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Linense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Londrina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1b93d1";
                  letterColor = "white";
                  break;
            case "Luverdense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8bc23d";
                  letterColor = "#426d33";
                  break;
            case "Macaé":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#41afeb";
                  letterColor = "white";
                  break;
            case "Maccabi Netanya":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#feea00";
                  letterColor = "black";
                  break;
            case "Madureira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#13007c";
                  break;
            case "Herediano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#d30a11";
                  break;
            case "Nacional de Rosário":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#718fc8";
                  letterColor = "white";
                  break;
            case "Racing-URU":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#40682d";
                  letterColor = "white";
                  break;
            case "Racing Paris":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#76afe3";
                  letterColor = "white";
                  break;
            case "First Vienna":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fde900";
                  letterColor = "#003a94";
                  break;
            case "Magallanes":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#43a1d5";
                  letterColor = "white";
                  break;
            case "Málaga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00489a";
                  letterColor = "white";
                  break;
            case "Mali":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f7cd31";
                  letterColor = "#24884f";
                  break;
            case "Mangueira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Maranhão":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#11519b";
                  letterColor = "white";
                  break;
            case "Maricá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Marília":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#54a9d8";
                  letterColor = "white";
                  break;
            case "Martinica":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00a650";
                  letterColor = "white";
                  break;
            case "Mavilis":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Mesquita":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Metropol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2A6438";
                  letterColor = "white";
                  break;
            case "México":
                  nomeAtual = time;
                  if (ano < 2022) {
                        escudo = "México2022";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Milan":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Millonarios":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Minervén":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#18407D";
                  letterColor = "white";
                  break;
            case "Mirassol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffec00";
                  letterColor = "#00722c";
                  break;
            case "Mixto":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Mogi Mirim":
                  nomeAtual = time;
                  escudo = "MogiMirim";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Moto Club":
                  nomeAtual = time;
                  escudo = "MotoClub";
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Monarcas Morelia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fae700";
                  letterColor = "#e22227";
                  break;
            case "Córdoba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#016139";
                  letterColor = "white";
                  break;
            case "Monterrey":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0a2240";
                  letterColor = "white";
                  break;
            case "Montevideo Wanderers":
                  nomeAtual = time;
                  escudo = "MontevideoWanderers";
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Nacional-AM":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#F5D94D";
                  break;
            case "Nacional-PAR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#163fb3";
                  letterColor = "white";
                  break;
            case "Nacional-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Nacional-URU":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#172b8c";
                  letterColor = "white";
                  break;
            case "Nancy":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nantes":
                  nomeAtual = time;
                  if (ano <= 1993) {
                        escudo = "Nantes1993";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#ffdc00";
                  letterColor = "#00a558";
                  break;
            case "Napoli":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0099da";
                  letterColor = "white";
                  break;
            case "Náutico":
                  nomeAtual = time;
                  if (ano < 2008) {
                        escudo = "Náutico2008";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Newcastle":
                  nomeAtual = time;
                  if (ano < 1988) {
                        escudo = "Newcastle1988";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Noroeste":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nottingham Forest":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nova Cidade":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Nova Iguaçu":
                  nomeAtual = time;
                  escudo = "NovaIguaçu";
                  backgroundColor = "#d77000";
                  letterColor = "black";
                  break;
            case "Novorizontino":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdd116";
                  letterColor = "black";
                  break;
            case "Oeste":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Olaria":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Olimpia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Olympiacos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Once Caldas":
                  nomeAtual = time;
                  escudo = "OnceCaldas";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário-PR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário-MS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Operário-MT":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Orgryte IS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#940c23";
                  letterColor = "white";
                  break;
            case "Oriente Petrolero":
                  nomeAtual = time;
                  escudo = "OrientePetrolero";
                  backgroundColor = "#007c3a";
                  letterColor = "white";
                  break;
            case "Pachuca":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#023866";
                  letterColor = "white";
                  break;
            case "Associação das Palmeiras":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Fonseca":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Calouros do Ar":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Passense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#086a30";
                  letterColor = "white";
                  break;
            case "Palmeiras": case "Palestra Itália-SP":
                  nomeAtual = "Palmeiras";
                  escudo = time;
                  backgroundColor = "#086a30";
                  letterColor = "white";
                  nomesAnteriores = ["Palestra Itália-SP"];
                  break;
            case "Fortuna '54":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "#fde900";
                  break;
            case "Palmeiras-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2354A0";
                  letterColor = "white";
                  break;
            case "Panamá":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Panathinaikos":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Paraná":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Paris Saint-Germain":
                  nomeAtual = time;
                  if (ano < 1990) {
                        escudo = "Paris Saint-Germain1990";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#004170";
                  letterColor = "white";
                  break;
            case "Partizan":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Patronato":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Paulista":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Paulistano-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Paysandu":
                  nomeAtual = time;
                  if (ano < 1970) {
                        escudo = "Paysandu1970";
                  } else if (ano >= 1970 && ano < 2002) {
                        escudo = "Paysandu1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#0091cf";
                  letterColor = "white";
                  break;
            case "Paysandu-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Peñarol":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fdca01";
                  letterColor = "black";
                  break;
            case "Peterborough United":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0067b4";
                  letterColor = "white";
                  break;
            case "Petro Atlético":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f7e030";
                  letterColor = "#001d7e";
                  break;
            case "Petrolina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f5182e";
                  letterColor = "white";
                  break;
            case "Petropolitano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Paulistano-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d7171e";
                  letterColor = "white";
                  break;
            case "Germânia-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0061cc";
                  letterColor = "black";
                  break;
            case "Internacional-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#da251c";
                  letterColor = "black";
                  break;
            case "Americano-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0f8f3d";
                  letterColor = "white";
                  break;
            case "América-PE":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#257524";
                  letterColor = "white";
                  break;
            case "Pinheiros": case "Água Verde":
                  nomeAtual = "Pinheiros";
                  escudo = time;
                  backgroundColor = time === "Água Verde" ? "#007c3e" : "#003a94";
                  letterColor = "white";
                  nomesAnteriores = ["Água Verde"];
                  break;
            case "Plymouth Argyle":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#034537";
                  letterColor = "white";
                  break;
            case "Posco Atoms": case "Pohang Steelers":
                  nomeAtual = "Pohang Steelers";
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  nomesAnteriores = ["Posco Atoms"];
                  break;
            case "Ponte Preta":
                  nomeAtual = time;
                  escudo = "PontePreta";
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Porto":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Porto Alegre-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Portsmouth":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#041383";
                  letterColor = "white";
                  break;
            case "Portuguesa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Portuguesa-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Progreso":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fdd120";
                  break;
            case "Puebla":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#012851";
                  letterColor = "white";
                  break;
            case "Puntarenas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ec6e00";
                  letterColor = "black";
                  break;
            case "Quissamã":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Racing":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#029cdc";
                  letterColor = "white";
                  break;
            case "Sedan":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00974b";
                  letterColor = "white";
                  break;
            case "Racing Club-CAR":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#30358d";
                  letterColor = "white";
                  break;
            case "Rangers":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0032a0";
                  letterColor = "white";
                  break;
            case "Real Garcilaso":
                  nomeAtual = time;
                  escudo = "RealGarcilaso";
                  backgroundColor = "#0197ee";
                  letterColor = "#fdf21c";
                  break;
            case "Red Bull Brasil":
                  nomeAtual = time;
                  escudo = "RedBullBrasil";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Botafogo-BA":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "América de Teófilo Otoni":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Guarani de Ponta Grossa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Reggina":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#841230";
                  letterColor = "white";
                  break;
            case "Remo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#09153b";
                  letterColor = "white";
                  break;
            case "Anápolis":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Carlos Renaux":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Cruzeiro-RS":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Piauí":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Social":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Colo-Colo-BA":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#fbbd08";
                  break;
            case "Força e Luz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Resende":
                  nomeAtual = time;
                  if (ano >= 2020 || ano < 2024) {
                        escudo = "Resende2020";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Riachuelo":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "Rio Branco-AC":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Rio Branco-ES":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Rio Cricket":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#088a4e";
                  letterColor = "white";
                  break;
            case "Fulham":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Huracán":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "Necaxa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Hepacaré":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Saad":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#212d83";
                  letterColor = "white";
                  break;
            case "Atlético de Três Corações":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Rio Negro":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Rio Preto":
                  nomeAtual = time;
                  escudo = "RioPreto";
                  backgroundColor = "#00923f";
                  letterColor = "white";
                  break;
            case "Athletic":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "River-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "River-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Nacional Potosí":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "River Plate":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "RiverPlate2022";
                  } else {
                        escudo = "RiverPlate";
                  }
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "River Plate-SE":
                  nomeAtual = time;
                  escudo = "RiverPlate-SE";
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "River Plate-URU":
                  nomeAtual = time;
                  escudo = "RiverPlate-URU";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Robinhood":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Roma":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#a61d37";
                  letterColor = "#f6821f";
                  break;
            case "Romênia":
                  nomeAtual = time;
                  if (ano < 2017) {
                        escudo = "Romênia2017";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#fde900";
                  letterColor = "#003a94";
                  break;
            case "Rosario Central":
                  nomeAtual = time;
                  escudo = "RosarioCentral";
                  backgroundColor = "#003a94";
                  letterColor = "#ffcc00";
                  break;
            case "Salernitana":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#831d1c";
                  letterColor = "#f7b617";
                  break;
            case "Sampaio Corrêa":
                  nomeAtual = time;
                  escudo = "SampaioCorrêa";
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "Sampaio Corrêa-RJ":
                  nomeAtual = time;
                  escudo = "SampaioCorrêa-RJ";
                  backgroundColor = "#00479c";
                  letterColor = "#ffc413";
                  break;
            case "San José":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "San Lorenzo":
                  nomeAtual = time;
                  escudo = "SanLorenzo";
                  backgroundColor = "#c40215";
                  letterColor = "#0a2240";
                  break;
            case "Santa Cruz":
                  nomeAtual = time;
                  if (ano < 1950) {
                        escudo = "SantaCruz1950";
                  } else if (ano >= 1950 && ano < 1959) {
                        escudo = "SantaCruz1958";
                  } else if (ano === 1959) {
                        escudo = "SantaCruz1959";
                  } else if (ano > 1959 && ano < 1965) {
                        escudo = "SantaCruz1960";
                  } else if (ano >= 1965 && ano < 1970) {
                        escudo = "SantaCruz1965";
                  } else if (ano >= 1970 && ano < 1979) {
                        escudo = "SantaCruz1970";
                  } else if (ano >= 1980 && ano < 1989) {
                        escudo = "SantaCruz1980";
                  } else {
                        escudo = "SantaCruz";
                  }
                  backgroundColor = "white";
                  letterColor = "#d30a11";
                  break;
            case "Santiago Wanderers":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#137049";
                  letterColor = "white";
                  break;
            case "Ypiranga de Niterói":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Torre":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Tupynambás":
                  nomeAtual = time;
                  if (ano < 2023) {
                        escudo = "Tupynambás2023";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "União Esportiva":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Everest":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fbdf30";
                  letterColor = "#013f92";
                  break;
            case "Argentino":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#0089e2";
                  letterColor = "white";
                  break;
            case "Asas de Lagoa Santa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#de2921";
                  letterColor = "#02285a";
                  break;
            case "Atlético Operário":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#257524";
                  letterColor = "white";
                  break;
            case "Santos":
                  nomeAtual = time;
                  if (ano < 1925) {
                        escudo = "Santos1925";
                  } else if (ano < 1991 && ano > 1924) {
                        escudo = "Santos1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Santo André":
                  nomeAtual = time;
                  escudo = "SantoAndré";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Bernardo":
                  nomeAtual = time;
                  if (ano < 2020) {
                        escudo = "SãoBernardo2020";
                  } else {
                        escudo = "SãoBernardo";
                  }
                  backgroundColor = "#ffdd00";
                  letterColor = "black";
                  break;
            case "São Bento":
                  nomeAtual = time;
                  escudo = "SãoBento";
                  backgroundColor = "#0067ab";
                  letterColor = "white";
                  break;
            case "São Caetano":
                  nomeAtual = time;
                  escudo = "SãoCaetano";
                  backgroundColor = "#212568";
                  letterColor = "white";
                  break;
            case "Aymorés":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#213b86";
                  letterColor = "white";
                  break;
            case "Holanda":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#f36b22";
                  letterColor = "white";
                  break;
            case "Sparta Praga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#c71a1a";
                  letterColor = "white";
                  break;
            case "Valdez":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#007952";
                  letterColor = "white";
                  break;
            case "Slovan Bratislava":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2cb2e7";
                  letterColor = "white";
                  break;
            case "São Cristóvão":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "São José-SP":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Paulo":
                  nomeAtual = time;
                  if (ano < 1982) {
                        escudo = "SãoPaulo1982";
                  } else {
                        escudo = "SãoPaulo";
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "São Paulo Athletic":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Raimundo-AM":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "São Raimundo-PA":
                  nomeAtual = time;
                  escudo = "SãoRaimundo-PA";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "São Raimundo-RR":
                  nomeAtual = time;
                  escudo = "SãoRaimundo-RR";
                  backgroundColor = "#013fae";
                  letterColor = "white";
                  break;
            case "Saprissa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#7b123d";
                  letterColor = "white";
                  break;
            case "SC Americano-RJ":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "SC Brasil":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Vietnã":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fde900";
                  break;
            case "Seattle Sounders":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2dc84d";
                  letterColor = "#0033a0";
                  break;
            case "Sergipe":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Serrano":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#123293";
                  letterColor = "white";
                  break;
            case "Servette":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#85142b";
                  letterColor = "white";
                  break;
            case "Sevilla":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Shandong Luneng":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ff6600";
                  letterColor = "white";
                  break;
            case "Shonan Bellmare": case "Hiratsuka Bellmare":
                  nomeAtual = "Shonan Bellmare";
                  escudo = time;
                  backgroundColor = "#65b721";
                  letterColor = "#0b408d";
                  nomesAnteriores = ["Hiratsuka Bellmare"];
                  break;
            case "Síria":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sobradinho":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "yellow";
                  break;
            case "Sol de America":
                  nomeAtual = time;
                  escudo = "SoldeAmerica";
                  backgroundColor = "#075798";
                  letterColor = "white";
                  break;
            case "Spartak Trnava":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sport":
                  nomeAtual = time;
                  if (ano < 1920) {
                        escudo = "Sport1919";
                  } else if ((ano >= 1920 && ano < 1955) || (ano >= 1963 && ano < 1999)) {
                        escudo = "Sport1920";
                  } else if (ano >= 1955 && ano < 1963) {
                        escudo = "Sport1955";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Sporting":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#186e45";
                  letterColor = "white";
                  break;
            case "Sport-MG":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00a750";
                  letterColor = "white";
                  break;
            case "Saint-Étienne":
                  nomeAtual = time;
                  if (ano < 2022) {
                        escudo = "Saint-Étienne2022";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#006a32";
                  letterColor = "white";
                  break;
            case "Sporting Cristal":
                  nomeAtual = time;
                  escudo = "SportingCristal";
                  backgroundColor = "#0d80bf";
                  letterColor = "white";
                  break;
            case "Sporting de Gijón":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Stabaek":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#002c5a";
                  letterColor = "white";
                  break;
            case "Stafa":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Syrio e Libanez":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Talleres":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#040d2d";
                  letterColor = "white";
                  break;
            case "Taubaté":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Parnahyba":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#13245a";
                  letterColor = "white";
                  break;
            case "Central":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Tigres do Brasil":
                  nomeAtual = time;
                  escudo = "TigresdoBrasil";
                  backgroundColor = "#fde900";
                  letterColor = "#048439";
                  break;
            case "Tiradentes-PI":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#fde900";
                  break;
            case "Tolima":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#871518";
                  letterColor = "#e6bc15";
                  break;
            case "Toluca":
                  nomeAtual = time;
                  if (ano < 2003) {
                        escudo = "Toluca2002";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Tombense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Transvaal":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1e5e3c";
                  letterColor = "white";
                  break;
            case "Treze":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "The Strongest":
                  nomeAtual = time;
                  escudo = "TheStrongest";
                  backgroundColor = "#ffcc00";
                  letterColor = "black";
                  break;
            case "Tupi":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Újpest":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#4D2E7A";
                  letterColor = "white";
                  break;
            case "UNAM Pumas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#172344";
                  letterColor = "#C6AC64";
                  break;
            case "União da Madeira":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffef02";
                  letterColor = "#3535a9";
                  break;
            case "União São João":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#048439";
                  letterColor = "white";
                  break;
            case "União Soviética":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#fde900";
                  break;
            case "Unión":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Unión Española":
                  nomeAtual = time;
                  escudo = "UniónEspañola";
                  backgroundColor = "#d30a11";
                  letterColor = "yellow";
                  break;
            case "Unión La Calera":
                  nomeAtual = time;
                  escudo = "UniónLaCalera";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Universidad Autónoma":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#ffe700";
                  break;
            case "Universidad Católica":
                  nomeAtual = time;
                  escudo = "UniversidadCatólica";
                  backgroundColor = "#1958a8";
                  letterColor = "white";
                  break;
            case "Universidad de Chile":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#1f3c94";
                  letterColor = "white";
                  break;
            case "Universitario":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#8c1619";
                  letterColor = "#fefcf3";
                  break;
            case "Uruguai": case "Uruguai Sub-20":
                  nomeAtual = "Uruguai";
                  escudo = "Uruguai";
                  backgroundColor = "#0d80bf";
                  letterColor = "black";
                  break;
            case "Valencia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d77000";
                  letterColor = "white";
                  break;
            case "Vasco":
                  nomeAtual = time;
                  if (ano < 1920) {
                        escudo = "Vasco1903";
                  } else if (ano >= 1920 && ano < 1980) {
                        escudo = "Vasco1920";
                  } else if (ano >= 1980 && ano < 2021) {
                        escudo = "Vasco1980";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "white";
                  letterColor = "black";
                  break;
            case "Vélez Sarsfield":
                  nomeAtual = time;
                  escudo = "VélezSarsfield";
                  backgroundColor = "#003a94";
                  letterColor = "white";
                  break;
            case "Veracruz":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "#252160";
                  break;
            case "Viking":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#28016c";
                  letterColor = "white";
                  break;
            case "Vila Nova":
                  nomeAtual = time;
                  escudo = "VilaNova";
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Villa Isabel":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Universidad Nacional-CO":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#a61b30";
                  letterColor = "white";
                  break;
            case "Fábrica de Armas": case "Fabril Atlético":
                  nomeAtual = "Fabril Atlético";
                  escudo = time;
                  backgroundColor = "#223b82";
                  letterColor = "white";
                  nomesAnteriores = ["Fábrica de Armas"];
                  break;
            case "Vitória":
                  nomeAtual = time;
                  if (ano < 1959) {
                        escudo = "Vitória1934";
                  } else if (ano >= 1959 && ano < 1980) {
                        escudo = "Vitória1959";
                  } else if (ano >= 1980 && ano < 1985) {
                        escudo = "Vitória1980";
                  } else if (ano >= 1985 && ano < 2000) {
                        escudo = "Vitória2000";
                  } else if (ano >= 2000 && ano < 2010) {
                        escudo = "Vitória2010";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Vitória de Guimarães":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Vitória-ES":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#002b7b";
                  letterColor = "white";
                  break;
            case "Volta Redonda":
                  nomeAtual = time;
                  escudo = "VoltaRedonda";
                  backgroundColor = "#fde900";
                  letterColor = "black";
                  break;
            case "Votuporanguense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Werder Bremen":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#009655";
                  letterColor = "white";
                  break;
            case "West Ham":
                  nomeAtual = time;
                  if (ano <= 1991) {
                        escudo = "WestHam1991";
                  } else {
                        escudo = time;
                  }
                  backgroundColor = "#7c2c3b";
                  letterColor = "white";
                  break;
            case "XV de Piracicaba":
                  nomeAtual = time;
                  escudo = "XVdePiracicaba";
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Júbilo Iwata": case "Yamaha":
                  nomeAtual = "Júbilo Iwata";
                  escudo = time;
                  backgroundColor = "#659ad2";
                  letterColor = "white";
                  nomesAnteriores = ["Yamaha"];
                  break;
            case "Young Boys":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ffd100";
                  letterColor = "black";
                  break;
            case "Ypiranga":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fff100";
                  letterColor = "#00923e";
                  break;
            case "Costa do Marfim":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#ec6e00";
                  letterColor = "#007155";
                  break;
            case "Costa Rica": case "Costa Rica Sub-20":
                  nomeAtual = "Costa Rica";
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Britânia":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Mackenzie":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Bancário":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Guarapari":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "black";
                  break;
            case "Renner":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#d30a11";
                  letterColor = "white";
                  break;
            case "Rio Grande":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#00933d";
                  letterColor = "white";
                  break;
            case "Riograndense":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#2c8227";
                  letterColor = "white";
                  break;
            case "Estrela do Norte":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "black";
                  letterColor = "white";
                  break;
            case "Pelotas":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#003a94";
                  letterColor = "#ffdd00";
                  break;
            case "Guará":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#fbdc0a";
                  letterColor = "black";
                  break;
            case "AIK":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#343380";
                  letterColor = "#fff200";
                  break;
            case "São Francisco":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#162d4f";
                  letterColor = "white";
                  break;
            case "Sul América":
                  nomeAtual = time;
                  escudo = time;
                  backgroundColor = "#28166f";
                  letterColor = "white";
                  break;
            default:
                  nomeAtual = time;
                  escudo = "escudo";
                  backgroundColor = "grey";
                  letterColor = "white";
                  break;
      }
      return {
            nomeAtual,
            escudo,
            backgroundColor,
            letterColor,
            nomesAnteriores
      }
}

export default Times;
