import { FaBook, FaDiscord, FaTwitter } from "react-icons/fa";
import { discordLink, twitterLink, whitepaperLink } from "../links";

const CTA = () => {
	const iconLinks = [
		{
			icon: <FaBook />,
			link: whitepaperLink,
			name: "Whitepaper",
		},
		{
			icon: <FaTwitter />,
			link: twitterLink,
			name: "Twitter",
		},
		{
			icon: <FaDiscord />,
			link: discordLink,
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
							className="z-10 w-max rounded-full border transition duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-black"
						>
							<a
								href={item.link}
								rel="noreferrer"
								className="flex items-center justify-start gap-4 px-4 py-2 md:justify-center"
							>
								<div className="py-2">{item.icon}</div>
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
