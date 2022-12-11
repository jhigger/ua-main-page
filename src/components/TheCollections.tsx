/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const TheCollections = () => {
	const collections = [
		{
			bg: "bg-green-500",
			title: "Utility Potions",
			subTitle: "The Potion Collection",
			collectionSize: "1,700",
			desc: "It appears that these potions have some kind of effect on the incubated ape.",
			marketPlace: "https://www.magiceden.io/marketplace/utility_potion",
			image: "/assets/UA-potion01.png",
		},
		{
			bg: "bg-blue-500",
			title: "Gen 1 Apes",
			subTitle: "The Generation 1 Collection",
			collectionSize: "3,600",
			desc: "Incubated apes that can be combined with other Gen 1s and potions to mutate into a GEN 2 apes. These apes were the original Utility Ape collection and are deflationary by nature.",
			marketPlace: "https://www.magiceden.io/marketplace/utility_ape",
			image: "/assets/UA-Gen1.png",
		},
		{
			bg: "bg-indigo-500",
			title: "Gen 2 Apes",
			subTitle: "The Generation 2 Collection",
			collectionSize: "3,000",
			desc: "The preeminent Utility Ape collection is GEN 2. It consists of 2,200 possibly mutated apes and 800 minted apes. This collection provides the greatest benefits to holders.",
			marketPlace:
				"https://www.magiceden.io/marketplace/utility_ape_gen_2",
			image: "/assets/UA-Gen2.png",
		},
		{
			bg: "bg-purple-500",
			title: "Transcendent Apes",
			subTitle: "The Pixel Collection",
			collectionSize: "7,777",
			desc: "Pixel Apes are pixelated apes that take pixel art to the next level. Not only do they look great, but they also provide rewards to holders. While the majority of these NFTs can be minted using Utility Apes' $BANANA token, 600 are reserved for minting for 0.69 SOL a piece.",
			image: "/assets/pixel.png",
		},
		{
			bg: "bg-red-500",
			title: "Kong Solos",
			subTitle: "The Honorary Collection",
			collectionSize: "10+",
			desc: "The 1:1 collection consists of a series of apes created by various artists in collaboration with other projects. These one-of-a-kind apes are auctioned off using $BANANA and the Magic Eden Auction.",
			image: "/assets/honorary.png",
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
							marketPlace={item.marketPlace}
							image={item.image}
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
	desc: string | JSX.Element;
	marketPlace?: string;
	image?: string;
};
const CollectionItem = ({
	bg,
	title,
	subTitle,
	collectionSize,
	desc,
	marketPlace,
	image,
}: CollectionItemProps) => {
	return (
		<div
			className={
				bg +
				" relative my-2 w-full rounded-3xl bg-right-bottom px-4 py-8 sm:bg-left-bottom md:my-5 md:rounded-[4rem] md:bg-none md:px-16 md:py-16"
			}
		>
			<div className="flex justify-between font-bebas md:px-4 xl:px-8">
				<div className="flex flex-col text-left">
					<span className="text-4xl md:text-8xl">{title}</span>
					<span className="text-xl md:text-2xl">{subTitle}</span>
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
					{image && (
						<div className="relative mx-8 my-4 flex items-center justify-center overflow-hidden rounded-3xl">
							<Image
								src={image}
								alt={`Image of ${title}`}
								width="320"
								height="320"
								loading="eager"
								priority
							/>
						</div>
					)}
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
					{marketPlace && (
						<div className="flex flex-col pt-8">
							<a
								href={marketPlace}
								target="_blank"
								rel="noreferrer"
								className="flex cursor-pointer items-center justify-center rounded-full border-4 border-white bg-black py-4 px-8 font-bebas text-sm tracking-widest text-white transition-all enabled:hover:translate-y-0.5 disabled:pointer-events-none disabled:cursor-default md:text-lg lg:text-2xl"
							>
								Buy {title}
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TheCollections;
