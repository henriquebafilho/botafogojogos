import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GridViewIcon from '@mui/icons-material/GridView';
import MapIcon from '@mui/icons-material/Map';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'flag-icons/css/flag-icons.min.css';
import common from '../common';
import estadiosLocais from '../estadiosLocais';
import coordenadas from '../estadiosCoordenadas';
import { slugify, findBySlug } from '../slug';
import ViewEstadio from './viewScreens/ViewEstadio';

// Fix leaflet default marker icons with bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().trim();

const jogos = common.jogos;

const todosEstadios = (() => {
    const set = new Set();
    for (const j of jogos) {
        if (j.estadio && j.estadio[0] !== '(') set.add(j.estadio);
    }
    const arr = Array.from(set);
    arr.sort((a, b) => {
        const diff = common.getTotalEstadio(b, jogos) - common.getTotalEstadio(a, jogos);
        return diff !== 0 ? diff : a.localeCompare(b);
    });
    return arr;
})();

function EstadioCard({ estadio, onClick }) {
    const total = common.getTotalEstadio(estadio, jogos);
    return (
        <Box
            onClick={() => onClick(estadio)}
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
                src={process.env.PUBLIC_URL + '/estadios/' + estadio + '.png'}
                alt={estadio}
                loading="lazy"
                style={{ display: 'block', width: '100%', aspectRatio: '1', objectFit: 'cover' }}
                onError={(e) => { e.target.style.display = 'none'; }}
            />
            <Box sx={{ p: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.3 }}>{estadio}</Typography>
                <Typography variant="caption" color="text.secondary">
                    {total} {total === 1 ? 'jogo' : 'jogos'}
                </Typography>
            </Box>
        </Box>
    );
}

function GroupHeader({ label, count, flag, uf }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, pb: 1, borderBottom: '1px solid #30363d' }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {flag ? (
                    <span className={`fi fi-${flag}`} style={{ fontSize: '1.2rem', borderRadius: '2px' }} />
                ) : (
                    <Box component="span" sx={{
                        fontSize: '0.7rem', fontWeight: 700, px: 0.75, py: 0.25,
                        backgroundColor: '#30363d', borderRadius: '4px',
                        color: '#8b949e', letterSpacing: 0.5,
                    }}>
                        {uf}
                    </Box>
                )}
                {label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {count} {count === 1 ? 'estádio' : 'estádios'}
            </Typography>
        </Box>
    );
}

