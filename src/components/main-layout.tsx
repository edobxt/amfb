"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Nav from "./nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleTransition = async () => {
      setIsTransitioning(true);

      // Lecture explicite de la vidéo
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Erreur lors de la lecture de la vidéo :", error);
        }
      }

      // Arrêter la transition après la durée de la vidéo ou un délai spécifique
      const duration = videoRef.current?.duration || 1; // Par défaut, 1 seconde si la vidéo n'a pas de durée
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, duration * 1000);

      return () => clearTimeout(timer);
    };

    handleTransition();
  }, [pathname, searchParams]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity ${
          isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <video
          ref={videoRef}
          src="/transition.mp4"
          className="w-full h-full object-cover"
          preload="auto"
          muted
          playsInline
        />
      </div>
      <Nav />
      {children}
    </div>
  );
}