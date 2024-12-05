"use client";

import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Créer 15 bulles avec des propriétés aléatoires
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10, // Taille entre 10px et 40px
      left: Math.random() * 100, // Position horizontale en %
      duration: Math.random() * 1 + 1, // Animation entre 1s et 2s
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 h-screen">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 rounded-full bg-blue-200/30 animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animation: `bubble ${bubble.duration}s ease-in-out forwards`,
          }}
        />
      ))}
    </div>
  );
}