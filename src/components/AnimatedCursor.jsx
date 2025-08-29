import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const updateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            setPosition({ x: cursorX, y: cursorY });
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            setIsVisible(true);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handlePointerChange = (e) => {
            setIsPointer(window.getComputedStyle(e.target).cursor === 'pointer');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handlePointerChange);

        const animationFrame = () => {
            updateCursor();
            requestAnimationFrame(animationFrame);
        };
        animationFrame();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handlePointerChange);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed pointer-events-none z-[100] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ease-out ${
                        isPointer ? 'scale-150' : 'scale-100'
                    }`}
                />
            </div>

            {/* Cursor ring */}
            <div
                className="fixed pointer-events-none z-[99] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-8 h-8 border-2 border-white rounded-full transition-all duration-500 ease-out ${
                        isPointer ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                    }`}
                />
            </div>

            {/* Cursor trail */}
            <div
                className="fixed pointer-events-none z-[98] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`w-2 h-2 bg-white/30 rounded-full transition-all duration-700 ease-out ${
                        isPointer ? 'scale-200' : 'scale-100'
                    }`}
                />
            </div>
        </>
    );
};

export default AnimatedCursor;




