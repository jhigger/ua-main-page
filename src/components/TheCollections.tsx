/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./SectionHeading";

const TheCollections = () => {
	const collections = [
		{
			bg: "bg-orange-500",
			title: "Famous Foxes",
			subTitle: "The 'Genesis' Collection",
			collectionSize: "7,777",
			desc: "The Genesis NFTs from the collection are Famous Foxes. This consists of 7,777 generated foxes from a pool of unique attributes with over 1 Million possible combinations.",
		},
		{
			bg: "bg-pink-500",
			title: "Transdimensional Foxes",
			subTitle: "The 'Pixel' Collection",
			collectionSize: "7,777",
			desc: "TFFs, short for Transdimensional Fox Federation, are the pixelated versions of Famous Foxes. Originally airdropped to Famous Fox holders, the remaining 800 were later minted for .5 SOL.",
		},
		{
			bg: "bg-purple-500",
			title: "Friends & Foes",
			subTitle: "The Honorary Collection",
			collectionSize: "15",
			desc: "The Friends & Foes Collection consists of a series of Foxes created by various artists - and growing! These are typically auctioned off for $FOXY.",
		},
		{
			bg: "bg-blue-500",
			title: "Dens",
			subTitle: "The Metaverse Collection",
			collectionSize: "3,000",
			desc: "Dens are an NFT that works as the 'ownership' key to both your personal Den and the Dens Utility. Dens allow you to earn rewards, give you a way to show off both your Solana NFT's and your Ethereum NFT's in the same collection.",
		},
	];

	return (
		<>
			<SectionHeading text="The Collections" />
			<section className="px-6 pb-6 md:px-12 md:pb-12">
				{collections.map((item, idx) => {
					return (
						<CollectionItem
							key={`collection-${idx}`}
							bg={item.bg}
							title={item.title}
							subTitle={item.subTitle}
							collectionSize={item.collectionSize}
							desc={item.desc}
						/>
					);
				})}
			</section>
		</>
	);
};

type CollectionItemProps = {
	bg: string;
	title: string;
	subTitle: string;
	collectionSize: string;
	desc: string;
};
const CollectionItem = ({
	bg,
	title,
	subTitle,
	collectionSize,
	desc,
}: CollectionItemProps) => {
	return (
		<div
			className={
				bg +
				" relative my-2 w-full rounded-3xl bg-right-bottom px-4 pt-8 sm:bg-left-bottom md:my-5 md:rounded-[4rem] md:bg-none md:px-16 md:pt-16"
			}
		>
			<div className="flex justify-between font-bebas md:px-4 xl:px-8">
				<div className="flex flex-col text-left">
					<span className="text-4xl md:text-8xl">{title}</span>
					<span className="text-xl md:text-2xl">{subTitle}</span>
					<div className="font-hand flex pt-4 hover:cursor-pointer md:pt-2 xl:pt-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							aria-hidden="true"
							className="w-6 xl:w-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>{" "}
						<span className="pl-2 text-xl tracking-tighter md:text-2xl xl:text-3xl">
							Learn More
						</span>
					</div>
				</div>
				<div className="flex flex-col text-right">
					<span className="text-4xl md:text-5xl xl:text-7xl">
						{collectionSize}
					</span>
					<span className="text-xs md:text-lg xl:text-xl">
						Collection Size
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 pt-10 md:grid-cols-2 md:pt-0">
				<div className="hidden justify-items-start md:flex">
					<img
						src="https://famousfoxes.com/FffFox.e9569bf8.png"
						alt="a Famous Fox"
						className="xl:w-100 w-80"
					/>
				</div>
				<div className="flex flex-col justify-between md:pr-12 xl:pr-6">
					<div className="font-sans pb-12 text-2xl md:pb-0">
						<div className="pb-4 text-base font-semibold uppercase md:text-2xl md:font-bold md:normal-case">
							About the Collection
						</div>
						<p className="text-lg leading-tight md:text-xl">
							{desc}
						</p>
					</div>
					<div className="flex flex-col pb-8">
						<span className="font-bebas text-2xl">
							Buy a Famous Fox
						</span>
						<div className="flex flex-col gap-4 py-2 md:flex-row md:gap-2">
							<button className="shadow-button enabled:hover:shadow-button-hover flex cursor-pointer items-center justify-center rounded-full border-4 border-[#2E004B] bg-orange-500 py-2 px-6 font-bebas text-sm tracking-wide text-white shadow-[#2E004B] transition-all hover:shadow-[#2E004B] enabled:hover:translate-y-0.5 disabled:pointer-events-none disabled:cursor-default md:py-1 md:text-lg lg:text-xl">
								Marketplace
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TheCollections;
