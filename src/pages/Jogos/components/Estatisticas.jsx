import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import common from '../common';

export default function Estatisticas({ meuTime, jogos }) {
    const total = jogos.length;
    const v = common.getVitorias(meuTime, jogos);
    const e = common.getEmpates(meuTime, jogos);
    const d = common.getDerrotas(meuTime, jogos);

    return (
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}><Box sx={{ display: 'inline-flex', flexDirection: 'column', minWidth: 200, maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', gap: 2.5, mb: 1, flexWrap: 'wrap' }}>
                <Typography variant="body2" sx={{ color: '#3fb950' }}>{v} vitória{v !== 1 ? 's' : ''}</Typography>
                <Typography variant="body2" sx={{ color: '#e3b341' }}>{e} empate{e !== 1 ? 's' : ''}</Typography>
                <Typography variant="body2" sx={{ color: '#f85149' }}>{d} derrota{d !== 1 ? 's' : ''}</Typography>
            </Box>
            {total > 0 && (
                <Box sx={{ display: 'flex', height: 8, borderRadius: '4px', overflow: 'hidden', backgroundColor: '#21262d' }}>
                    {v > 0 && <Tooltip title={`${v} vitórias`}><Box sx={{ width: `${v * 100 / total}%`, backgroundColor: '#3fb950' }} /></Tooltip>}
                    {e > 0 && <Tooltip title={`${e} empates`}><Box sx={{ width: `${e * 100 / total}%`, backgroundColor: '#e3b341' }} /></Tooltip>}
                    {d > 0 && <Tooltip title={`${d} derrotas`}><Box sx={{ width: `${d * 100 / total}%`, backgroundColor: '#f85149' }} /></Tooltip>}
                </Box>
            )}
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block', textAlign: 'center' }}>
                {total} jogo{total !== 1 ? 's' : ''}
            </Typography>
        </Box></Box>
    );
}
