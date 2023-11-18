/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { dropDownItems, links } from "../links";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
	const [state, setState] = useState(false);

	return (
		<nav className="container sticky top-0 z-20 mx-auto w-full">
			<div className="absolute mt-6 w-full">
				<div className="flex flex-row justify-between gap-2 px-4">
					<Logo />
					<div
						className={`rounded-3xl bg-black p-2 ${
							state ? "block" : "hidden"
						}`}
					>
						{/* mobile */}
						<ul className="items-center justify-center md:flex">
							{links.map((item, idx) => {
								return (
									<li key={idx}>
										<a
											className="inline-block py-2 px-4 text-base font-bold text-white no-underline"
											href={item.href}
										>
											{item.text}
										</a>
									</li>
								);
							})}
							{dropDownItems.map((item, idx) => {
								return (
									<li key={idx}>
										<a
											className="inline-block py-2 px-4 text-base font-bold text-white no-underline"
											href={item.href || "#"}
										>
											{item.text}
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
					<div className="pointer-events-auto ml-auto hidden font-bebas uppercase sm:flex">
						<NavItemContainer>
							<ul className="my-auto mx-4 flex h-full items-center align-middle">
								<li>
									<DropDownMenu
										label={
											<div
												className={
													"hover:cut-border px-4 py-1 text-base tracking-widest hover:text-white xl:text-lg "
												}
											>
												Utilities
											</div>
										}
										items={dropDownItems}
									/>
								</li>
								{links.map((item) => {
									return (
										<li key={item.text}>
											<NavLink
												name={item.text}
												link={item.href}
												textColor={item?.textColor}
											/>
										</li>
									);
								})}
							</ul>
						</NavItemContainer>
					</div>
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

const NavLink = ({
	name,
	link,
	textColor,
}: {
	name: string;
	link: string;
	textColor?: string;
}) => {
	return (
		<Link href={link}>
			<a
				className={
					"hover:cut-border px-4 py-1 text-base tracking-widest hover:text-white xl:text-lg " +
					textColor
				}
			>
				{name}
			</a>
		</Link>
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
