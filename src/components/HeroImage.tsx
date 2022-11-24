/* eslint-disable @next/next/no-img-element */
const HeroImage = () => {
	return (
		<div className="relative w-full py-16 opacity-100 lg:py-28">
			<div className="absolute top-0 left-0 h-[100vw] w-full md:h-[32rem] xl:h-[40rem]">
				<img
					className="h-full w-full object-cover object-center"
					src="https://utilityape.com/assets/images/backgroup/bg-1.jpg"
					alt="Utility APE"
				/>
				<div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black"></div>
			</div>
		</div>
	);
};

export default HeroImage;
