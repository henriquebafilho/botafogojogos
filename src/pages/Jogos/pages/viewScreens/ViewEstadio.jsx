import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinhaJogo from '../../components/LinhaJogo';
import Estatisticas from '../../components/Estatisticas';

export default function ViewEstadio({ meuTime, jogosEstadio, estadio, onBack, onSelectAdversario }) {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [estadio]);

    const jogos = [...jogosEstadio].sort((a, b) => b.data.localeCompare(a.data));

    let currentYear = null;

    return (
        <Box>
            <Button onClick={onBack} sx={{ mb: 2, color: 'text.secondary', textTransform: 'none', pl: 0 }}>
                ← Voltar
            </Button>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Typography variant="h4">{estadio}</Typography>
            </Box>

            <Estatisticas meuTime={meuTime} jogos={jogosEstadio} />

            {jogos.map(jogo => {
                const year = jogo.data.split('-')[0];
                const showDivider = year !== currentYear;
                currentYear = year;
                return (
                    <React.Fragment key={jogo.mandante + jogo.visitante + jogo.data}>
                        {showDivider && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3 }}>
                                <Box sx={{ flex: 1, height: '1px', backgroundColor: '#30363d' }} />
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                                    {year}
                                </Typography>
                                <Box sx={{ flex: 1, height: '1px', backgroundColor: '#30363d' }} />
                            </Box>
                        )}
                        <LinhaJogo
                            meuTime={meuTime}
                            jogo={jogo}
                            onSelectAdversario={onSelectAdversario}
                            disableEstadioClick={true}
                        />
                    </React.Fragment>
                );
            })}
        </Box>
    );
}
