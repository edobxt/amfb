"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: "Accueil", href: "/" },
		{ label: "Programmation", href: "/programmation" },
		{ label: "Billetterie", href: "/billetterie" },
		{ label: "Cashless", href: "/cashless" },
	];

	const renderNavItems = (isMobile = false) => {
		return navItems.map((item) => {
			const isActive = pathname === item.href;
			const baseClasses = isMobile ? "block px-3 py-2 rounded-md" : "hover:text-festival-200 transition-colors";
			const activeClasses = isMobile ? "hover:bg-festival-700" : "";
			const textClasses = isActive ? (isMobile ? "bg-festival-700" : "text-festival-200") : "";

			return (
				<Link key={item.href} href={item.href}>
					<span
						className={`${baseClasses} ${activeClasses} ${textClasses}`}
						aria-current={isActive ? "page" : undefined}
						onClick={() => setIsOpen(false)}
					>
						{item.label}
					</span>
				</Link>
			);
		});
	};

	return (
		<nav className="bg-festival-600 text-white fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link href="/">
						<div className="flex items-center space-x-2">
							<Image
								src="/logo_aqua.png"
								alt="AQUA MUSIC FESTIVAL 2025"
								className="h-12 w-auto"
								width={120}
								height={120}
							/>
						</div>
					</Link>
					<button className="md:hidden p-2 rounded-md hover:bg-festival-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
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
							className="lucide lucide-x h-6 w-6"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
							
						) : (
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
								className="lucide lucide-menu h-6 w-6"
							>
								<line x1="4" x2="20" y1="12" y2="12"></line>
								<line x1="4" x2="20" y1="6" y2="6"></line>
								<line x1="4" x2="20" y1="18" y2="18"></line>
							</svg>
						)}
					</button>
					<div className="hidden md:flex space-x-8">
						{renderNavItems()}
					</div>
				</div>
			</div>
			<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{renderNavItems(true)}
				</div>
			</div>
		</nav>
	);
}
