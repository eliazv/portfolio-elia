'use client';

import React, { useEffect, useState, useRef } from 'react';

type CursorState = 'default' | 'hover' | 'click' | 'text' | 'drag';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [trail, setTrail] = useState<{ x: number; y: number; opacity: number }[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setPosition({ x: newX, y: newY });
      setIsVisible(true);

      // Update trail
      trailRef.current = [
        { x: newX, y: newY, opacity: 1 },
        ...trailRef.current.slice(0, 8).map((point, index) => ({
          ...point,
          opacity: Math.max(0, 1 - (index + 1) * 0.15)
        }))
      ];
      setTrail([...trailRef.current]);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = () => setCursorState('default');
    
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button') ||
          target.classList.contains('magnetic-element')) {
        setCursorState('hover');
      }
      // Check for text elements
      else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' ||
               target.contentEditable === 'true') {
        setCursorState('text');
      }
      // Check for draggable elements
      else if (target.draggable) {
        setCursorState('drag');
      }
      else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  if (!isVisible) return null;

  const getCursorClasses = () => {
    const baseClass = 'custom-cursor-enhanced';
    switch (cursorState) {
      case 'hover':
        return `${baseClass} hover`;
      case 'click':
        return `${baseClass} click`;
      case 'text':
        return `${baseClass} text`;
      case 'drag':
        return `${baseClass} drag`;
      default:
        return baseClass;
    }
  };

  return (
    <>
      {/* Main cursor */}
      <div 
        ref={cursorRef}
        className={getCursorClasses()}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Inner dot for precision */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full opacity-80" />
        </div>
        
        {/* State-specific content */}
        {cursorState === 'text' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[2px] h-4 bg-current animate-pulse" />
          </div>
        )}
        
        {cursorState === 'click' && (
          <div className="absolute inset-0 animate-ping">
            <div className="w-full h-full rounded-full border-2 border-current opacity-75" />
          </div>
        )}
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="pointer-events-none fixed w-2 h-2 rounded-full z-[9998]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: point.opacity * 0.6,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${point.opacity * 0.4}) 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
