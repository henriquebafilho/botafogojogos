import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export default function SearchBox({ value, onChange, placeholder, inputProps, sx }) {
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', gap: 1,
            px: 2, py: 1,
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            ...sx,
        }}>
            <SearchIcon sx={{ color: '#8b949e', fontSize: 20 }} />
            <InputBase
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                inputProps={inputProps}
                sx={{ flex: 1, color: 'text.primary', fontSize: '0.95rem' }}
            />
            {value && (
                <IconButton
                    size="small"
                    onClick={() => onChange('')}
                    sx={{ color: '#8b949e', p: 0.25, '&:hover': { color: '#fff' } }}
                >
                    <ClearIcon sx={{ fontSize: 18 }} />
                </IconButton>
            )}
        </Box>
    );
}