function MapaEstadios({ estadios, onSelect }) {
    const comCoordenadas = estadios.filter(e => coordenadas[e]);
    if (comCoordenadas.length === 0) return (
        <Typography color="text.secondary" textAlign="center">Nenhum estádio com coordenadas disponíveis</Typography>
    );
    const center = [-22.9, -43.2];
    return (
        <Box sx={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #30363d', height: 480 }}>
            <MapContainer center={center} zoom={4} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />
                {comCoordenadas.map(estadio => {
                    const total = common.getTotalEstadio(estadio, jogos);
                    return (
                        <Marker key={estadio} position={coordenadas[estadio]}>
                            <Popup>
                                <Box sx={{ minWidth: 140, textAlign: 'center' }}>
                                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>{estadio}</Typography>
                                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                                        {total} {total === 1 ? 'jogo' : 'jogos'}
                                    </Typography>
                                    <Box
                                        component="button"
                                        onClick={() => onSelect(estadio)}
                                        style={{
                                            background: '#58a6ff', color: '#0d1117', border: 'none',
                                            borderRadius: 4, padding: '4px 12px', cursor: 'pointer',
                                            fontSize: 12, fontWeight: 700,
                                        }}
                                    >
                                        Ver jogos
                                    </Box>
                                </Box>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </Box>
    );
}

const FILTROS_VALIDOS = ['brasil', 'internacional'];

export default function Estadios({ meuTime, onSelectAdversario }) {
    const { param } = useParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [vista, setVista] = useState('grid');

    const filtro = FILTROS_VALIDOS.includes(param) ? param : 'todos';
    const estadioAtual = (param && !FILTROS_VALIDOS.includes(param))
        ? findBySlug(todosEstadios, param)
        : null;

    const irParaFiltro = (v) => navigate(v === 'todos' ? '/estadios' : `/estadios/${v}`);
    const irParaEstadio = (estadio) => navigate(`/estadios/${slugify(estadio)}`);

    const filtered = useMemo(() => {
        let list = todosEstadios;
        if (filtro === 'brasil') list = list.filter(e => estadiosLocais[e] && !estadiosLocais[e].pais);
        if (filtro === 'internacional') list = list.filter(e => estadiosLocais[e]?.pais);
        if (!search.trim()) return list;
        const term = normalize(search);
        return list.filter(e => normalize(e).includes(term));
    }, [search, filtro]);

    const byEstado = useMemo(() => {
        if (filtro !== 'brasil') return null;
        const map = {};
        filtered.forEach(nome => {
            const info = estadiosLocais[nome];
            const key = info?.estado || 'Outros';
            const uf = info?.uf || '?';
            if (!map[key]) map[key] = { uf, estadios: [] };
            map[key].estadios.push(nome);
        });
        return Object.keys(map)
            .sort((a, b) => {
                const totalA = map[a].estadios.reduce((s, e) => s + common.getTotalEstadio(e, jogos), 0);
                const totalB = map[b].estadios.reduce((s, e) => s + common.getTotalEstadio(e, jogos), 0);
                return totalB - totalA;
            })
            .map(e => ({ estado: e, ...map[e] }));
    }, [filtro, filtered]);

    const byPais = useMemo(() => {
        if (filtro !== 'internacional') return null;
        const map = {};
        filtered.forEach(nome => {
            const info = estadiosLocais[nome];
            if (!info?.pais) return;
            if (!map[info.pais]) map[info.pais] = { codigo: info.codigo, estadios: [] };
            map[info.pais].estadios.push(nome);
        });
        return Object.keys(map).sort().map(p => ({ pais: p, ...map[p] }));
    }, [filtro, filtered]);

    if (estadioAtual) {
        const jogosEstadio = jogos.filter(j => j.estadio === estadioAtual);
        return (
            <ViewEstadio
                meuTime={meuTime}
                jogosEstadio={jogosEstadio}
                estadio={estadioAtual}
                onBack={() => navigate('/estadios')}
                onSelectAdversario={onSelectAdversario}
            />
        );
    }

    const grid = (list) => (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 2 }}>
            {list.map(e => <EstadioCard key={e} estadio={e} onClick={irParaEstadio} />)}
        </Box>
    );

    return (
        <Box>
            {/* Count */}
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>{todosEstadios.length}</Typography>
                <Typography variant="body2" color="text.secondary">estádios visitados</Typography>
            </Box>

            {/* Search + view toggle */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 1, flex: 1,
                    px: 2, py: 1,
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '8px',
                }}>
                    <SearchIcon sx={{ color: '#8b949e', fontSize: 20 }} />
                    <InputBase
                        placeholder="Buscar estádio..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        sx={{ flex: 1, color: 'text.primary', fontSize: '0.95rem' }}
                    />
                </Box>
                <Tooltip title={vista === 'grid' ? 'Ver mapa' : 'Ver grade'}>
                    <IconButton
                        onClick={() => setVista(v => v === 'grid' ? 'mapa' : 'grid')}
                        sx={{
                            border: '1px solid #30363d', borderRadius: '8px',
                            color: vista === 'mapa' ? '#58a6ff' : '#8b949e',
                            backgroundColor: vista === 'mapa' ? 'rgba(88,166,255,0.1)' : '#161b22',
                            '&:hover': { backgroundColor: 'rgba(88,166,255,0.08)' },
                        }}
                    >
                        {vista === 'grid' ? <MapIcon /> : <GridViewIcon />}
                    </IconButton>
                </Tooltip>
            </Box>

            {vista === 'mapa' ? (
                <MapaEstadios estadios={filtered} onSelect={irParaEstadio} />
            ) : (
                <>
                    <ToggleButtonGroup
                        value={filtro}
                        exclusive
                        onChange={(_, v) => { if (v) irParaFiltro(v); }}
                        size="small"
                        sx={{ mb: 3 }}
                    >
                        <ToggleButton value="todos">Todos</ToggleButton>
                        <ToggleButton value="brasil">Brasil</ToggleButton>
                        <ToggleButton value="internacional">Internacional</ToggleButton>
                    </ToggleButtonGroup>

                    {filtered.length === 0 && (
                        <Typography color="text.secondary" textAlign="center">Nenhum estádio encontrado</Typography>
                    )}

                    {filtro === 'brasil' && byEstado ? (
                        byEstado.map(({ estado, uf, estadios }) => (
                            <Box key={estado} sx={{ mb: 4 }}>
                                <GroupHeader label={estado} uf={uf} count={estadios.length} />
                                {grid(estadios)}
                            </Box>
                        ))
                    ) : filtro === 'internacional' && byPais ? (
                        byPais.map(({ pais, codigo, estadios }) => (
                            <Box key={pais} sx={{ mb: 4 }}>
                                <GroupHeader label={pais} flag={codigo} count={estadios.length} />
                                {grid(estadios)}
                            </Box>
                        ))
                    ) : (
                        grid(filtered)
                    )}
                </>
            )}
        </Box>
    );
}
