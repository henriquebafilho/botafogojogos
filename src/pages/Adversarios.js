import React, { Component } from 'react';
import Times from '../Times';
import common from '../common';
import ViewAdversario from './viewScreens/ViewAdversario';

class Adversarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meuTime: props.meuTime,
      jogos: [],
      adversarios: [],
      filtered: [],
      isLoading: false,
      clicked: false,
      adversarioAtual: '',
      jogosAdversario: [],
      searchTerm: ''
    }
    this.buttonClick = this.buttonClick.bind(this);
  }

  async componentDidMount() {
    await this.getJogos();
    await this.getAdversarios();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedAdversario && this.props.selectedAdversario !== prevProps.selectedAdversario) {
      this.openSelectedAdversario();
    }
  }

  openSelectedAdversario = () => {
    const selected = this.props.selectedAdversario ? Times(this.props.selectedAdversario).nomeAtual : '';
    if (selected && this.state.adversarios.includes(selected)) {
      if (!this.state.clicked || this.state.adversarioAtual !== selected) {
        this.buttonClick(selected);
      }
    }
  }

  getJogos = () => {
    return new Promise(resolve => {
      this.setState({ isLoading: true, jogos: common.jogos }, () => {
        this.setState({ isLoading: false }, resolve);
      });
    });
  }

  getAdversarios = async () => {
    const jogos = this.state.jogos.length > 0 ? this.state.jogos : common.jogos;
    const adversariosSet = new Set();
    const meuTime = this.props.meuTime;

    this.setState({ isLoading: true });

    for (const jogo of jogos) {
      const mandanteNome = Times(jogo.mandante).nomeAtual;
      const visitanteNome = Times(jogo.visitante).nomeAtual;

      if (mandanteNome !== meuTime) {
        adversariosSet.add(mandanteNome);
      }
      if (visitanteNome !== meuTime) {
        adversariosSet.add(visitanteNome);
      }
    }

    const adversarios = Array.from(adversariosSet);
    adversarios.sort((a, b) => {
      const qtdJogosA = common.getTotalAdversario(meuTime, a);
      const qtdJogosB = common.getTotalAdversario(meuTime, b);
      if (qtdJogosB !== qtdJogosA) {
        return qtdJogosB - qtdJogosA;
      }
      return a.localeCompare(b);
    });

    this.setState({ adversarios, filtered: adversarios, isLoading: false }, () => this.openSelectedAdversario());
  }

  buttonClick = (adversario) => {
    this.setState({ clicked: true, adversarioAtual: adversario });
  }

  handleBack = () => {
    this.setState({ clicked: false });
  }

  searchTeam = async (e) => {
    const normalizeString = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const searchTerm = normalizeString(e.target.value.toUpperCase().trim());

    const filtered = this.state.adversarios.filter(time => {
      const team = Times(time);
      const namesToCheck = [team.nomeAtual, ...team.nomesAnteriores];
      return namesToCheck.some(name => normalizeString(name.toUpperCase().trim()).includes(searchTerm));
    });
    filtered.sort((a, b) => {
      const qtdJogosA = common.getTotalAdversario(this.state.meuTime, a);
      const qtdJogosB = common.getTotalAdversario(this.state.meuTime, b);
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

    this.setState({ filtered, searchTerm: e.target.value });
  }

  render() {
    const meuTime = this.state.meuTime;
    const filtered = this.state.filtered;
    const teamStyle = Times(this.props.meuTime);
    const buttonClickFunction = (adversario) => this.buttonClick(adversario);
    return (
      <>
        {this.state.clicked ? <ViewAdversario meuTime={this.props.meuTime} adversario={this.state.adversarioAtual} onBack={this.handleBack} onSelectEstadio={this.props.onSelectEstadio} /> :
          <div className="App-header" style={{ backgroundColor: teamStyle.backgroundColor, color: teamStyle.letterColor, alignItems: 'normal' }}>
            <table>
              <tbody>
                <input
                  type="text"
                  placeholder="Insira o nome do time"
                  value={this.state.searchTerm}
                  onChange={this.searchTeam}
                  style={{
                    width: '100%',
                    marginBottom: '20px',
                    marginTop: '20px',
                    height: '40px',
                    padding: '5px'
                  }}
                />
                {!this.state.isLoading ?
                  filtered.length > 0 ? filtered.map((teamName) => {
                    const team = Times(teamName);
                    const totalAdversario = common.getTotalAdversario(meuTime, teamName);
                    const nomesAnteriores = team.nomesAnteriores;
                    return <div key={teamName}>
                      <button id='selectAdversario' onClick={() => buttonClickFunction(team.nomeAtual)} style={{ backgroundColor: team.backgroundColor, color: team.letterColor, borderColor: teamStyle.backgroundColor === 'white' ? 'black' : 'white', borderStyle: 'solid' }}>
                        <img
                          src={process.env.PUBLIC_URL + '/escudos/' + team.escudo + '.png'}
                          style={{ verticalAlign: 'middle' }}
                          alt='escudo'
                          height='75'
                          width='75'
                          loading='lazy'
                          onError={(e) => { e.target.src = '/escudos/escudo.png' }}
                        />
                        <div id='tituloOpcao' style={{ paddingTop: '5px' }}>{team.nomeAtual}</div>
                        <div style={{ paddingBottom: '5px', fontSize: '15px', fontWeight: '100' }}>{totalAdversario} {totalAdversario > 1 ? "jogos" : "jogo"}</div>
                        {nomesAnteriores.length > 0 &&
                          <div>
                            <div>Nomes anteriores:</div>
                            {nomesAnteriores.map((nome) => {
                              return <div key={nome}>-{nome}</div>;
                            })}
                          </div>
                        }
                      </button>
                    </div>
                  }) : <div>
                    <h4 style={{ color: teamStyle.letterColor, textAlign: 'center', paddingBottom: '50px' }}>Nenhum adversário encontrado</h4>
                  </div>
                  : <div>
                    <h4 style={{ color: teamStyle.letterColor, textAlign: 'center', paddingBottom: '50px' }}>Carregando adversários...</h4>
                  </div>}
              </tbody>
            </table>
          </div>}
      </>
    )
  }
}

export default Adversarios;