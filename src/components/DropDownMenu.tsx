interface Props {
	//boolean to always open ddm (for presentation)
	forceOpen?: boolean;
	label?: string | JSX.Element;
	withDivider?: boolean;
	icon?: JSX.Element;
	items: DDMItem[];
	withBackground?: boolean;
}

export interface DDMItem {
	icon?: JSX.Element;
	text: string;
	desc?: string;
	href?: string;
}

const DropDownMenu = (props: Props) => {
	return (
		<div className="group relative inline-block text-left">
			<div>
				<button
					type="button"
					className={` ${
						props.withBackground
							? "border border-gray-300 bg-white shadow-sm dark:bg-gray-800"
							: ""
					} inline-block rounded-md text-white no-underline `}
					id="options-menu"
				>
					{props.label}
				</button>
			</div>

			<div className="absolute right-0 mt-0 hidden w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block dark:bg-gray-800">
				<div
					className={`py-1 ${
						props.withDivider ? "divide-y divide-gray-100" : ""
					}`}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					{props.items.map((item) => {
						return (
							<a
								key={item.text}
								href={item.href || "#"}
								className={`${
									item.icon ? "flex items-center" : "block"
								} text-md m-2 block rounded bg-black px-4 py-4 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
								role="menuitem"
							>
								{item.icon}

								<span className="flex flex-col">
									<span>{item.text}</span>
									{item.desc && (
										<span className="text-xs text-gray-400">
											{item.desc}
										</span>
									)}
								</span>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default DropDownMenu;
