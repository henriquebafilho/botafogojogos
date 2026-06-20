import React, { Component } from 'react';
import Times from '../Times';
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { MdStadium } from "react-icons/md";
import Common from "../common";

class LinhaJogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meuTime: props.meuTime,
            jogo: props.jogo,
            isLoading: false
        }
    }

    scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    async componentDidMount() {
        this._isMounted = true;
        this.scrollToTop();
    }

    converteData(data) {
        var array = data.split("-");
        var novaData = array[2] + "/" + array[1] + "/" + array[0];

        return novaData;
    }

    converteDia(data) {
        data = new Date(data);
        var dia = data.getDay();
        switch (dia) {
            case 0: return "Segunda";
            case 1: return "Terça";
            case 2: return "Quarta";
            case 3: return "Quinta";
            case 4: return "Sexta";
            case 5: return "Sábado";
            case 6: return "Domingo";
            default: return "";
        }
    }

    render() {
        const converteDia = (dia) => this.converteDia(dia);
        const converteData = (data) => this.converteData(data);
        const mandante = this.props.jogo.mandante;
        const visitante = this.props.jogo.visitante;
        const estadio = this.props.jogo.estadio;
        const jogoData = this.props.jogo.data;
        const disableTeamClick = this.props.disableTeamClick;
        const disableEstadioClick = this.props.disableEstadioClick;
        const mandanteStyle = Times(mandante, jogoData);
        const visitanteStyle = Times(visitante, jogoData);
        const meuTimeStyle = Times(this.props.meuTime);
        const mandanteClickable = !disableTeamClick && mandante !== this.props.meuTime && this.props.onSelectAdversario;
        const visitanteClickable = !disableTeamClick && visitante !== this.props.meuTime && this.props.onSelectAdversario;
        const estadioClickable = estadio && estadio !== "" && this.props.onSelectEstadio && !disableEstadioClick;
        return (
            <div className='divJogo'
                style={{
                    background: "linear-gradient(90deg, " + mandanteStyle.backgroundColor + " 49%, " + visitanteStyle.backgroundColor + " 52%)",
                    paddingLeft: '10px',
                    paddingBottom: '10px',
                    marginBottom: '10px',
                    width: '100%',
                    borderColor: meuTimeStyle.backgroundColor === 'white' ? 'black' : 'white'
                }}
                key={JSON.stringify(this.props.jogo)}
            >
                <div>
                    <FaCalendarAlt style={{ color: mandanteStyle.letterColor, paddingRight: "5px" }} />
                    <p style={{
                        textShadow: Common.textShadow,
                        color: "white",
                        display: "inline",
                    }}>
                        {converteDia(this.props.jogo.data)}, {converteData(this.props.jogo.data)}
                    </p>
                </div>
                <div>
                    <p style={{ textShadow: Common.textShadow, color: "white", fontSize: '1em' }}><FaTrophy style={{ color: mandanteStyle.letterColor }} /> {this.props.jogo.campeonato}</p>
                    <p
                        style={{
                            textShadow: Common.textShadow,
                            color: "white",
                            marginBottom: '5px',
                            fontSize: '1em',
                            cursor: estadioClickable ? 'pointer' : 'default'
                        }}
                        onClick={estadioClickable ? () => { this.scrollToTop(); this.props.onSelectEstadio(estadio); } : undefined}
                        title={estadioClickable ? 'Ver estádio' : ''}
                    >
                        <MdStadium style={{ color: mandanteStyle.letterColor }} /> {estadio !== "" ? estadio : " - "}
                    </p>
                </div>
                <div id='placar' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <p className='nomeTime' style={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        display: 'inline',
                        width: "40%",
                        textAlign: "right",
                        paddingRight: '5px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: mandanteStyle.letterColor,
                        cursor: mandanteClickable ? 'pointer' : 'default'
                    }}
                        onClick={mandanteClickable ? () => { this.scrollToTop(); this.props.onSelectAdversario(mandante); } : undefined}
                        title={mandanteClickable ? 'Ver adversário' : ''}
                    >
                        {mandante.toUpperCase()}
                    </p>
                    <img
                        className='escudoLinha'
                        src={process.env.PUBLIC_URL + '/escudos/' + mandanteStyle.escudo + '.png'}
                        title={this.props.jogo.mandante}
                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        alt={this.props.jogo.mandante}
                        loading='lazy'
                        onError={(e) => { e.target.src = '/escudos/escudo.png' }}
                    />
                    <div style={{ paddingTop: '1%', display: 'inline', minWidth: this.props.jogo.golsMandante === "" && this.props.jogo.golsVisitante === "" ? "40px" : "90px", textAlign: "center", fontSize: '2em', textShadow: Common.textShadow, color: "white" }}>
                        {(this.props.jogo.golsMandante === "WO" || this.props.jogo.golsVisitante === "WO") && <div>WO</div>}
                        {this.props.jogo.golsMandante === "WO" ? <div>←</div> : this.props.jogo.golsVisitante === "WO" ? <div>→</div> : ''}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && this.props.jogo.golsMandante === "" && this.props.jogo.golsVisitante === "" && <p className="horario" style={{ fontSize: "13px", paddingTop: "20%", minWidth: "41px" }}>{this.props.jogo.horario ? this.props.jogo.horario : " X "}</p>}
                        {this.props.jogo.golsMandante !== "WO" && this.props.jogo.golsVisitante !== "WO" && this.props.jogo.golsMandante !== "" && this.props.jogo.golsVisitante !== "" && ' ' + this.props.jogo.golsMandante + ' x ' + this.props.jogo.golsVisitante + ' '}
                    </div>
                    <img
                        className='escudoLinha' src={process.env.PUBLIC_URL + '/escudos/' + visitanteStyle.escudo + '.png'}
                        title={this.props.jogo.visitante}
                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        alt={this.props.jogo.visitante}
                        loading='lazy'
                        onError={(e) => { e.target.src = '/escudos/escudo.png' }}
                    />
                    <p className='nomeTime'
                        style={{
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            display: 'inline',
                            width: "40%",
                            textAlign: "left",
                            color: visitanteStyle.letterColor,
                            paddingLeft: '5px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            cursor: visitanteClickable ? 'pointer' : 'default'
                        }}
                        onClick={visitanteClickable ? () => { this.scrollToTop(); this.props.onSelectAdversario(visitante); } : undefined}
                        title={visitanteClickable ? 'Ver adversário' : ''}
                    >
                        {visitante.toUpperCase()}
                    </p>
                </div>
                {this.props.jogo.penaltis &&
                    <div style={{ textAlign: "center", textShadow: Common.textShadow, color: "white" }}>
                        <div>Pênaltis:</div>
                        <div>{this.props.jogo.penaltis}</div>
                    </div>}
            </div >
        )
    }
}

export default LinhaJogo;