import Bizouk from "@/components/bizouk";

export default function Billeterie() {
    return (
        <div className="min-h-screen pt-16 bg-gradient-to-b from-festival-50 to-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-festival-900">Billetterie</h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center text-festival-900">Réserver vos billets</h2>
                    <Bizouk />
                </div>
            </div>
        </div>
    );
}
