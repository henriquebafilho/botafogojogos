import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAno from './viewScreens/ViewAno';
import Estatisticas from '../components/Estatisticas';

class Anos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: [],
      anos: [],
      filtered: [],
      isLoading: false,
      clicked: false,
      anoAtual: '',
      jogosAno: [],
      searchTerm: ''
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    const jogos = await this.getJogos();
    await this.getAnos(jogos);
  }

  getJogos = async () => {
    this.setState({ isLoading: true });
    const jogos = common.jogos;
    this.setState({ jogos, isLoading: false });
    return jogos;
  }

  getAnos = async (jogos = this.state.jogos) => {
    const anos = [];

    this.setState({ isLoading: true });
    for (var i in jogos) {
      const ano = jogos[i].data.split("-")[0];
      if (!anos.includes(ano)) {
        anos.push(ano);
      }
    }
    anos.sort().reverse();
    this.setState({ anos, filtered: anos, isLoading: false });
  }

  buttonClick = (ano) => {
    const jogosAno = this.state.jogos.filter(jogo => jogo.data.split("-")[0] === ano.toString());
    this.setState({ clicked: true, anoAtual: ano, jogosAno });
  }

  handleBack = () => {
    this.setState({ clicked: false });
  }

  searchAno = async (e) => {
    const searchTerm = e.target.value;
    this.setState({ filtered: this.state.anos.filter(ano => ano.toString().trim().includes(searchTerm.trim())), searchTerm });
  }

  render() {
    const meuTime = this.state.meuTime;
    const meusJogos = this.state.jogos;
    const buttonClickFunction = (ano) => this.buttonClick(ano);

    return (
      <>
        {this.state.clicked ? <ViewAno meuTime={this.props.meuTime} meusJogos={meusJogos} jogosAno={this.state.jogosAno} ano={this.state.anoAtual} onBack={this.handleBack} onSelectAdversario={this.props.onSelectAdversario} onSelectEstadio={this.props.onSelectEstadio} /> :
          <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor, alignItems: 'normal' }}>
            <table>
              <tbody>
                <Estatisticas meuTime={meuTime} jogos={meusJogos} />
                {this.state.isLoading && <h1>Carregando...</h1>}
                <input
                  type="number"
                  inputMode='numeric'
                  placeholder="Insira o ano"
                  value={this.state.searchTerm}
                  onChange={this.searchAno}
                  style={{
                    width: '100%',
                    marginBottom: '20px',
                    marginTop: '20px',
                    height: '40px',
                    padding: '5px'
                  }}
                />
                {this.state.filtered.length > 0 ?
                  !this.state.isLoading && this.state.filtered.map(function (i) {
                    var totalAno = common.getTotalAno(i, meusJogos);
                    let imagemAno;
                    try {
                      imagemAno = process.env.PUBLIC_URL + '/anos/' + i + '.png';
                    } catch (e) {
                      imagemAno = "";
                    }
                    return <div key={i}>
                      <button id='selectAno' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor }}>
                        <div><img src={imagemAno} style={{ verticalAlign: 'middle' }} alt='ano' height='150' width='150' loading='lazy' onError={(e) => { e.target.style.display = 'none' }} /></div>
                        <div id='tituloOpcao' style={{ display: 'inline', padding: '10px', fontSize: '30px' }}>{i}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalAno} {totalAno > 1 ? "jogos" : "jogo"}</div>
                      </button>
                    </div>
                  }) : <div>
                    <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum ano encontrado</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Anos;