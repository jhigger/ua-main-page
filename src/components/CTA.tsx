import { FaBook, FaTwitter, FaDiscord } from "react-icons/fa";

const CTA = () => {
	const iconLinks = [
		{
			icon: <FaBook />,
			link: "https://utility-ape.gitbook.io/utility-ape-whitepaper/",
			name: "Whitepaper",
		},
		{
			icon: <FaTwitter />,
			link: "https://twitter.com/utilityapeNFT",
			name: "Twitter",
		},
		{
			icon: <FaDiscord />,
			link: "https://discord.com/invite/utilityape",
			name: "Discord",
		},
	];

	return (
		<div className="w-full max-w-screen-xl p-6">
			<ul className="flex flex-col items-center gap-4 md:flex-row">
				{iconLinks.map((item, idx) => {
					return (
						<li
							key={idx}
							className="z-10 w-max rounded-full border hover:bg-white hover:text-black"
						>
							<a
								href={item.link}
								rel="noreferrer"
								className="flex items-center justify-start gap-4 px-4 py-2 md:justify-center"
							>
								{item.icon}
								<span className="text-base uppercase md:text-xl">
									{item.name}
								</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CTA;
