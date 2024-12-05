export default function Cashless() {
	return (
		<div className="min-h-screen pt-16 bg-gradient-to-b from-festival-50 to-white">
			<div className="max-w-7xl mx-auto px-4 py-12">
				<h1 className="text-4xl font-bold text-center mb-12 text-festival-900">
					Système Cashless
				</h1>
				<div className="grid md:grid-cols-3 gap-12 mb-16">
					<div className="text-center">
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
							className="lucide lucide-credit-card w-16 h-16 mx-auto mb-4 text-festival-600"
						>
							<rect width="20" height="14" x="2" y="5" rx="2"></rect>
							<line x1="2" x2="22" y1="10" y2="10"></line>
						</svg>
						<h3 className="text-2xl font-semibold mb-4 text-festival-800">
							Pratique
						</h3>
						<p className="text-festival-700">
							Payez facilement avec votre bracelet connecté sur tout le festival
						</p>
					</div>
					<div className="text-center">
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
							className="lucide lucide-shield w-16 h-16 mx-auto mb-4 text-festival-600"
						>
							<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
						</svg>
						<h3 className="text-2xl font-semibold mb-4 text-festival-800">
							Sécurisé
						</h3>
						<p className="text-festival-700">
							Vos transactions sont 100% sécurisées
						</p>
					</div>
					<div className="text-center">
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
							className="lucide lucide-wallet w-16 h-16 mx-auto mb-4 text-festival-600"
						>
							<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
							<path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
							<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
						</svg>
						<h3 className="text-2xl font-semibold mb-4 text-festival-800">
							Remboursable
						</h3>
						<p className="text-festival-700">
							Solde non utilisé remboursé après le festival
						</p>
					</div>
				</div>
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-2xl font-bold mb-6 text-festival-900">
						Comment ça marche ?
					</h2>
					<div className="space-y-6">
						<div className="flex items-start">
							<div className="bg-festival-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
								1
							</div>
							<div className="ml-4">
								<h3 className="text-xl font-semibold mb-2 text-festival-800">
									Activation
								</h3>
								<p className="text-festival-700">
									Créez votre compte en ligne ou aux bornes du festival et activez votre bracelet
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="bg-festival-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
								2
							</div>
							<div className="ml-4">
								<h3 className="text-xl font-semibold mb-2 text-festival-800">
									Rechargement
								</h3>
								<p className="text-festival-700">
									Rechargez votre compte en ligne ou aux points de rechargement sur le site
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="bg-festival-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
								3
							</div>
							<div className="ml-4">
								<h3 className="text-xl font-semibold mb-2 text-festival-800">
									Paiement
								</h3>
								<p className="text-festival-700">
									Payez simplement en présentant votre bracelet aux points de vente
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
