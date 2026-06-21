import React, { Component } from 'react';
import Times from '../../Times';
import Estatisticas from '../../components/Estatisticas';
import LinhaJogo from '../../components/LinhaJogo';
import common from '../../common';

class ViewAdversario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      jogosAdversario: []
    }
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  async componentDidMount() {
    this.scrollToTop();
    await this.getJogosAdversario();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.adversario !== prevProps.adversario) {
      await this.getJogosAdversario();
      this.scrollToTop();
    }
  }

  getJogosAdversario = async () => {
    this.setState({ isLoading: true });
    const adversarioSelecionado = this.props.adversario;
    const adversario = [adversarioSelecionado, ...Times(adversarioSelecionado).nomesAnteriores];
    var jogosAdversario = common.jogos.filter(jogo =>
      ((adversario.includes(jogo.mandante) && jogo.visitante === this.props.meuTime) ||
        (jogo.mandante === this.props.meuTime && adversario.includes(jogo.visitante)))
    );
    jogosAdversario = jogosAdversario.sort(function (a, b) {
      return a.data < b.data ? -1 : a.data > b.data ? 1 : 0;
    });
    this.setState({ isLoading: false, jogosAdversario });
  }

  render() {
    const meuTime = this.props.meuTime;
    const meuTimeStyle = Times(meuTime);
    const adversarioStyle = Times(this.props.adversario);
    let anoAtual = 0;
    const jogos = [...this.state.jogosAdversario].reverse();

    return (
      <div style={{ backgroundColor: meuTimeStyle.backgroundColor, color: meuTimeStyle.letterColor }}>
        <div className='a' key="voltar">
          <button style={{ outline: 'none', border: 'none', textDecoration: 'underline', fontSize: '25px', cursor: 'pointer', backgroundColor: meuTimeStyle.backgroundColor, color: meuTimeStyle.letterColor }} onClick={this.props.onBack}>{"< Voltar"}</button>
        </div>
        <div className="App-header">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
            <div style={{ textAlign: 'center', width: '10rem', height: '10rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: meuTimeStyle.backgroundColor, border: '3px solid ' + meuTimeStyle.backgroundColor, borderRadius: '10px', color: meuTimeStyle.letterColor, boxSizing: 'border-box', padding: '0.5rem' }}>
              <img
                src={process.env.PUBLIC_URL + '/escudos/' + meuTimeStyle.escudo + '.png'}
                style={{ width: "4.5rem", height: "4.5rem", margin: 0, marginBottom: '0.75rem' }}
                alt={meuTime}
                loading='lazy'
                onError={(e) => { e.target.src = '/escudos/escudo.png' }}
              />
              <p id='tituloAdversario' style={{ padding: '0.15rem 0 0 0', margin: 0, width: '100%', fontSize: 'clamp(12px, 1.2vw, 15px)', maxHeight: '2.4rem' }}>{meuTime}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '10rem' }}>
              <h1 style={{ margin: 0, fontSize: '1.5rem' }}> x </h1>
            </div>
            <div
              style={{
                textAlign: 'center',
                border: '3px solid ' + adversarioStyle.backgroundColor,
                borderRadius: '10px',
                backgroundColor: adversarioStyle.backgroundColor,
                color: adversarioStyle.letterColor,
                width: '10rem',
                height: '10rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                padding: '0.5rem',
                overflow: 'hidden'
              }}>
              <img
                src={process.env.PUBLIC_URL + '/escudos/' + adversarioStyle.escudo + '.png'}
                style={{ width: "4.5rem", height: "4.5rem", margin: 0, marginBottom: '0.75rem' }}
                alt={this.props.adversario}
                loading='lazy'
                onError={(e) => { e.target.src = '/escudos/escudo.png' }}
              />
              <p id='tituloAdversario' style={{ padding: '0.15rem 0 0 0', margin: 0, width: '100%', fontSize: 'clamp(12px, 1.2vw, 15px)', maxHeight: '2.4rem' }}>{this.props.adversario}</p>
            </div>
          </div>
          <br />
          <Estatisticas meuTime={this.props.meuTime} jogos={this.state.jogosAdversario} />
          {jogos.map((index) => {
            let mostraAno = false;
            if (anoAtual !== index.data.split("-")[0]) {
              anoAtual = index.data.split("-")[0];
              mostraAno = true;
            }
            return <div key={JSON.stringify(index)} style={{ width: '100%' }}>
              {mostraAno ? <h1 style={{ textAlign: 'center', color: meuTimeStyle.letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
              <LinhaJogo meuTime={meuTime} jogo={index} onSelectEstadio={this.props.onSelectEstadio} disableTeamClick={true} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default ViewAdversario;