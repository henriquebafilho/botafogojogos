import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'flag-icons/css/flag-icons.min.css';
import LinhaJogo from '../../components/LinhaJogo';
import Estatisticas from '../../components/Estatisticas';
import coordenadas from '../../estadiosCoordenadas';
import estadiosLocais from '../../estadiosLocais';
import coordenadasSemEstadio from '../../locaisSemEstadio';

const iconeAmarelo = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-yellow.png',
    iconRetinaUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function LocalizacaoEstadio({ estadio }) {
    const semEstadioRegistrado = estadio[0] === '(';
    const posicao = semEstadioRegistrado ? coordenadasSemEstadio[estadio] : coordenadas[estadio];
    const local = estadiosLocais[estadio];

    if (!posicao) return null;

    const codigoBandeira = local?.codigo || 'br';
    const texto = semEstadioRegistrado
        ? estadio.slice(1, -1)
        : local?.pais
            ? [local?.cidade, local.pais].filter(Boolean).join(', ')
            : (local?.cidade && local?.uf) ? `${local.cidade}-${local.uf}` : local?.cidade;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 3 }}>
            <Box sx={{
                borderRadius: '8px', overflow: 'hidden', border: '1px solid #30363d',
                height: 220, width: '100%', maxWidth: 480,
            }}>
                <MapContainer
                    center={posicao}
                    zoom={12}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                        attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                    />
                    <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}" />
                    <Marker position={posicao} {...(semEstadioRegistrado ? { icon: iconeAmarelo } : {})} />
                </MapContainer>
            </Box>
            {texto && (
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: '1.1rem' }} />
                    {!semEstadioRegistrado && (
                        <span className={`fi fi-${codigoBandeira}`} style={{ fontSize: '1rem', borderRadius: '2px' }} />
                    )}
                    {texto}
                </Typography>
            )}
        </Box>
    );
}

export default function ViewEstadio({ meuTime, jogosEstadio, estadio, onBack, onSelectAdversario }) {
    const jogos = [...jogosEstadio].sort((a, b) => b.data.localeCompare(a.data));

    let currentYear = null;

    return (
        <Box>
            <Button onClick={onBack} sx={{ mb: 2, color: 'text.secondary', textTransform: 'none', pl: 0 }}>
                ← Voltar
            </Button>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Typography variant="h4">{estadio[0] === '(' ? estadio.slice(1, -1) : estadio}</Typography>
            </Box>

            <LocalizacaoEstadio estadio={estadio} />

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
