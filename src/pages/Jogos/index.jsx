import React, { useState } from 'react';
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
import Adversarios from './pages/Adversarios';
import Anos from './pages/Anos';
import Estadios from './pages/Estadios';
import ProximosJogos from './pages/ProximosJogos';
import Estatisticas from './components/Estatisticas';
import Times from './Times';
import common from './common';

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

export default function Jogos() {
    const [tab, setTab] = useState(0);
    const [subTab, setSubTab] = useState('botafogo');
    const [selectedEstadio, setSelectedEstadio] = useState('');
    const [selectedAdversario, setSelectedAdversario] = useState('');

    const selectEstadio = (estadio) => {
        setTab(2);
        setSelectedEstadio(estadio);
        setSelectedAdversario('');
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    const selectAdversario = (adversario) => {
        const nomeAtual = Times(adversario).nomeAtual;
        setTab(3);
        setSelectedAdversario(nomeAtual);
        setSelectedEstadio('');
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <Box sx={{ mt: 2, px: { xs: 2, md: 4 }, pb: 6 }}>

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
                onChange={(_, v) => { setTab(v); window.scrollTo({ top: 0, behavior: 'auto' }); }}
                sx={{ mb: 3, borderBottom: '1px solid #30363d' }}
            >
                <MuiTab label="Jogos" />
                <MuiTab label="Anos" />
                <MuiTab label="Estádios" />
                <MuiTab label="Adversários" />
            </MuiTabs>

            {/* Tab: Jogos */}
            {tab === 0 && (
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                        <ToggleButtonGroup
                            value={subTab}
                            exclusive
                            onChange={(_, v) => { if (v) { setSubTab(v); window.scrollTo({ top: 0, behavior: 'auto' }); } }}
                            size="small"
                        >
                            <ToggleButton value="botafogo">Botafogo</ToggleButton>
                            <ToggleButton value="proximos">Próximos Jogos</ToggleButton>
                        </ToggleButtonGroup>

                        <Button
                            size="small"
                            startIcon={<CakeIcon />}
                            onClick={() => setSubTab(v => v === 'nestedia' ? 'botafogo' : 'nestedia')}
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
                        <NesteDiaList onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />
                    )}
                    {subTab === 'botafogo' && (
                        <JogosList onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />
                    )}
                    {subTab === 'proximos' && (
                        <ProximosJogos onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />
                    )}
                </Box>
            )}

            {tab === 1 && (
                <Anos meuTime={meuTime} onSelectEstadio={selectEstadio} onSelectAdversario={selectAdversario} />
            )}

            {tab === 2 && (
                <Estadios meuTime={meuTime} meusJogos={jogos} selectedEstadio={selectedEstadio} onSelectAdversario={selectAdversario} />
            )}

            {tab === 3 && (
                <Adversarios meuTime={meuTime} meusJogos={jogos} selectedAdversario={selectedAdversario} onSelectEstadio={selectEstadio} />
            )}

        </Box>
    );
}
