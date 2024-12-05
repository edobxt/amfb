import Bizouk from "@/components/bizouk";
import Countdown from "@/components/countdown";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen">
			<div className="relative min-h-screen">
				<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://serv1.bizouk.com/images/aquamusicfestival/photo4.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}></div>
				<div className="absolute inset-0 bg-gradient-to-b from-festival-900/70 via-festival-900/50 to-festival-900/70">
					<div className="container mx-auto px-4 pt-32 pb-16">
						<div className="text-white text-center max-w-4xl mx-auto">
							<img src="https://www.aquamusicfestival.com/wp-content/uploads/2024/03/IMG_4856-768x355.png" alt="AQUA MUSIC FESTIVAL 2025" className="w-full max-w-2xl mx-auto h-auto mb-8" />
							<p className="text-xl md:text-2xl mb-8">Le plus grand wet festival de la caraibes</p>
							<div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg mb-12 justify-center">
								<div className="flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6 mr-2">
										<path d="M8 2v4"></path>
										<path d="M16 2v4"></path>
										<rect width="18" height="18" x="3" y="4" rx="2"></rect>
										<path d="M3 10h18"></path>
									</svg>
									<span>2-3 Août 2025</span>
								</div>
								<div className="flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 mr-2">
										<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									<span>Saint François, Guadeloupe</span>
								</div>
								<div className="flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music w-6 h-6 mr-2">
										<path d="M9 18V5l12-2v13"></path>
										<circle cx="6" cy="18" r="3"></circle>
										<circle cx="18" cy="16" r="3"></circle>
									</svg>
									<span>2 Jours de musique</span>
								</div>
							</div>
							<div className="max-w-3xl mx-auto">
								<Countdown date={"6/12/2024"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-6 text-center text-festival-900">Réserver vos billets</h2>
						<Bizouk />
					</div>
				</div>
			</div>
			<div className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-festival-900">Plongez dans l&apos;univers unique d&apos;AQUA MUSIC FESTIVAL</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="group relative overflow-hidden rounded-xl shadow-xl">
							<div className="aspect-[4/3]">
								<Image 
									src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3" 
									alt="Scène Principale" 
									layout="fill" 
									objectFit="cover" 
									className="transform group-hover:scale-110 transition-transform duration-700" 
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
								<div className="absolute bottom-0 p-6 text-white">
									<h3 className="text-xl font-bold mb-2">Scène Principale</h3>
									<p className="text-festival-100">Une scène exceptionnelle au bord de la plage</p>
								</div>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-xl shadow-xl">
							<div className="aspect-[4/3]">
								<Image 
									src="https://serv1.bizouk.com/images/aquamusicfestival/photo3.jpeg" 
									alt="Artistes Légendaires" 
									layout="fill" 
									objectFit="cover" 
									className="transform group-hover:scale-110 transition-transform duration-700" 
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
								<div className="absolute bottom-0 p-6 text-white">
									<h3 className="text-xl font-bold mb-2">Artistes Légendaires</h3>
									<p className="text-festival-100">Les meilleurs artistes dancehall</p>
								</div>
							</div>
						</div>
						<div className="group relative overflow-hidden rounded-xl shadow-xl">
							<div className="aspect-[4/3]">
								<Image 
									src="https://serv1.bizouk.com/images/aquamusicfestival/photo5.jpeg" 
									alt="Ambiance Exceptionnelle" 
									layout="fill" 
									objectFit="cover" 
									className="transform group-hover:scale-110 transition-transform duration-700" 
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
								<div className="absolute bottom-0 p-6 text-white">
									<h3 className="text-xl font-bold mb-2">Ambiance Exceptionnelle</h3>
									<p className="text-festival-100">Un cadre exceptionnel en Guadeloupe</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-20 bg-festival-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music w-16 h-16 mx-auto mb-6 text-festival-600">
								<path d="M9 18V5l12-2v13"></path>
								<circle cx="6" cy="18" r="3"></circle>
								<circle cx="18" cy="16" r="3"></circle>
							</svg>
							<h3 className="text-2xl font-bold mb-4 text-festival-900">Grande Scène</h3>
							<p className="text-festival-700">Une scène principale spectaculaire face à la mer</p>
						</div>
						<div className="text-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-16 h-16 mx-auto mb-6 text-festival-600">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
								<circle cx="9" cy="7" r="4"></circle>
								<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
								<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
							</svg>
							<h3 className="text-2xl font-bold mb-4 text-festival-900">10,000+ Festivaliers</h3>
							<p className="text-festival-700">Une ambiance unique et festive</p>
						</div>
						<div className="text-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-16 h-16 mx-auto mb-6 text-festival-600">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
							</svg>
							<h3 className="text-2xl font-bold mb-4 text-festival-900">Expérience VIP</h3>
							<p className="text-festival-700">Des services premium pour votre confort</p>
						</div>
					</div>
				</div>
			</div>
			<div className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6 text-festival-900">Un site exceptionnel</h2>
							<p className="text-lg text-festival-700 mb-8">Situé sur la magnifique plage des Raisins Clairs à Saint François, le festival vous offre un cadre paradisiaque entre mer turquoise et sable blanc.</p>
							<div className="space-y-4">
								<div className="flex items-center text-festival-800">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun w-6 h-6 mr-3 text-festival-600">
										<circle cx="12" cy="12" r="4"></circle>
										<path d="M12 2v2"></path>
										<path d="M12 20v2"></path>
										<path d="m4.93 4.93 1.41 1.41"></path>
										<path d="m17.66 17.66 1.41 1.41"></path>
										<path d="M2 12h2"></path>
										<path d="M20 12h2"></path>
										<path d="m6.34 17.66-1.41 1.41"></path>
										<path d="m19.07 4.93-1.41 1.41"></path>
									</svg>
									<span>Plage privée aménagée</span>
								</div>
								<div className="flex items-center text-festival-800">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6 mr-3 text-festival-600">
										<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									<span>Accès facile et parking gratuit</span>
								</div>
							</div>
						</div>
						<div className="rounded-xl overflow-hidden shadow-xl">
							<img src="https://serv1.bizouk.com/images/aquamusicfestival/photo1.jpeg" alt="Festival location" className="w-full h-[400px] object-cover" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
