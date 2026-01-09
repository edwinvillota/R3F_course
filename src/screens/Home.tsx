import { Link } from 'react-router';

type Section = {
	title: {
		text: string;
		className: string;
	};
	links: SectionLink[];
};

type SectionLink = {
	title: string;
	to: string;
	className: string;
};

const sections: Section[] = [
	{
		title: {
			text: 'Fundamentals',
			className: 'text-2xl font-semibold text-purple-300 mb-4',
		},
		links: [
			{
				title: 'Objects',
				to: '/fundamentals/objects',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Transforms',
				to: '/fundamentals/transforms',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Camera',
				to: '/fundamentals/camera',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Debug',
				to: '/fundamentals/debug',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Lights',
				to: '/fundamentals/lights',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Shadows',
				to: '/fundamentals/shadows',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'React hooks',
				to: '/fundamentals/hooks',
				className: 'text-blue-200 hover:underline',
			},
		],
	},
	{
		title: {
			text: 'Core',
			className: 'text-2xl font-semibold text-green-300 mb-4',
		},
		links: [
			{
				title: 'React three fiber hooks',
				to: '/core/r3f-hooks',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Controls',
				to: '/core/controls',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Events',
				to: '/core/events',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: '3D Models',
				to: '/core/models',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Textures',
				to: '/core/textures',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'HTML',
				to: '/core/html',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Text',
				to: '/core/text',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Loading screen',
				to: '/core/loading',
				className: 'text-blue-200 hover:underline',
			},
			{
				title: 'Scroll',
				to: '/core/scroll',
				className: 'text-blue-200 hover:underline',
			},
		],
	},
	{
		title: {
			text: 'Master',
			className: 'text-2xl font-semibold text-pink-300 mb-4',
		},
		links: [],
	},
];

type ChapterProps = {
	section: Section;
};

const Chapter = ({ section }: ChapterProps) => {
	const { title, links } = section;
	return (
		<section>
			<h2 className={title.className}>{title.text}</h2>
			<ul className="list-inside list-disc space-y-3 text-gray-200">
				{links.map(({ to, className, title }) => (
					<li key={to}>
						<Link to={to} className={className}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

const Home = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-gray-100 font-sans px-4 py-12">
			<div className="max-w-4xl mx-auto bg-gray-950 bg-opacity-80 rounded-xl shadow-2xl p-10">
				<header className="mb-12 text-center">
					<h1 className="text-5xl font-extrabold text-blue-300 mb-2 drop-shadow-lg">
						Navigation Hub
					</h1>
					<p className="text-lg text-gray-300">
						Explore the sections below to navigate through the app.
					</p>
				</header>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{sections.map((section) => (
						<Chapter section={section} key={section.title.text} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
