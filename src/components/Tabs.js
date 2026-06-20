import React, { Component } from 'react';
import Adversarios from '../pages/Adversarios';
import Anos from '../pages/Anos';
import Estadios from '../pages/Estadios';
import Times from '../Times';
import LinhaJogo from './LinhaJogo';
import ProximosJogos from '../pages/ProximosJogos';
import common from '../common';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1,
            meusJogos: [],
            meuTime: props.meuTime,
            currentPage: 1,
            ultimos: 1,
            isLoading: false,
            jogoHoje: null,
            selectedEstadio: '',
            selectedAdversario: ''
        };
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
    }

    async componentDidMount() {
        await this.getJogos();
    }

    getJogos = async () => {
        this.setState({ isLoading: true });
    
        const hojeBrasilia = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'America/Sao_Paulo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(new Date());
    
        const todosOsJogos = common.jogos;
        const jogosRecentes = todosOsJogos.slice().reverse().slice(0, 20);
    
        this.setState({
            meusJogos: jogosRecentes,
            jogoHoje: todosOsJogos.find(jogo => 
                jogo.data === hojeBrasilia && 
                jogo.golsMandante === "" && 
                jogo.golsVisitante === ""
            ),
            isLoading: false
        });
    }

    handleNextPage() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }

    handlePrevPage() {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }

    selectEstadio = (estadio) => {
        this.setState({ toggleState: 3, selectedEstadio: estadio, selectedAdversario: '' });
    }

    selectAdversario = (adversario) => {
        const nomeAtual = Times(adversario).nomeAtual;
        this.setState({ toggleState: 4, selectedAdversario: nomeAtual, selectedEstadio: '' });
    }

    toggleTab = async (index) => {
        this.setState({ toggleState: index });
    }

    recentesTab = async (index) => {
        this.setState({ ultimos: index })
    }

    render() {
        const toggleTab = (index) => this.toggleTab(index);
        const recentesTab = (index) => this.recentesTab(index);
        let toggleState = this.state.toggleState;
        let meusJogos = this.state.meusJogos;
        let meuTime = this.state.meuTime;
        let ultimos = this.state.ultimos;
        let anoAtual = 0;
        const meuTimeStyle = Times(this.props.meuTime);

        return (
            <div className="container" style={{ color: meuTimeStyle.letterColor, backgroundColor: meuTimeStyle.backgroundColor, border: "3px" }}>
                <div className="bloc-tabs">
                    <button id="tab" className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                        Recentes
                    </button>
                    <button id="tab" className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                        Anos
                    </button>
                    <button id="tab" className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                        Estádios
                    </button>
                    <button id="tab" className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                        Adversários
                    </button>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <div className="container" style={{ color: meuTimeStyle.letterColor, backgroundColor: meuTimeStyle.backgroundColor, border: "3px", maxWidth: '80%', marginBottom: '20px' }}>
                            <div className="bloc-tabs">
                                <button id="tab" className={ultimos === 1 ? "tabs active-tabs" : "tabs"} onClick={() => recentesTab(1)}>
                                    Últimos Jogos
                                </button>
                                <button id="tab" className={ultimos === 1 ? "tabs" : "tabs active-tabs"} onClick={() => recentesTab(2)}>
                                    Próximos Jogos
                                </button>
                            </div>
                        </div>
                        {ultimos === 1 ?
                            <div className="container" style={{ color: meuTimeStyle.letterColor, backgroundColor: meuTimeStyle.backgroundColor }}>
                                {this.state.jogoHoje && <div key={"Hoje"}>
                                    <h1 style={{ textAlign: 'center', color: meuTimeStyle.letterColor, margin: '40px' }}>Hoje</h1>
                                    <LinhaJogo meuTime={meuTime} jogo={this.state.jogoHoje} onSelectEstadio={this.selectEstadio} onSelectAdversario={this.selectAdversario} />
                                </div>}
                                {meusJogos.length > 0 ? meusJogos.map((index) => {
                                    let mostraAno = false;
                                    if (anoAtual !== index.data.split("-")[0]) {
                                        anoAtual = index.data.split("-")[0];
                                        mostraAno = true;
                                    }
                                    return <div key={JSON.stringify(index)}>
                                        {mostraAno ? <h1 style={{ textAlign: 'center', color: meuTimeStyle.letterColor, margin: '40px' }}>{anoAtual}</h1> : ""}
                                        <LinhaJogo meuTime={meuTime} jogo={index} onSelectEstadio={this.selectEstadio} onSelectAdversario={this.selectAdversario} />
                                    </div>
                                }) : <div>
                                    <h4 style={{ color: meuTimeStyle.letterColor, textAlign: 'center' }}>Nenhum jogo cadastrado</h4>
                                </div>}
                            </div>
                            :
                            <div className={ultimos === 2 ? "content  active-content" : "content"}>
                                <ProximosJogos meuTime={meuTime} onSelectEstadio={this.selectEstadio} onSelectAdversario={this.selectAdversario} />
                            </div>
                        }
                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        <Anos meuTime={meuTime} onSelectEstadio={this.selectEstadio} onSelectAdversario={this.selectAdversario} />
                    </div>

                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                        <Estadios meuTime={meuTime} meusJogos={meusJogos} selectedEstadio={this.state.selectedEstadio} onSelectAdversario={this.selectAdversario} />
                    </div>

                    <div className={toggleState === 4 ? "content  active-content" : "content"}>
                        <Adversarios meuTime={meuTime} meusJogos={meusJogos} selectedAdversario={this.state.selectedAdversario} onSelectEstadio={this.selectEstadio} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;
