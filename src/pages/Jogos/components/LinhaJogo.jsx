import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaTrophy } from "react-icons/fa";
import { MdStadium, MdCalendarToday } from "react-icons/md";
import Times from '../Times';


function getResultado(jogo, meuTime) {
    const gm = jogo.golsMandante;
    const gv = jogo.golsVisitante;
    if (gm === undefined || gm === null || gm === '' || gv === undefined || gv === null || gv === '') return null;
    const isMandante = jogo.mandante === meuTime;
    if (gm === 'WO') return isMandante ? 'V' : 'D';
    if (gv === 'WO') return isMandante ? 'D' : 'V';
    const golsMeu = isMandante ? parseInt(gm) : parseInt(gv);
    const golsAdv = isMandante ? parseInt(gv) : parseInt(gm);
    if (golsMeu > golsAdv) return 'V';
    if (golsMeu < golsAdv) return 'D';
    return 'E';
}

const resultadoColor = { V: '#3fb950', E: '#e3b341', D: '#f85149' };

const textShadow = '0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000';

const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
function getDiaSemana(data) {
    return diasSemana[new Date(data).getDay()];
}

function formatData(data) {
    const [y, m, d] = data.split('-');
    return `${d}/${m}/${y}`;
}

export default function LinhaJogo({ meuTime, jogo, onSelectAdversario, onSelectEstadio, disableTeamClick, disableEstadioClick }) {
    const mandanteStyle = Times(jogo.mandante, jogo.data);
    const visitanteStyle = Times(jogo.visitante, jogo.data);

    const mandanteClickable = !disableTeamClick && jogo.mandante !== meuTime && !!onSelectAdversario;
    const visitanteClickable = !disableTeamClick && jogo.visitante !== meuTime && !!onSelectAdversario;
    const estadioClickable = !!jogo.estadio && jogo.estadio !== '' && !!onSelectEstadio && !disableEstadioClick;

    const resultado = getResultado(jogo, meuTime);
    const hasScore = jogo.golsMandante !== '' && jogo.golsVisitante !== '';
    const isWO = jogo.golsMandante === 'WO' || jogo.golsVisitante === 'WO';

    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const gradBg = `linear-gradient(90deg, ${mandanteStyle.backgroundColor} 49%, ${visitanteStyle.backgroundColor} 52%)`;

    const teamNameSx = (clickable, letterColor) => ({
        fontWeight: 700,
        fontSize: '0.65rem',
        letterSpacing: 0.5,
        lineHeight: 1.3,
        color: letterColor || '#fff',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'color 0.15s',
        '&:hover': clickable ? { color: '#93c5fd' } : {},
    });

    return (
        <Box sx={{
            background: gradBg,
            border: '2px solid #484f58',
            borderRadius: '10px',
            mb: 1.5,
            px: 2,
            pt: 1.5,
            pb: 1.25,
            position: 'relative',
            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            '&:hover': {
                borderColor: '#6e7681',
            },
        }}>

            {/* Result badge */}
            {resultado && meuTime && (
                <Box sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: resultadoColor[resultado],
                    border: '2px solid rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 800, color: '#0d1117', lineHeight: 1 }}>
                        {resultado}
                    </Typography>
                </Box>
            )}

            {/* Meta info */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.4, mb: 1.25, pb: 1, borderBottom: '1px solid rgba(0,0,0,0.35)' }}>
                <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#fff', textShadow }}>
                    <MdCalendarToday size={11} color={mandanteStyle.letterColor} />
                    {getDiaSemana(jogo.data)}, {formatData(jogo.data)}
                </Typography>
                {jogo.campeonato && (
                    <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#fff', textShadow }}>
                        <FaTrophy size={10} color={mandanteStyle.letterColor} />
                        {jogo.campeonato}
                    </Typography>
                )}
                {jogo.estadio && (
                    <Typography
                        variant="caption"
                        onClick={estadioClickable ? () => { scrollToTop(); onSelectEstadio(jogo.estadio); } : undefined}
                        sx={{
                            display: 'flex', alignItems: 'center', gap: 0.5,
                            color: '#fff', textShadow,
                            cursor: estadioClickable ? 'pointer' : 'default',
                            '&:hover': estadioClickable ? { color: '#93c5fd' } : {},
                            transition: 'color 0.15s',
                        }}
                    >
                        <MdStadium size={12} color={mandanteStyle.letterColor} />
                        {jogo.estadio}
                    </Typography>
                )}
            </Box>

            {/* Teams + Score */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

                {/* Mandante */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                    <Typography
                        sx={{ ...teamNameSx(mandanteClickable, mandanteStyle.letterColor), textAlign: 'right' }}
                        onClick={mandanteClickable ? () => { scrollToTop(); onSelectAdversario(jogo.mandante); } : undefined}
                    >
                        {jogo.mandante.toUpperCase()}
                    </Typography>
                    <img
                        src={process.env.PUBLIC_URL + '/escudos/' + mandanteStyle.escudo + '.png'}
                        alt={jogo.mandante}
                        style={{ width: 44, height: 44, objectFit: 'contain', flexShrink: 0 }}
                        loading="lazy"
                        onError={(e) => { e.target.src = process.env.PUBLIC_URL + '/escudos/escudo.png'; }}
                    />
                </Box>

                {/* Score */}
                <Box sx={{ textAlign: 'center', minWidth: 80 }}>
                    {isWO && (
                        <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#fff', textShadow, letterSpacing: 2 }}>
                            WO
                        </Typography>
                    )}
                    {!isWO && hasScore && (
                        <Typography sx={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: '#fff', textShadow, letterSpacing: 3, lineHeight: 1 }}>
                            {jogo.golsMandante} · {jogo.golsVisitante}
                        </Typography>
                    )}
                    {!isWO && !hasScore && (
                        <Typography sx={{ fontSize: '1rem', color: '#fff', textShadow, letterSpacing: 1 }}>
                            {jogo.horario || '×'}
                        </Typography>
                    )}
                    {jogo.penaltis && (
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.25, color: '#fff', textShadow }}>
                            pen. {jogo.penaltis}
                        </Typography>
                    )}
                </Box>

                {/* Visitante */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 1 }}>
                    <img
                        src={process.env.PUBLIC_URL + '/escudos/' + visitanteStyle.escudo + '.png'}
                        alt={jogo.visitante}
                        style={{ width: 44, height: 44, objectFit: 'contain', flexShrink: 0 }}
                        loading="lazy"
                        onError={(e) => { e.target.src = process.env.PUBLIC_URL + '/escudos/escudo.png'; }}
                    />
                    <Typography
                        sx={{ ...teamNameSx(visitanteClickable, visitanteStyle.letterColor), textAlign: 'left' }}
                        onClick={visitanteClickable ? () => { scrollToTop(); onSelectAdversario(jogo.visitante); } : undefined}
                    >
                        {jogo.visitante.toUpperCase()}
                    </Typography>
                </Box>

            </Box>

        </Box>
    );
}
