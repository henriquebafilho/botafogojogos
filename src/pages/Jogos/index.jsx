import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './jogos.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CakeIcon from '@mui/icons-material/Cake';
import LinhaJogo from './components/LinhaJogo';
import ScrollRestoration from './components/ScrollRestoration';
import VoltarAoTopo from './components/VoltarAoTopo';
import Adversarios from './pages/Adversarios';
import Anos from './pages/Anos';
import Estadios from './pages/Estadios';
import ProximosJogos from './pages/ProximosJogos';
import Estatisticas from './components/Estatisticas';
import Times from './Times';
import common from './common';
import { slugify } from './slug';

const meuTime = 'Botafogo';
const jogos = [...common.jogos].sort((a, b) => b.data.localeCompare(a.data));

const hoje = new Date();
const mmddHoje = String(hoje.getMonth() + 1).padStart(2, '0') + '-' + String(hoje.getDate()).padStart(2, '0');
const nesteDiaLista = [...common.jogos]
    .filter(j => j.data.slice(5) === mmddHoje)
    .sort((a, b) => b.data.localeCompare(a.data));

function NesteDiaList({ onSelectEstadio, onSelectAdversario }) {
    return (
        <Box>
            {nesteDiaLista.map(jogo => {
                const year = jogo.data.slice(0, 4);
                return (
                    <React.Fragment key={jogo.mandante + jogo.visitante + jogo.data}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3 }}>
                            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#30363d' }} />
                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                                {year}
                            </Typography>
                            <Box sx={{ flex: 1, height: '1px', backgroundColor: '#30363d' }} />
                        </Box>
                        <LinhaJogo
                            meuTime={meuTime}
                            jogo={jogo}
                            onSelectEstadio={onSelectEstadio}
                            onSelectAdversario={onSelectAdversario}
                        />
                    </React.Fragment>
                );
            })}
        </Box>
    );
}

const JOGOS_POR_PAGINA = 20;

function JogosList({ onSelectEstadio, onSelectAdversario }) {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(jogos.length / JOGOS_POR_PAGINA);
    const jogosPagina = jogos.slice((page - 1) * JOGOS_POR_PAGINA, page * JOGOS_POR_PAGINA);

    const handlePageChange = (_, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    let currentYear = null;
    return (
        <Box>
            {jogosPagina.map(jogo => {
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
                            onSelectAdversario={onSelectAdversario}
                        />
                    </React.Fragment>
                );
            })}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" />
            </Box>
        </Box>
    );
}

const SUBTAB_PATHS = { botafogo: '/', proximos: '/proximos-jogos', nestedia: '/neste-dia' };
const TAB_PATHS = ['/', '/anos', '/estadios', '/adversarios'];

function JogosTab({ subTab, onSelectEstadio, onSelectAdversario }) {
    const navigate = useNavigate();
    const goToSubTab = (v) => navigate(SUBTAB_PATHS[v]);

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <ToggleButtonGroup
                    value={subTab === 'nestedia' ? 'botafogo' : subTab}
                    exclusive
                    onChange={(_, v) => { if (v) goToSubTab(v); }}
                    size="small"
                >
                    <ToggleButton value="botafogo">Botafogo</ToggleButton>
                    <ToggleButton value="proximos">Próximos Jogos</ToggleButton>
                </ToggleButtonGroup>

                <Button
                    size="small"
                    startIcon={<CakeIcon />}
                    onClick={() => goToSubTab(subTab === 'nestedia' ? 'botafogo' : 'nestedia')}
                    variant={subTab === 'nestedia' ? 'contained' : 'outlined'}
                    sx={{
                        color: subTab === 'nestedia' ? '#0d1117' : nesteDiaLista.length > 0 ? '#e3b341' : '#8b949e',
                        borderColor: nesteDiaLista.length > 0 ? '#e3b341' : '#30363d',
                        backgroundColor: subTab === 'nestedia' ? '#e3b341' : 'transparent',
                        '&:hover': {
                            borderColor: '#e3b341',
                            backgroundColor: subTab === 'nestedia' ? '#c9a030' : 'rgba(227,179,65,0.08)',
                        },
                    }}
                >
                    Neste dia{nesteDiaLista.length > 0 ? ` (${nesteDiaLista.length})` : ''}
                </Button>
            </Box>

            {subTab === 'nestedia' && (
                <NesteDiaList onSelectEstadio={onSelectEstadio} onSelectAdversario={onSelectAdversario} />
            )}
            {subTab === 'botafogo' && (
                <JogosList onSelectEstadio={onSelectEstadio} onSelectAdversario={onSelectAdversario} />
            )}
            {subTab === 'proximos' && (
                <ProximosJogos onSelectEstadio={onSelectEstadio} onSelectAdversario={onSelectAdversario} />
            )}
        </Box>
    );
}

export default function Jogos() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectEstadio = (estadio) => {
        navigate(`/estadios/${slugify(estadio)}`);
    };

    const selectAdversario = (adversario) => {
        const nomeAtual = Times(adversario).nomeAtual;
        navigate(`/adversarios/${slugify(nomeAtual)}`);
    };

    const tab = location.pathname.startsWith('/anos') ? 1
        : location.pathname.startsWith('/estadios') ? 2
        : location.pathname.startsWith('/adversarios') ? 3
        : 0;

    return (
        <Box sx={{ mt: 2, px: { xs: 2, md: 4 }, pb: 6 }}>
            <ScrollRestoration />
            <VoltarAoTopo />

            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
                <img
                    src={process.env.PUBLIC_URL + '/escudos/Botafogo.png'}
                    alt="Botafogo"
                    style={{ width: 48, height: 48, objectFit: 'contain' }}
                />
                <Typography variant="h4">Jogos do Botafogo</Typography>
            </Box>

            {/* Stats */}
            <Box sx={{ mb: 4 }}>
                <Estatisticas meuTime={meuTime} jogos={jogos} />
            </Box>

            {/* Tabs */}
            <MuiTabs
                value={tab}
                onChange={(_, v) => navigate(TAB_PATHS[v])}
                sx={{ mb: 3, borderBottom: '1px solid #30363d' }}
            >
                <MuiTab label="Jogos" />
                <MuiTab label="Anos" />
                <MuiTab label="Estádios" />
                <MuiTab label="Adversários" />
            </MuiTabs>

            <Routes>
                <Route path="/" element={<JogosTab subTab="botafogo" onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />} />
                <Route path="/proximos-jogos" element={<JogosTab subTab="proximos" onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />} />
                <Route path="/neste-dia" element={<JogosTab subTab="nestedia" onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />} />
                <Route path="/anos" element={<Anos meuTime={meuTime} onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />} />
                <Route path="/anos/:ano" element={<Anos meuTime={meuTime} onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />} />
                <Route path="/estadios" element={<Estadios meuTime={meuTime} meusJogos={jogos} onSelectAdversario={selectAdversario} />} />
                <Route path="/estadios/:param" element={<Estadios meuTime={meuTime} meusJogos={jogos} onSelectAdversario={selectAdversario} />} />
                <Route path="/adversarios" element={<Adversarios meuTime={meuTime} meusJogos={jogos} onSelectEstadio={selectEstadio} />} />
                <Route path="/adversarios/:param" element={<Adversarios meuTime={meuTime} meusJogos={jogos} onSelectEstadio={selectEstadio} />} />
            </Routes>

        </Box>
    );
}
