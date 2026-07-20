import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollRestoration() {
    const location = useLocation();
    const navigationType = useNavigationType();
    const positions = useRef(new Map());

    useLayoutEffect(() => {
        const saved = navigationType === 'POP' ? positions.current.get(location.key) : undefined;
        window.scrollTo(0, saved ?? 0);
    }, [location, navigationType]);

    useLayoutEffect(() => {
        const onScroll = () => positions.current.set(location.key, window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [location.key]);

    return null;
}
