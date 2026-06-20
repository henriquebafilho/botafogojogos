import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewEstadio from './viewScreens/ViewEstadio';

class Estadios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: [],
      estadios: [],
      filtered: [],
      isLoading: false,
      clicked: false,
      estadioAtual: '',
      jogosEstadio: [],
      searchTerm: ''
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    const jogos = await this.getJogos();
    await this.getEstadios(jogos);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedEstadio && this.props.selectedEstadio !== prevProps.selectedEstadio) {
      this.openSelectedEstadio();
    }
  }

  openSelectedEstadio = () => {
    if (this.props.selectedEstadio && this.state.estadios.includes(this.props.selectedEstadio)) {
      if (!this.state.clicked || this.state.estadioAtual !== this.props.selectedEstadio) {
        this.buttonClick(this.props.selectedEstadio);
      }
    }
  }

  getJogos = async () => {
    this.setState({ isLoading: true });
    const jogos = common.jogos;
    this.setState({ jogos, isLoading: false });
    return jogos;
  }

  getEstadios = async (jogos = this.state.jogos) => {
    const estadios = [];

    this.setState({ isLoading: true })
    for (let i in jogos) {
      if (!estadios.includes(jogos[i].estadio) &&
        jogos[i].estadio !== "" &&
        jogos[i].estadio[0] !== "(") {
        estadios.push(jogos[i].estadio);
      }
    }

    estadios.sort((a, b) => {
      const qtdJogosA = common.getTotalEstadio(a, jogos);
      const qtdJogosB = common.getTotalEstadio(b, jogos);

      if (qtdJogosB !== qtdJogosA) {
        return qtdJogosB - qtdJogosA;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    this.setState({ estadios, filtered: estadios, isLoading: false }, () => this.openSelectedEstadio())
  }

  buttonClick = (estadio) => {
    const jogosEstadio = this.state.jogos.filter(jogo => jogo.estadio === estadio);
    this.setState({ clicked: true, estadioAtual: estadio, jogosEstadio });
  }

  searchStadium = async (e) => {
    const jogos = this.state.jogos;
    const searchTerm = e.target.value;
    const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
    const filtered = this.state.estadios.filter(estadio => {
      const normalizedEstadio = estadio.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().trim();
      return normalizedEstadio.includes(normalizedSearchTerm);
    });
    filtered.sort((a, b) => {
      const qtdJogosA = common.getTotalEstadio(a, jogos);
      const qtdJogosB = common.getTotalEstadio(b, jogos);
      if (qtdJogosB !== qtdJogosA) {
        return qtdJogosB - qtdJogosA;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    this.setState({ filtered, searchTerm });
  }

  render() {
    const meuTime = this.state.meuTime;
    const meusJogos = this.state.jogos;
    const buttonClickFunction = (estadio) => this.buttonClick(estadio);

    return (
      <>
        {this.state.clicked ? <ViewEstadio meuTime={this.props.meuTime} meusJogos={meusJogos} jogosEstadio={this.state.jogosEstadio} estadio={this.state.estadioAtual} onBack={() => this.setState({ clicked: false })} onSelectAdversario={this.props.onSelectAdversario} /> :
          <div className="App-header" style={{ backgroundColor: Times(this.props.meuTime).backgroundColor, color: Times(this.props.meuTime).letterColor, alignItems: 'normal' }}>
            <h4 style={{ textAlign: 'center' }}>{this.state.estadios.length + " estádio"}{this.state.estadios.length > 1 ? "s" : ""}{" cadastrados"}</h4>
            <br />
            <table>
              <tbody>
                {this.state.isLoading && <h1>Carregando...</h1>}
                <input
                  type="text"
                  placeholder="Insira o nome do estádio"
                  value={this.state.searchTerm}
                  onChange={this.searchStadium}
                  style={{
                    width: '100%',
                    marginBottom: '20px',
                    height: '40px',
                    padding: '5px'
                  }}
                />
                {this.state.filtered.length > 0 ?
                  !this.state.isLoading && this.state.filtered.map(function (i) {
                    let totalEstadio = common.getTotalEstadio(i, meusJogos);
                    let imagemEstadio;
                    try {
                      imagemEstadio = process.env.PUBLIC_URL + '/estadios/' + i + '.png';
                    } catch (e) {
                      imagemEstadio = "";
                    }
                    return <div key={i}>
                      <button id='selectEstadio' onClick={() => buttonClickFunction(i)} style={{ borderColor: Times(meuTime).letterColor, borderStyle: 'solid', backgroundColor: Times(meuTime).backgroundColor, color: Times(meuTime).letterColor }}>
                        <img
                          src={imagemEstadio}
                          style={{ verticalAlign: 'middle' }}
                          alt='estádio'
                          height='150'
                          width='150'
                          loading='lazy'
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                        <div id='tituloOpcao' style={{ padding: '10px' }}>{i}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalEstadio} {totalEstadio > 1 ? "jogos" : "jogo"}</div>
                      </button>
                    </div>
                  }) : <div>
                    <h4 style={{ color: Times(this.state.meuTime).letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum estádio encontrado</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Estadios;