import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

export default function VoltarAoTopo() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible((window.pageYOffset || document.documentElement.scrollTop) > 200);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Box
            onClick={scrollToTop}
            title="Voltar ao topo"
            sx={{
                position: 'fixed',
                bottom: '32px',
                right: '24px',
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: '#161b22',
                border: '2px solid #484f58',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'auto' : 'none',
                transition: 'opacity 0.2s ease, border-color 0.15s ease',
                zIndex: 1250,
                fontSize: '1.2rem',
                color: '#e6edf3',
                '&:hover': { borderColor: '#8b949e' },
            }}
        >
            ↑
        </Box>
    );
}
