// components/Transition.tsx
"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export const Transition: React.FC = () => {
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleStartTransition = useCallback((url: string) => {
		setIsTransitioning(true);
		if (videoRef.current) {
			videoRef.current.play().then(() => {
				videoRef.current.onended = () => {
					router.push(url);
					setIsTransitioning(false);
				};
			}).catch((error) => {
				console.error("Erreur lors de la lecture de la vidéo :", error);
				router.push(url);
				setIsTransitioning(false);
			});
		} else {
			router.push(url);
			setIsTransitioning(false);
		}
	}, [router]);

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			handleStartTransition(url);
		};

		// Add route change listener
		router.events.on("routeChangeStart", handleRouteChange);

		return () => {
			// Remove route change listener
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router, handleStartTransition]);

	return (
		<div
			className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity ${
				isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<video
				ref={videoRef}
				src="/transition.webm"
				className="w-full h-full object-cover"
				preload="auto"
				muted
				playsInline
			/>
		</div>
	);
};
