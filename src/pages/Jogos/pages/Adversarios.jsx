import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import 'flag-icons/css/flag-icons.min.css';
import Times from '../Times';
import common from '../common';
import paises from '../paises';
import estados from '../estados';
import { slugify, findBySlug } from '../slug';
import ViewAdversario from './viewScreens/ViewAdversario';

const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().trim();

const isSelecao = (nome) => !!paises[nome] && paises[nome].pais === nome;

const jogos = common.jogos;
const nomesNosJogos = new Set(jogos.flatMap(j => [j.mandante, j.visitante]));

const buildAdversarios = (meuTime) => {
    const set = new Set();
    for (const j of jogos) {
        const m = Times(j.mandante).nomeAtual;
        const v = Times(j.visitante).nomeAtual;
        if (m !== meuTime) set.add(m);
        if (v !== meuTime) set.add(v);
    }
    const arr = Array.from(set);
    arr.sort((a, b) => {
        const diff = common.getTotalAdversario(meuTime, b) - common.getTotalAdversario(meuTime, a);
        return diff !== 0 ? diff : a.localeCompare(b);
    });
    return arr;
};

function AdversarioCard({ teamName, meuTime, onSelect }) {
    const team = Times(teamName);
    const total = common.getTotalAdversario(meuTime, teamName);
    const nomesAnterioresVistos = team.nomesAnteriores.filter(n => nomesNosJogos.has(n));
    return (
        <Box
            onClick={() => onSelect(teamName)}
            sx={{
                cursor: 'pointer',
                backgroundColor: team.backgroundColor,
                border: '1px solid #fff',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
                transition: 'border-color 0.15s, transform 0.15s',
                '&:hover': { borderColor: '#8b949e', transform: 'translateY(-2px)' },
            }}
        >
            <Box sx={{ pt: 2, px: 1 }}>
                <img
                    src={process.env.PUBLIC_URL + '/escudos/' + team.escudo + '.png'}
                    alt={teamName}
                    width={80}
                    height={80}
                    loading="lazy"
                    style={{ objectFit: 'contain' }}
                    onError={(e) => { e.target.src = process.env.PUBLIC_URL + '/escudos/escudo.png'; }}
                />
            </Box>
            <Box sx={{ p: 1.5, pt: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.3, color: team.letterColor }}>{team.nomeAtual}</Typography>
                <Typography variant="caption" sx={{ color: team.letterColor, opacity: 0.7 }}>
                    {total} {total === 1 ? 'jogo' : 'jogos'}
                </Typography>
                {nomesAnterioresVistos.length > 0 && (
                    <Typography variant="caption" sx={{ color: team.letterColor, opacity: 0.5, display: 'block', mt: 0.5, fontSize: '0.65rem', lineHeight: 1.2 }}>
                        {nomesAnterioresVistos.join(', ')}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

const FILTROS_VALIDOS = ['brasileiros', 'internacionais', 'selecoes'];

export default function Adversarios({ meuTime, onSelectEstadio }) {
    const { param } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const todosAdversarios = useMemo(() => buildAdversarios(meuTime), [meuTime]);

    const filtro = FILTROS_VALIDOS.includes(param) ? param : 'todos';
    const adversarioAtual = (param && !FILTROS_VALIDOS.includes(param))
        ? findBySlug(todosAdversarios, param)
        : null;

    const irParaFiltro = (v) => navigate(v === 'todos' ? '/adversarios' : `/adversarios/${v}`);
    const irParaAdversario = (nome) => navigate(`/adversarios/${slugify(Times(nome).nomeAtual)}`);

    const filtered = useMemo(() => {
        let list = todosAdversarios;
        if (filtro === 'brasileiros') list = list.filter(n => !paises[n]);
        if (filtro === 'internacionais') list = list.filter(n => !!paises[n] && !isSelecao(n));
        if (filtro === 'selecoes') list = list.filter(n => isSelecao(n));
        if (!search.trim()) return list;
        const term = normalize(search);
        return list.filter(name => {
            const team = Times(name);
            return [team.nomeAtual, ...team.nomesAnteriores].some(n => normalize(n).includes(term));
        });
    }, [search, filtro, todosAdversarios]);

    const byPais = useMemo(() => {
        if (filtro !== 'internacionais') return null;
        const map = {};
        filtered.forEach(name => {
            const info = paises[name];
            if (!info) return;
            if (!map[info.pais]) map[info.pais] = { bandeira: info.codigo, times: [] };
            map[info.pais].times.push(name);
        });
        return Object.keys(map)
            .sort((a, b) => {
                const totalA = map[a].times.reduce((sum, n) => sum + common.getTotalAdversario(meuTime, n), 0);
                const totalB = map[b].times.reduce((sum, n) => sum + common.getTotalAdversario(meuTime, n), 0);
                return totalB - totalA;
            })
            .map(p => ({ pais: p, ...map[p] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtro, filtered]);

    const byEstado = useMemo(() => {
        if (filtro !== 'brasileiros') return null;
        const map = {};
        filtered.forEach(name => {
            const info = estados[name];
            const key = info ? info.estado : 'Outros';
            const uf = info ? info.uf : '?';
            if (!map[key]) map[key] = { uf, times: [] };
            map[key].times.push(name);
        });
        return Object.keys(map)
            .sort((a, b) => {
                const totalA = map[a].times.reduce((sum, n) => sum + common.getTotalAdversario(meuTime, n), 0);
                const totalB = map[b].times.reduce((sum, n) => sum + common.getTotalAdversario(meuTime, n), 0);
                return totalB - totalA;
            })
            .map(e => ({ estado: e, ...map[e] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtro, filtered]);

    if (adversarioAtual) {
        return (
            <ViewAdversario
                meuTime={meuTime}
                adversario={adversarioAtual}
                onBack={() => navigate('/adversarios')}
                onSelectEstadio={onSelectEstadio}
            />
        );
    }

    return (
        <Box>
            <Box sx={{
                display: 'flex', alignItems: 'center', gap: 1,
                mb: 2, px: 2, py: 1,
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
            }}>
                <SearchIcon sx={{ color: '#8b949e', fontSize: 20 }} />
                <InputBase
                    placeholder="Buscar adversário..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    sx={{ flex: 1, color: 'text.primary', fontSize: '0.95rem' }}
                />
            </Box>

            <ToggleButtonGroup
                value={filtro}
                exclusive
                onChange={(_, v) => { if (v) irParaFiltro(v); }}
                size="small"
                sx={{ mb: 3 }}
            >
                <ToggleButton value="todos">Todos</ToggleButton>
                <ToggleButton value="brasileiros">Brasileiros</ToggleButton>
                <ToggleButton value="internacionais">Internacionais</ToggleButton>
                <ToggleButton value="selecoes">Seleções</ToggleButton>
            </ToggleButtonGroup>

            {filtered.length === 0 && (
                <Typography color="text.secondary" textAlign="center">Nenhum adversário encontrado</Typography>
            )}

            {filtro === 'internacionais' && byPais ? (
                byPais.map(({ pais, bandeira, times }) => (
                    <Box key={pais} sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, pb: 1, borderBottom: '1px solid #30363d' }}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <span className={`fi fi-${bandeira}`} style={{ fontSize: '1.2rem', borderRadius: '2px' }} />
                                {pais}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {times.length} {times.length === 1 ? 'time' : 'times'}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 2 }}>
                            {times.map(name => (
                                <AdversarioCard key={name} teamName={name} meuTime={meuTime} onSelect={irParaAdversario} />
                            ))}
                        </Box>
                    </Box>
                ))
            ) : filtro === 'brasileiros' && byEstado ? (
                byEstado.map(({ estado, uf, times }) => (
                    <Box key={estado} sx={{ mb: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, pb: 1, borderBottom: '1px solid #30363d' }}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box component="span" sx={{
                                    fontSize: '0.7rem', fontWeight: 700, px: 0.75, py: 0.25,
                                    backgroundColor: '#30363d', borderRadius: '4px',
                                    color: '#8b949e', letterSpacing: 0.5,
                                }}>
                                    {uf}
                                </Box>
                                {estado}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {times.length} {times.length === 1 ? 'time' : 'times'}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 2 }}>
                            {times.map(name => (
                                <AdversarioCard key={name} teamName={name} meuTime={meuTime} onSelect={irParaAdversario} />
                            ))}
                        </Box>
                    </Box>
                ))
            ) : (
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 2 }}>
                    {filtered.map(teamName => (
                        <AdversarioCard key={teamName} teamName={teamName} meuTime={meuTime} onSelect={irParaAdversario} />
                    ))}
                </Box>
            )}
        </Box>
    );
}
