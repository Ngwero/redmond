'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function ParticlesBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('ParticlesBackground useEffect running');
    console.log('particlesJS available:', typeof window !== 'undefined' && !!window.particlesJS);
    
    const checkAndLoad = () => {
      console.log('Checking particles...');
      if (typeof window !== 'undefined' && window.particlesJS && particlesRef.current) {
        console.log('Loading particles!');
        const config = {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 400 }, bubble: { distance: 400, size: 40, duration: 2 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
          },
          retina_detect: true
        };
        
        try {
          console.log('About to load particles');
          
          // particles.js expects the config as the second parameter to the function
          window.particlesJS(particlesRef.current.id, config);
          console.log('particlesJS called successfully');
        } catch (e) {
          console.error('Error loading particles:', e);
        }
      } else {
        console.log('particlesJS not ready yet, retrying...');
        setTimeout(checkAndLoad, 100);
      }
    };
    
    checkAndLoad();
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2
      }}
    />
  );
}
