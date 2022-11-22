/* eslint-disable @next/next/no-img-element */
import SectionHeading from "./SectionHeading";

const PopularTools = () => {
	const tools = [
		{
			name: "Engagement Bot",
			bg: "bg-[url('https://famousfoxes.com/token_market.4e99a03d.png')]",
		},
		{
			name: "Security Bot",
			bg: "bg-[url('https://famousfoxes.com/rafffle.7c0e89ab.png')]",
		},
		{
			name: "NFT Tools",
			bg: "bg-[url('https://famousfoxes.com/missions.0a4029bf.png')]",
		},
		{
			name: "Others",
			bg: "bg-[url('https://famousfoxes.com/staking.abc2de9c.png')]",
		},
	];
	return (
		<>
			<SectionHeading text="Popular Tools" />
			<section className="grid grid-cols-1 gap-3 px-6 pb-6 md:grid-cols-2 md:gap-4 md:px-12 md:pb-12 xl:gap-8">
				{tools.map((item, idx) => {
					return (
						<Tool
							key={`tool-${idx}`}
							name={item.name}
							bg={item.bg}
						/>
					);
				})}
			</section>
		</>
	);
};

const Tool = ({ name, bg }: { name: string; bg: string }) => {
	return (
		<div className="relative flex cursor-pointer flex-col py-6 uppercase xl:py-12">
			<div
				className={
					bg +
					" xl:rounded-4xl item-center absolute inset-0 rounded-3xl bg-cover bg-center bg-no-repeat"
				}
			></div>
			<div className="xl:rounded-4xl absolute inset-0 rounded-3xl bg-black opacity-50"></div>
			<div className="z-10 m-auto flex text-center align-middle text-2xl opacity-100 md:pl-8 md:text-left md:text-3xl xl:text-5xl">
				{name}
			</div>
		</div>
	);
};

export default PopularTools;
