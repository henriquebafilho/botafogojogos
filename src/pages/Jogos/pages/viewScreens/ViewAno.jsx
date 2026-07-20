import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinhaJogo from '../../components/LinhaJogo';
import Estatisticas from '../../components/Estatisticas';

export default function ViewAno({ meuTime, jogosAno, ano, onBack, onSelectAdversario, onSelectEstadio }) {
    const jogos = [...jogosAno].sort((a, b) => a.data.localeCompare(b.data));
    const imagemAno = process.env.PUBLIC_URL + '/anos/' + ano + '.png';

    return (
        <Box>
            <Button onClick={onBack} sx={{ mb: 2, color: 'text.secondary', textTransform: 'none', pl: 0 }}>
                ← Voltar
            </Button>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <img
                    src={imagemAno}
                    alt={ano}
                    width={100}
                    height={100}
                    loading="lazy"
                    style={{ borderRadius: '8px', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                <Typography variant="h3">{ano}</Typography>
            </Box>

            <Estatisticas meuTime={meuTime} jogos={jogosAno} />

            {jogos.map(jogo => (
                <LinhaJogo
                    key={jogo.mandante + jogo.visitante + jogo.data}
                    meuTime={meuTime}
                    jogo={jogo}
                    onSelectAdversario={onSelectAdversario}
                    onSelectEstadio={onSelectEstadio}
                />
            ))}
        </Box>
    );
}
