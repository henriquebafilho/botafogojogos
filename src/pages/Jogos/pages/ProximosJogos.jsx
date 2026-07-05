import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinhaJogo from '../components/LinhaJogo';
import BotafogoJogos from '../../../TodosOsJogos/BotafogoJogos';

const meuTime = 'Botafogo';
const proximosJogos = BotafogoJogos()
    .filter(j => j && typeof j === 'object' && j.mandante
        && j.golsMandante === '' && j.golsVisitante === '')
    .sort((a, b) => a.data.localeCompare(b.data));

export default function ProximosJogos({ onSelectEstadio, onSelectAdversario }) {
    if (proximosJogos.length === 0) {
        return <Typography color="text.secondary" textAlign="center">Não há jogos futuros</Typography>;
    }
    return (
        <Box>
            {proximosJogos.map(jogo => (
                <LinhaJogo
                    key={jogo.mandante + jogo.visitante + jogo.data}
                    meuTime={meuTime}
                    jogo={jogo}
                    onSelectEstadio={onSelectEstadio}
                    onSelectAdversario={onSelectAdversario}
                />
            ))}
        </Box>
    );
}
