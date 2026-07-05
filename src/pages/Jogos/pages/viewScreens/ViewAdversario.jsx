import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinhaJogo from '../../components/LinhaJogo';
import Estatisticas from '../../components/Estatisticas';
import Times from '../../Times';
import common from '../../common';

export default function ViewAdversario({ meuTime, adversario, onBack, onSelectEstadio }) {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [adversario]);

    const meuTimeStyle = Times(meuTime);
    const adversarioStyle = Times(adversario);

    const jogosAdversario = useMemo(() => {
        const allNames = [adversario, ...Times(adversario).nomesAnteriores];
        return common.jogos
            .filter(j =>
                (allNames.includes(j.mandante) && j.visitante === meuTime) ||
                (j.mandante === meuTime && allNames.includes(j.visitante))
            )
            .sort((a, b) => b.data.localeCompare(a.data));
    }, [adversario, meuTime]);

    const gradBg = `linear-gradient(90deg, ${meuTimeStyle.backgroundColor} 49%, ${adversarioStyle.backgroundColor} 52%)`;

    let currentYear = null;

    return (
        <Box>
            <Button onClick={onBack} sx={{ mb: 2, color: 'text.secondary', textTransform: 'none', pl: 0 }}>
                ← Voltar
            </Button>

            {/* Header with team colors */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Box sx={{
                    background: gradBg,
                    borderRadius: '10px',
                    border: '2px solid #484f58',
                    py: 1.5,
                    px: 2,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    minWidth: 260,
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, flex: 1 }}>
                        <img
                            src={process.env.PUBLIC_URL + '/escudos/' + meuTimeStyle.escudo + '.png'}
                            alt={meuTime}
                            width={64}
                            height={64}
                            loading="lazy"
                            style={{ objectFit: 'contain' }}
                            onError={(e) => { e.target.src = process.env.PUBLIC_URL + '/escudos/escudo.png'; }}
                        />
                        <Typography variant="body2" sx={{ color: meuTimeStyle.letterColor, fontWeight: 600, textAlign: 'center' }}>
                            {meuTime}
                        </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 700, textShadow: '0 0 3px #000, 0 0 3px #000, 0 0 3px #000', alignSelf: 'flex-start', mt: '20px' }}>×</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, flex: 1 }}>
                        <img
                            src={process.env.PUBLIC_URL + '/escudos/' + adversarioStyle.escudo + '.png'}
                            alt={adversario}
                            width={64}
                            height={64}
                            loading="lazy"
                            style={{ objectFit: 'contain' }}
                            onError={(e) => { e.target.src = process.env.PUBLIC_URL + '/escudos/escudo.png'; }}
                        />
                        <Typography variant="body2" sx={{ color: adversarioStyle.letterColor, fontWeight: 600, textAlign: 'center' }}>
                            {adversario}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Estatisticas meuTime={meuTime} jogos={jogosAdversario} />

            {jogosAdversario.map(jogo => {
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
                            onSelectEstadio={onSelectEstadio}
                            disableTeamClick={true}
                        />
                    </React.Fragment>
                );
            })}
        </Box>
    );
}
