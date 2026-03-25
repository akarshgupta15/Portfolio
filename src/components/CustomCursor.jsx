import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
            if (isClickable) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white transition-all duration-300 ${isHovering ? 'scale-[2.5] opacity-50' : 'scale-100 opacity-100'}`}
            animate={{
                x: mousePosition.x - (isHovering ? 30 : 12),
                y: mousePosition.y - (isHovering ? 30 : 12),
            }}
            transition={{
                type: 'spring',
                stiffness: 700,
                damping: 40,
                mass: 0.5
            }}
        />
    );
};

export default CustomCursor;
