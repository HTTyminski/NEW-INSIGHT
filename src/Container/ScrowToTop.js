import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import { Container } from './styles';

export default function ScrowToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[pathname]);
    
    return null
}
