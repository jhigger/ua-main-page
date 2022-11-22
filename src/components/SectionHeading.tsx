type SectionHeadingProps = { text: string };

const SectionHeading = ({ text }: SectionHeadingProps) => {
	return (
		<div className="mx-auto px-6 py-4 font-bebas text-xl uppercase text-purple-300 md:px-12 md:text-lg xl:py-8 xl:text-xl">
			{text}
		</div>
	);
};

export default SectionHeading;
