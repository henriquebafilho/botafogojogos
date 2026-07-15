import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import common from '../common';
import SearchBox from '../components/SearchBox';
import ViewAno from './viewScreens/ViewAno';

const jogos = common.jogos;
const anosDisponiveis = [...new Set(jogos.map(j => j.data.split('-')[0]))].sort().reverse();

export default function Anos({ meuTime, onSelectAdversario, onSelectEstadio }) {
    const { ano } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const anoAtual = ano && anosDisponiveis.includes(ano) ? ano : null;

    const filtered = anosDisponiveis.filter(a => a.includes(search.trim()));

    if (anoAtual) {
        const jogosAno = jogos.filter(j => j.data.split('-')[0] === anoAtual);
        return (
            <ViewAno
                meuTime={meuTime}
                jogosAno={jogosAno}
                ano={anoAtual}
                onBack={() => navigate('/anos')}
                onSelectAdversario={onSelectAdversario}
                onSelectEstadio={onSelectEstadio}
            />
        );
    }

    return (
        <Box>
            <SearchBox
                placeholder="Buscar ano..."
                value={search}
                onChange={setSearch}
                inputProps={{ inputMode: 'numeric' }}
                sx={{ mb: 3 }}
            />

            {filtered.length === 0 && (
                <Typography color="text.secondary" textAlign="center">Nenhum ano encontrado</Typography>
            )}

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 2 }}>
                {filtered.map(ano => {
                    const total = common.getTotalAno(ano, jogos);
                    const imagemAno = process.env.PUBLIC_URL + '/anos/' + ano + '.png';
                    return (
                        <Box
                            key={ano}
                            onClick={() => navigate(`/anos/${ano}`)}
                            sx={{
                                cursor: 'pointer',
                                backgroundColor: '#161b22',
                                border: '1px solid #484f58',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                textAlign: 'center',
                                transition: 'border-color 0.15s, transform 0.15s',
                                '&:hover': { borderColor: '#8b949e', transform: 'translateY(-2px)' },
                            }}
                        >
                            <img
                                src={imagemAno}
                                alt={ano}
                                loading="lazy"
                                style={{ display: 'block', width: '100%', aspectRatio: '1', objectFit: 'cover' }}
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <Box sx={{ p: 1.5 }}>
                                <Typography variant="h6" sx={{ lineHeight: 1 }}>{ano}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {total} {total === 1 ? 'jogo' : 'jogos'}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
