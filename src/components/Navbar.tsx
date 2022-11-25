/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [state, setState] = useState(false);

	const navItems = [
		{ name: "Client", link: "http://client.utilityape.com/" },
		{ name: "Holders", link: "https://holders.utilityape.com/" },
		{ name: "Mutate", link: "https://mutate.utilityape.com/" },
		{ name: "Raid", link: "https://pay-to-raid.utilityape.com/" },
		{ name: "Dashboard", link: "http://dashboard.utilityape.com/" },
	];

	return (
		<nav className="container sticky top-0 z-20 mx-auto w-full">
			<div className="absolute mt-6 w-full">
				<div className="flex flex-row justify-between gap-2 px-4">
					<Logo />
					{/* <Announcement
						href="#"
						text="Marmalade, our art commission marketplace is now live!"
					/> */}
					<div
						className={`rounded-3xl bg-black p-2 ${
							state ? "block" : "hidden"
						}`}
					>
						<ul className="items-center justify-center md:flex">
							{navItems.map((item, idx) => {
								return (
									<li key={idx}>
										<a
											className="inline-block py-2 px-4 text-base font-bold text-white no-underline"
											href={item.link}
										>
											{item.name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="h-16 w-16 rounded-full bg-black md:hidden">
						<button
							className="flex transform items-center justify-center p-2 text-white transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none"
							onClick={() => setState(!state)}
						>
							{state ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
					<ul className="pointer-events-auto ml-auto hidden font-bebas text-xs uppercase sm:flex">
						<NavItemContainer>
							<li className="my-auto mx-4 flex h-full items-center align-middle">
								{navItems.map((item) => {
									return (
										<NavLink
											key={item.name}
											name={item.name}
											link={item.link}
										/>
									);
								})}
							</li>
						</NavItemContainer>
					</ul>
					{/* <ConnectButton /> */}
				</div>
			</div>
		</nav>
	);
};

const NavItemContainer = ({
	children,
}: {
	children: JSX.Element | string | null;
}) => {
	return (
		<div className="cut-corners h-full border-y-2 border-white border-opacity-20 bg-black bg-opacity-50 text-white">
			{children}
		</div>
	);
};

const Logo = () => {
	return (
		<Link href="/">
			<a className="pointer-events-auto h-16 w-16 flex-shrink-0 justify-center rounded-full bg-black align-middle text-white sm:h-12 sm:w-12 xl:h-16 xl:w-16">
				<img
					className="h-auto w-auto"
					src="/assets/utilityape.png"
					alt="Utility Ape Icon"
				/>
			</a>
		</Link>
	);
};

const Announcement = ({ href, text }: { href: string; text: string }) => {
	return (
		<a className="pointer-events-auto mr-auto hidden lg:block" href={href}>
			<NavItemContainer>
				<div className="my-auto mr-4 flex h-full items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						aria-hidden="true"
						className="ml-3 mr-2 h-5 w-5 xl:ml-4 xl:mr-3 xl:h-6 xl:w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
						></path>
					</svg>
					<div className="w-[20vw] xl:w-[30vw]">
						<div className="flex h-6 items-center overflow-hidden truncate px-1 font-bebas text-lg tracking-widest xl:text-xl">
							{text}
						</div>
					</div>
				</div>
			</NavItemContainer>
		</a>
	);
};

const NavLink = ({ name, link }: { name: string; link: string }) => {
	return (
		<Link href={link}>
			<a className="hover:cut-border px-4 py-1 text-base tracking-widest hover:text-white xl:text-lg">
				{name}
			</a>
		</Link>
	);
};

const ConnectButton = () => {
	return (
		<div className="pointer-events-auto mx-4 flex flex-shrink-0 font-bebas sm:mx-0">
			<button
				className="cut-corners hidden h-full w-full flex-row items-center justify-center border-y-2 border-white border-opacity-20 py-2.5 px-4 text-lg uppercase
					leading-loose tracking-widest text-white hover:border-black hover:bg-black hover:text-black before:hover:bg-neutral-100 before:hover:bg-opacity-100 sm:flex sm:text-base xl:text-lg"
				type="button"
			>
				Connect Wallet
			</button>
		</div>
	);
};

const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-full w-full"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const MenuIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-full w-full"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 8h16M4 16h16"
			/>
		</svg>
	);
};

export default Navbar;
