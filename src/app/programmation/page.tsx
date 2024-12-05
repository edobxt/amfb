export default function Programmation() {
	return (
		<div className="min-h-screen pt-16 bg-gradient-to-b from-festival-50 to-white">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="flex items-center justify-center mb-12">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music w-8 h-8 text-festival-600 mr-3">
						<path d="M9 18V5l12-2v13"></path>
						<circle cx="6" cy="18" r="3"></circle>
						<circle cx="18" cy="16" r="3"></circle>
					</svg>
					<h1 className="text-4xl font-bold text-center text-festival-900">Programmation 2025</h1>
				</div>
				<div className="bg-white rounded-lg shadow-lg p-8 mb-16 text-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-clock w-16 h-16 text-festival-600 mx-auto mb-4">
						<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
						<path d="M16 2v4"></path>
						<path d="M8 2v4"></path>
						<path d="M3 10h5"></path>
						<path d="M17.5 17.5 16 16.3V14"></path>
						<circle cx="16" cy="16" r="6"></circle>
					</svg>
					<h2 className="text-2xl font-bold text-festival-800 mb-4">La programmation 2025 sera dévoilée prochainement</h2>
					<p className="text-festival-700 text-lg">Restez connectés pour découvrir les artistes qui enflammeront la scène d&apos;AQUA MUSIC FESTIVAL les 2 et 3 Août 2025 !</p>
				</div>
				<div className="bg-festival-50 rounded-lg p-6">
					<h3 className="text-xl font-semibold text-festival-800 mb-4">À propos de la programmation</h3>
					<ul className="space-y-2 text-festival-700">
						<li>• Les horaires exacts seront communiqués ultérieurement</li>
						<li>• De nombreuses surprises sont prévues</li>
						<li>• Plus de 10 heures de musique sur 2 jours</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
