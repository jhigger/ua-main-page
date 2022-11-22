/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Navbar = () => {
	const navItems = [
		{ name: "Dashboard", link: "http://dashboard.utilityape.com/" },
		{ name: "Client", link: "http://client.utilityape.com/" },
		{ name: "Holders", link: "https://holders.utilityape.com/" },
		{ name: "Raid", link: "https://pay-to-raid.utilityape.com/" },
	];

	return (
		<nav className="w-full pointer-events-none container sticky top-0 z-20 mx-auto">
			<div className="absolute mt-6 w-full">
				<div className="flex flex-row justify-between gap-4 px-4">
					<Icon />
					{/* <Announcement
						href="#"
						text="Marmalade, our art commission marketplace is now live!"
					/> */}
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
					<MenuButton />
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

const Icon = () => {
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

const MenuButton = () => {
	return (
		<div className="pointer-events-auto h-16 w-16 cursor-pointer justify-center rounded-full bg-black p-3 align-middle text-white sm:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="2"
				stroke="currentColor"
				aria-hidden="true"
				className="h-full w-full p-1"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</div>
	);
};

export default Navbar;
