"use client";

import { useState, useEffect } from 'react';

interface TimeLeft {
	jours: number;
	heures: number;
	minutes: number;
	secondes: number;
}

export default function Countdown({ date }: { date: string }) {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		jours: 0,
		heures: 0,
		minutes: 0,
		secondes: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const [day, month, year] = date.split('/').map(Number);
			const targetDate = new Date(year, month - 1, day);
			const difference = +targetDate - +new Date();
			let timeLeft: TimeLeft = {
				jours: 0,
				heures: 0,
				minutes: 0,
				secondes: 0,
			};

			if (difference > 0) {
				timeLeft = {
					jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
					heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					secondes: Math.floor((difference / 1000) % 60),
				};
			}

			return timeLeft;
		};

		setTimeLeft(calculateTimeLeft());
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [date]);

	return (
		<div className="bg-festival-900/80 backdrop-blur-sm rounded-lg p-4 md:p-6 text-white">
			<div className="flex items-center justify-center mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-clock w-6 h-6 md:w-8 md:h-8 mr-2"
				>
					<circle
						cx="12"
						cy="12"
						r="10"
					></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
				<h2 className="text-base md:text-2xl font-semibold">Ouverture de la billetterie</h2>
			</div>
			<div className="flex md:grid md:grid-cols-4 gap-2 md:gap-4 justify-center">
				<div className="text-center px-2">
					<div className="text-xl md:text-4xl font-bold">{timeLeft.jours || '0'}</div>
					<div className="text-xs md:text-sm opacity-80">Jours</div>
				</div>
				<div className="text-center px-2">
					<div className="text-xl md:text-4xl font-bold">{timeLeft.heures || '0'}</div>
					<div className="text-xs md:text-sm opacity-80">Heures</div>
				</div>
				<div className="text-center px-2">
					<div className="text-xl md:text-4xl font-bold">{timeLeft.minutes || '0'}</div>
					<div className="text-xs md:text-sm opacity-80">Minutes</div>
				</div>
				<div className="text-center px-2">
					<div className="text-xl md:text-4xl font-bold">{timeLeft.secondes || '0'}</div>
					<div className="text-xs md:text-sm opacity-80">Secondes</div>
				</div>
			</div>
		</div>
	);
}
